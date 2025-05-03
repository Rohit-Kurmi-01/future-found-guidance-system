
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { MessageType } from "./ChatMessage";

export async function sendMessageToAssistant(inputMessage: string, messages: MessageType[]): Promise<MessageType | null> {
  try {
    // Call the Supabase Edge Function
    const { data, error } = await supabase.functions.invoke('chat-completion', {
      body: { 
        message: inputMessage,
        chatHistory: messages
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    // Add AI response
    const aiMessage: MessageType = {
      id: Date.now().toString(),
      content: data.response,
      sender: 'assistant',
      timestamp: new Date()
    };
    
    return aiMessage;
  } catch (error) {
    console.error('Error getting response:', error);
    toast.error('Failed to get a response. Please try again.');
    
    // Fallback response in case of error
    const errorMessage: MessageType = {
      id: Date.now().toString(),
      content: "I'm having trouble connecting right now. Please try again in a moment.",
      sender: 'assistant',
      timestamp: new Date()
    };
    
    return errorMessage;
  }
}
