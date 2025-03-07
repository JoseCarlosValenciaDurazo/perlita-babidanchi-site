import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { X, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PDFPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

const PDFPreviewModal: React.FC<PDFPreviewModalProps> = ({ isOpen, onClose, url }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isOpen) return null;

  // Extract filename from URL for display
  const filename = decodeURIComponent(url.split('/').pop() || 'Document');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] h-[85vh] p-0 overflow-hidden">
        <DialogTitle className="sr-only">PDF Preview</DialogTitle>
        <div className="flex items-center justify-between p-2 sm:p-4 bg-white border-b">
          <div className="text-sm truncate max-w-[70%]">{filename}</div>
          <div className="flex items-center gap-2">
            {isMobile && (
              <>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 px-2"
                  onClick={() => window.open(url, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  <span className="hidden sm:inline">Open</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="h-8 px-2"
                  asChild
                >
                  <a href={url} download>
                    <Download className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                </Button>
              </>
            )}
            <DialogClose className="h-8 w-8 p-0 flex items-center justify-center">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
        </div>
        <div className="w-full h-[calc(100%-48px)] overflow-hidden bg-gray-100">
          {isMobile ? (
            <div className="flex flex-col items-center justify-center h-full p-4 text-center">
              <p className="text-gray-700 mb-4">
                For better viewing on mobile devices, please use one of these options:
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  onClick={() => window.open(url, '_blank')}
                  className="mb-2 sm:mb-0"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open in New Tab
                </Button>
                <Button 
                  variant="outline"
                  asChild
                >
                  <a href={url} download>
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>
          ) : (
            <iframe
              src={url}
              className="w-full h-full border-none"
              title="PDF Viewer"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PDFPreviewModal;