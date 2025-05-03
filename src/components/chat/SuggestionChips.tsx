
import React from "react";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

interface SuggestionChipsProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

const SuggestionChips: React.FC<SuggestionChipsProps> = ({ suggestions, onSelect }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="font-medium mb-3 flex items-center">
        <BookOpen className="h-4 w-4 mr-2 text-future-purple" />
        <span>Suggested Questions</span>
      </h3>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <Button 
            key={index}
            variant="outline"
            size="sm"
            className="text-xs"
            onClick={() => onSelect(suggestion)}
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SuggestionChips;
