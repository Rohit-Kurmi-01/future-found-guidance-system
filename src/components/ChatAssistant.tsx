
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { MessageType } from "./chat/ChatMessage";
import ChatMessageList from "./chat/ChatMessageList";
import SuggestionChips from "./chat/SuggestionChips";
import ChatInput from "./chat/ChatInput";
import { sendMessageToAssistant } from "./chat/ChatAssistantService";

const ChatAssistant = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: "welcome",
      content: "Hi there! I'm your Future Found AI Assistant. I can help with career questions, academic advice, and emotional support. What would you like to discuss today?",
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const suggestionChips = [
    "I'm feeling stressed about exams",
    "Help me choose a career path",
    "How do I talk to my parents about my career choices?",
    "I failed an important test",
    "What skills should I develop?"
  ];

  const handleSendMessage = async (inputMessage: string) => {
    // Add user message
    const userMessage: MessageType = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    const aiMessage = await sendMessageToAssistant(inputMessage, [...messages, userMessage]);
    
    if (aiMessage) {
      setMessages(prev => [...prev, aiMessage]);
    }
    
    setIsTyping(false);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <div className="h-[calc(100vh-10rem)] flex flex-col">
      <Card className="flex-1 flex flex-col overflow-hidden">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-future-purple p-2 rounded-full text-white">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>AI Career Assistant</CardTitle>
                <CardDescription>Ask any questions about careers, education, or wellbeing</CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 overflow-y-auto p-4">
          <ChatMessageList 
            messages={messages} 
            isTyping={isTyping} 
          />
        </CardContent>
        
        {messages.length === 1 && (
          <div className="px-4 pb-4">
            <SuggestionChips 
              suggestions={suggestionChips} 
              onSelect={handleSelectSuggestion} 
            />
          </div>
        )}
        
        <CardFooter className="border-t pt-4">
          <ChatInput 
            onSend={handleSendMessage} 
            isLoading={isTyping} 
          />
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChatAssistant;
