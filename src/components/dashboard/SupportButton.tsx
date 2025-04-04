
import React from "react";
import { MessageCircle } from "lucide-react";

interface SupportButtonProps {
  onClick: () => void;
}

const SupportButton = ({ onClick }: SupportButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-[#0071e3] text-white rounded-full p-3 shadow-lg hover:bg-[#0262c2] transition-colors"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default SupportButton;
