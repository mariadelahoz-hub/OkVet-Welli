import { X } from "lucide-react";
import HunterForm from "./HunterForm";

interface HunterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HunterModal = ({ isOpen, onClose }: HunterModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center px-4">
      <div className="relative bg-white rounded-2xl w-full max-w-lg p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold mb-4 text-center">
          Contacta a un Hunter
        </h3>

        <HunterForm />
      </div>
    </div>
  );
};

export default HunterModal;
