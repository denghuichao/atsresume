import { MdPictureAsPdf } from "react-icons/md";
import { useState } from "react";

const WinPrint = () => {
    const [showTip, setShowTip] = useState(false);

const print = () => {
    // Save original title
    const originalTitle = document.title;
    
    // Temporarily set a blank title for printing
    document.title = '';
    
    // Create print styles to hide header/footer content but preserve space
    const printStyle = `
        <style>
            @media print {
                @page {
                    size: A4;
                    margin-top: 15mm;
                    margin-bottom: 15mm;
                    margin-left: 10mm;
                    margin-right: 10mm;
                }
                
                body {
                    margin: 0 !important;
                    padding: 0 !important;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                
                .exclude-print {
                    display: none !important;
                }
                
                * {
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
            }
        </style>
    `;
    
    // Add print styles to the page
    const styleElement = document.createElement('style');
    styleElement.innerHTML = printStyle;
    document.head.appendChild(styleElement);
    
    // Listen for print completion or cancellation events
    const afterPrint = () => {
        // Restore original title
        document.title = originalTitle;
        // Remove temporary styles
        if (document.head.contains(styleElement)) {
            document.head.removeChild(styleElement);
        }
        // Remove event listener
        window.removeEventListener('afterprint', afterPrint);
    };
    
    // Add after-print event listener
    window.addEventListener('afterprint', afterPrint);
    
    // Delay print execution to ensure styles take effect
    setTimeout(() => {
        window.print();
    }, 100);
    };

return (
    <div className="exclude-print fixed bottom-5 right-10">
        {/* Print Tips */}
        {showTip && (
            <div className="absolute bottom-16 right-0 w-72 p-3 bg-white rounded-lg shadow-lg border border-gray-200 text-sm">
                <div className="font-semibold text-gray-800 mb-2">💡 Print Tips</div>
                <div className="text-gray-600 mb-2">
                    For best results when printing:
                </div>
                <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Uncheck &quot;Headers and footers&quot;</li>
                    <li>• Select A4 paper size</li>
                    <li>• System will auto-preserve margins</li>
                    <li>• Recommend saving as PDF first</li>
                </ul>
                <button 
                    className="text-blue-500 text-xs mt-2 hover:underline"
                    onClick={() => setShowTip(false)}
                >
                    Got it
                </button>
            </div>
        )}
        
        <button
            aria-label="Download Resume"
            className="flex items-center justify-center w-12 h-12 font-bold rounded-full bg-white text-green-600 shadow-lg border-2 border-green-200 hover:bg-green-50 hover:text-green-700 hover:border-green-300 transition-all duration-200"
            onClick={print}
            onMouseEnter={() => setShowTip(true)}
            onMouseLeave={() => setShowTip(false)}
        >
           <MdPictureAsPdf className="w-10 h-10" title="Download Resume"/>
        </button>
    </div>
    );
};

export default WinPrint;