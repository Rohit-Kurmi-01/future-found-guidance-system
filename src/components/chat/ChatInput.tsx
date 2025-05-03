
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, isLoading }) => {
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      onSend(inputMessage);
      setInputMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        handleSendMessage();
      }}
      className="flex w-full items-center space-x-2"
    >
      <Textarea
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        className="flex-1 min-h-[40px] max-h-[120px]"
        rows={1}
        style={{ resize: "none" }}
      />
      <Button 
        type="submit" 
        size="icon"
        disabled={!inputMessage.trim() || isLoading}
        className="bg-future-purple hover:bg-future-purple/90 h-10"
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default ChatInput;
