
import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, BookOpen, GraduationCap } from "lucide-react";
import { toast } from "sonner";

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
};

// Sample predefined responses for demo purposes
const aiResponses = {
  "help": "I'm your Future Found AI Assistant. I can help with career guidance, academic advice, mental health resources, and more. How can I assist you today?",
  "career": "Based on your assessment results, you might explore careers in technology, healthcare, or creative fields. Would you like me to provide more specific recommendations based on your interests in programming and design?",
  "stress": "I'm sorry to hear you're feeling stressed. Remember to take breaks, practice deep breathing, and break large tasks into smaller ones. Would you like me to suggest some specific stress management techniques?",
  "fail": "Failing an exam doesn't define your potential or future. Many successful people faced academic setbacks. Let's explore what went wrong and create a plan to improve. Would you like help creating a study plan?",
  "parents": "Having difficult conversations with parents about career choices can be challenging. I suggest starting by understanding their concerns, sharing your research, and finding compromise. Would you like some specific talking points?",
  "default": "Thank you for your message. I'm here to help with any career or academic questions. Could you provide more details so I can give you the best guidance?"
};

const ChatAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hi there! I'm your Future Found AI Assistant. I can help with career questions, academic advice, and emotional support. What would you like to discuss today?",
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user' as const,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      let responseContent = aiResponses.default;
      
      // Simple matching for demo
      const lowerCaseInput = inputMessage.toLowerCase();
      if (lowerCaseInput.includes("help") || lowerCaseInput.includes("what can you do")) {
        responseContent = aiResponses.help;
      } else if (lowerCaseInput.includes("career") || lowerCaseInput.includes("job") || lowerCaseInput.includes("profession")) {
        responseContent = aiResponses.career;
      } else if (lowerCaseInput.includes("stress") || lowerCaseInput.includes("anxious") || lowerCaseInput.includes("overwhelm")) {
        responseContent = aiResponses.stress;
      } else if (lowerCaseInput.includes("fail") || lowerCaseInput.includes("exam") || lowerCaseInput.includes("test")) {
        responseContent = aiResponses.fail;
      } else if (lowerCaseInput.includes("parent") || lowerCaseInput.includes("mom") || lowerCaseInput.includes("dad")) {
        responseContent = aiResponses.parents;
      }
      
      const aiMessage = {
        id: Date.now().toString(),
        content: responseContent,
        sender: 'assistant' as const,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestionChips = [
    "I'm feeling stressed about exams",
    "Help me choose a career path",
    "How do I talk to my parents about my career choices?",
    "I failed an important test",
    "What skills should I develop?"
  ];

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
          <div className="space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id}
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
                  <p className="text-sm">{message.content}</p>
                  <div className="mt-1 text-xs text-right opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted max-w-[80%] rounded-2xl p-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messageEndRef} />
          </div>
        </CardContent>
        
        {messages.length === 1 && (
          <div className="px-4 pb-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium mb-3 flex items-center">
                <BookOpen className="h-4 w-4 mr-2 text-future-purple" />
                <span>Suggested Questions</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {suggestionChips.map((suggestion, index) => (
                  <Button 
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => {
                      setInputMessage(suggestion);
                    }}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <CardFooter className="border-t pt-4">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex w-full items-center space-x-2"
          >
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button 
              type="submit" 
              size="icon"
              disabled={!inputMessage.trim() || isTyping}
              className="bg-future-purple hover:bg-future-purple/90"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChatAssistant;
