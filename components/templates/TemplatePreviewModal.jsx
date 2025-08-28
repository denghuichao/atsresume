import React, { useEffect, useState } from 'react';
import TemplateRenderer from './TemplateRenderer';
import { getSampleDataForTemplate } from './sampleData';

const TemplatePreviewModal = ({ template, isOpen, onClose, onUseTemplate }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
  }, [isOpen, template?.id]);

  if (!isOpen || !template || !mounted) return null;

  // Use template's sample data instead of user's resumeData
  const sampleData = getSampleDataForTemplate(template.id);

  if (!isOpen || !template || !mounted) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleUseTemplate = () => {
    onUseTemplate && onUseTemplate(template);
  };

  const handlePrint = () => {    
    // Get the modal content element
    const modalElement = document.querySelector('.template-preview-modal');
    if (!modalElement) {
      console.error('❌ Could not find modal content for printing');
      return;
    }

    // Save original title
    const originalTitle = document.title;
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      console.error('❌ Could not open print window');
      return;
    }

    // Get all stylesheets from current document
    const stylesheets = Array.from(document.styleSheets)
      .map(sheet => {
        try {
          if (sheet.href) {
            return `<link rel="stylesheet" href="${sheet.href}">`;
          } else if (sheet.ownerNode && sheet.ownerNode.innerHTML) {
            return `<style>${sheet.ownerNode.innerHTML}</style>`;
          }
        } catch (e) {
          console.warn('Could not access stylesheet:', e);
        }
        return '';
      })
      .join('\n');

    // Create print document content
    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Resume Preview - ${template.name}</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${stylesheets}
          <style>
            @page {
              size: A4;
              margin: 15mm 10mm;
            }
            body {
              margin: 0;
              padding: 20px;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .template-preview-modal {
              transform: scale(1) !important;
              max-width: none !important;
              box-shadow: none !important;
              padding: 0 !important;
              background: white !important;
            }
            @media print {
              body { 
                padding: 0; 
                background: white !important;
              }
              * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              .template-preview-modal {
                padding: 0 !important;
                margin: 0 !important;
              }
            }
          </style>
        </head>
        <body>
          ${modalElement.outerHTML}
        </body>
      </html>
    `;

    // Write content to print window
    printWindow.document.write(printContent);
    printWindow.document.close();

    // Wait for content to load, then print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    };
  };

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-75 transition-opacity"
        onClick={handleOverlayClick}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-4xl max-h-[90vh] w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold text-gray-900">
              {template.name} Template Preview
            </h2>
            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
              {template.layout.type}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Print button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Export Sample
            </button>
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-6 bg-gray-100">
            <div className="max-w-2xl mx-auto bg-white shadow-lg p-6">
              <TemplateRenderer 
                templateId={template.id}
                resumeData={sampleData}
                scale={0.8}
                className="template-preview-modal"
              />
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-gray-200 bg-gray-50">
          <div className="text-sm text-gray-600">
            This is a preview of your resume with the <strong>{template.name}</strong> template
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Close Preview
            </button>
            <button
              onClick={handleUseTemplate}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Use This Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Render directly without portal for SSR compatibility
  return modalContent;
};

export default TemplatePreviewModal;
