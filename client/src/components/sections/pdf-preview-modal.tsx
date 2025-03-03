import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PDFPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  description?: string;
}

export default function PDFPreviewModal({
  isOpen,
  onClose,
  pdfUrl,
  title,
  description,
}: PDFPreviewModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && (
            <DialogDescription>{description}</DialogDescription>
          )}
        </DialogHeader>
        <div className="flex-1 w-full h-full min-h-[60vh]">
          <iframe
            src={`${pdfUrl}#toolbar=0`}
            className="w-full h-full rounded-md"
            title={title}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
import React from 'react';
import { X } from 'lucide-react';

interface PDFPreviewModalProps {
  url: string;
  onClose: () => void;
}

export default function PDFPreviewModal({ url, onClose }: PDFPreviewModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-6xl h-[85vh] rounded-lg shadow-lg overflow-hidden">
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
        />
      </div>
    </div>
  );
}
