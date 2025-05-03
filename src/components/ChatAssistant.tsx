
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { MessageCircle, BookmarkCheck } from "lucide-react";
import { MessageType } from "./chat/ChatMessage";
import ChatMessageList from "./chat/ChatMessageList";
import SuggestionChips from "./chat/SuggestionChips";
import ChatInput from "./chat/ChatInput";
import { sendMessageToAssistant } from "./chat/ChatAssistantService";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

const ChatAssistant = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: "welcome",
      content: "Hi there! I'm your Future Found AI Assistant. I can help with career questions, academic advice, and emotional support. What would you like to discuss today?",
      sender: 'assistant',
      timestamp: new Date(),
      bookmarked: false
    }
  ]);
  
  const [isTyping, setIsTyping] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [savedMessages, setSavedMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    // Load saved messages from localStorage on component mount
    const saved = localStorage.getItem('savedMessages');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Convert string timestamps back to Date objects
        const messagesWithDates = parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        setSavedMessages(messagesWithDates);
      } catch (e) {
        console.error('Error loading saved messages:', e);
      }
    }
  }, []);

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
      timestamp: new Date(),
      bookmarked: false
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    const aiMessage = await sendMessageToAssistant(inputMessage, [...messages, userMessage]);
    
    if (aiMessage) {
      setMessages(prev => [...prev, aiMessage]);
    }
    
    setIsTyping(false);
  };

  const handleBookmarkToggle = (messageId: string, bookmarked: boolean) => {
    // Update bookmarked state in current messages
    const updatedMessages = messages.map(message => 
      message.id === messageId ? { ...message, bookmarked } : message
    );
    setMessages(updatedMessages);
    
    // Update saved messages list
    const targetMessage = messages.find(m => m.id === messageId);
    
    if (targetMessage) {
      if (bookmarked) {
        // Add to saved messages if not already there
        setSavedMessages(prev => {
          const newSaved = [...prev, { ...targetMessage, bookmarked: true }];
          localStorage.setItem('savedMessages', JSON.stringify(newSaved));
          return newSaved;
        });
      } else {
        // Remove from saved messages
        setSavedMessages(prev => {
          const newSaved = prev.filter(m => m.id !== messageId);
          localStorage.setItem('savedMessages', JSON.stringify(newSaved));
          return newSaved;
        });
      }
    }
  };

  const handleSelectSuggestion = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const bookmarkedCount = savedMessages.length;

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
            {bookmarkedCount > 0 && (
              <button 
                onClick={() => setShowBookmarks(true)}
                className="flex items-center gap-1 text-sm font-medium text-future-purple hover:text-future-purple/80 transition-colors"
              >
                <BookmarkCheck className="h-4 w-4" />
                <span>{bookmarkedCount} Saved</span>
              </button>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 overflow-y-auto p-4">
          <ChatMessageList 
            messages={messages} 
            isTyping={isTyping}
            onBookmarkToggle={handleBookmarkToggle}
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

      <Dialog open={showBookmarks} onOpenChange={setShowBookmarks}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <BookmarkCheck className="h-5 w-5 text-future-purple" />
              Saved Messages
            </DialogTitle>
          </DialogHeader>
          
          {savedMessages.length > 0 ? (
            <div className="space-y-4 mt-4">
              {savedMessages.map(message => (
                <ChatMessage 
                  key={message.id} 
                  message={message} 
                  onBookmarkToggle={handleBookmarkToggle}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              No saved messages yet. Bookmark important messages to see them here.
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChatAssistant;
