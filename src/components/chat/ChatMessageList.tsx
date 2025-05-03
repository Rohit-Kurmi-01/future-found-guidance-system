
import React, { useRef, useEffect } from "react";
import ChatMessage, { MessageType } from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

interface ChatMessageListProps {
  messages: MessageType[];
  isTyping: boolean;
  onBookmarkToggle: (messageId: string, bookmarked: boolean) => void;
}

const ChatMessageList: React.FC<ChatMessageListProps> = ({ messages, isTyping, onBookmarkToggle }) => {
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <ChatMessage 
          key={message.id} 
          message={message} 
          onBookmarkToggle={onBookmarkToggle}
        />
      ))}
      
      {isTyping && <TypingIndicator />}
      
      <div ref={messageEndRef} />
    </div>
  );
};

export default ChatMessageList;
