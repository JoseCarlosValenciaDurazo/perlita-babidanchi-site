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
