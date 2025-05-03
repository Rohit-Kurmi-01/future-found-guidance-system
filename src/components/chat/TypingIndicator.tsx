
import React from "react";

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start">
      <div className="bg-muted max-w-[80%] rounded-2xl p-4">
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse"></div>
          <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
          <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
