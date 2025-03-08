import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface PDFPreviewModalProps {
  url: string;
  onClose: () => void;
  isOpen: boolean;
}

export default function PDFPreviewModal({ url, onClose, isOpen }: PDFPreviewModalProps) {
  // Add error handling for PDF loading
  const handleIframeError = (error: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
    console.error('Error loading PDF:', error);
    console.log('Attempted URL:', url);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[85vh]">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 z-10 p-2 bg-white/90 rounded-full hover:bg-gray-100"
        >
          <X className="h-6 w-6" />
        </button>
        <iframe
          src={url}
          className="w-full h-full"
          title="PDF Preview"
          onError={handleIframeError}
        />
      </DialogContent>
    </Dialog>
  );
}