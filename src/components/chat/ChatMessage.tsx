
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { GraduationCap } from "lucide-react";

export type MessageType = {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
};

interface ChatMessageProps {
  message: MessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div 
      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div 
        className={`
          max-w-[80%] rounded-2xl p-4
          ${message.sender === 'user' 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-muted'
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
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        <div className="mt-1 text-xs text-right opacity-70">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
