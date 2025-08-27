import { MdPictureAsPdf } from "react-icons/md";
import { useState } from "react";

const WinPrint = () => {
    const [showTip, setShowTip] = useState(false);

const print = () => {
    // 保存原始标题
    const originalTitle = document.title;
    
    // 临时设置一个空白标题用于打印
    document.title = '';
    
    // 创建打印样式，隐藏页眉页脚内容但保留空间
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
    
    // 添加打印样式到页面
    const styleElement = document.createElement('style');
    styleElement.innerHTML = printStyle;
    document.head.appendChild(styleElement);
    
    // 监听打印完成或取消事件
    const afterPrint = () => {
        // 恢复原始标题
        document.title = originalTitle;
        // 移除临时样式
        if (document.head.contains(styleElement)) {
            document.head.removeChild(styleElement);
        }
        // 移除事件监听器
        window.removeEventListener('afterprint', afterPrint);
    };
    
    // 添加打印后事件监听器
    window.addEventListener('afterprint', afterPrint);
    
    // 延迟执行打印，确保样式生效
    setTimeout(() => {
        window.print();
    }, 100);
    };

return (
    <div className="exclude-print fixed bottom-5 right-10">
        {/* 打印提示 */}
        {showTip && (
            <div className="absolute bottom-16 right-0 w-72 p-3 bg-white rounded-lg shadow-lg border border-gray-200 text-sm">
                <div className="font-semibold text-gray-800 mb-2">💡 打印提示</div>
                <div className="text-gray-600 mb-2">
                    为获得最佳效果，请在打印时：
                </div>
                <ul className="text-gray-600 text-xs space-y-1">
                    <li>• 取消勾选"页眉和页脚"</li>
                    <li>• 选择A4纸张尺寸</li>
                    <li>• 系统会自动保留合适边距</li>
                    <li>• 建议保存为PDF后打印</li>
                </ul>
                <button 
                    className="text-blue-500 text-xs mt-2 hover:underline"
                    onClick={() => setShowTip(false)}
                >
                    知道了
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