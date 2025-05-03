
import React, { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { GraduationCap, BookmarkPlus, BookmarkCheck } from "lucide-react";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export type MessageType = {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  bookmarked?: boolean;
};

interface ChatMessageProps {
  message: MessageType;
  onBookmarkToggle: (messageId: string, bookmarked: boolean) => void;
  searchTerm?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, onBookmarkToggle, searchTerm = "" }) => {
  const [isBookmarked, setIsBookmarked] = useState(message.bookmarked || false);

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newBookmarkState = !isBookmarked;
    setIsBookmarked(newBookmarkState);
    onBookmarkToggle(message.id, newBookmarkState);
    
    toast.success(newBookmarkState 
      ? "Message saved for future reference" 
      : "Message removed from bookmarks"
    );
  };

  // Highlight search matches in message content
  const highlightContent = () => {
    if (!searchTerm) return message.content;

    const parts = message.content.split(new RegExp(`(${searchTerm})`, 'gi'));

    return (
      <React.Fragment>
        {parts.map((part, i) => {
          const isMatch = part.toLowerCase() === searchTerm.toLowerCase();
          return isMatch ? (
            <span key={i} className="bg-yellow-200 dark:bg-yellow-800 rounded px-1">{part}</span>
          ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
          );
        })}
      </React.Fragment>
    );
  };

  return (
    <div 
      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div 
        className={`
          relative max-w-[80%] rounded-2xl p-4
          ${message.sender === 'user' 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-muted'
          }
          ${searchTerm && message.content.toLowerCase().includes(searchTerm.toLowerCase())
            ? 'ring-2 ring-yellow-500' 
            : ''
          }
        `}
      >
        {message.sender === 'assistant' && (
          <div className="flex items-center mb-2">
            <Avatar className="h-6 w-6 mr-2">
              <div className="bg-future-blue rounded-full text-white flex items-center justify-center h-full">
                <GraduationCap className="h-3 w-3" />
              </div>
            </Avatar>
            <span className="text-sm font-medium">Future Found Assistant</span>
          </div>
        )}
        <p className="text-sm whitespace-pre-wrap">{searchTerm ? highlightContent() : message.content}</p>
        <div className="mt-1 text-xs flex justify-between items-center">
          <span className="opacity-70">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                onClick={handleBookmark}
                className={`ml-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 ${
                  isBookmarked ? 'text-future-purple' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
                aria-label={isBookmarked ? "Remove bookmark" : "Save for reference"}
              >
                {isBookmarked ? (
                  <BookmarkCheck className="h-4 w-4" />
                ) : (
                  <BookmarkPlus className="h-4 w-4" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              {isBookmarked ? "Remove bookmark" : "Save for reference"}
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
