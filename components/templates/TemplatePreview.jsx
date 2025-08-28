import React, { useState, useEffect } from 'react';

// Updated component with unified info and buttons layout, hover interactions, and template-specific colors
const TemplatePreview = ({ template, isSelected = false, onClick, onPreview }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isImageAreaHovered, setIsImageAreaHovered] = useState(false);

  // Use useEffect to check image loading
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      // console.log(`Successfully loaded template image: ${template.id}.png`);
      setImageLoaded(true);
      setImageError(false);
    };
    img.onerror = () => {
      console.log(`Failed to load template image: ${template.id}.png`);
      setImageLoaded(false);
      setImageError(true);
    };
    img.src = `/resume-templates/${template.id}.png`;
  }, [template.id]);

  // console.log('🎨 TemplatePreview rendered:', {
  //   templateId: template.id,
  //   templateName: template.name,
  //   isSelected,
  //   hasOnClick: !!onClick,
  //   hasOnPreview: !!onPreview,
  //   imageLoaded,
  //   imageError,
  //   isImageAreaHovered
  // });

  const handleUseClick = (e) => {
    // console.log('✅ Use button clicked for:', template.id, template.name);
    e.preventDefault();
    e.stopPropagation();
    onClick && onClick();
  };

  const handlePreview = (e) => {
    // console.log('👁️ Preview button clicked for:', template.id, template.name);
    e.preventDefault();
    e.stopPropagation();
    onPreview && onPreview(template);
  };

  // 参考你提供的模板颜色方案
  const getTemplateColor = () => {
    switch (template.id) {
      case 'classic': return 'bg-blue-500';
      case 'modern': return 'bg-green-500';
      case 'creative': return 'bg-purple-500';
      case 'minimalist': return 'bg-gray-500';
      case 'executive': return 'bg-indigo-500';
      default: return 'bg-gray-400';
    }
  };

  // 基于主色调生成信息区背景色
  const getTemplateInfoBackground = () => {
    switch (template.id) {
      case 'classic': return 'bg-blue-50 border-blue-200';
      case 'modern': return 'bg-green-50 border-green-200';
      case 'creative': return 'bg-purple-50 border-purple-200';
      case 'minimalist': return 'bg-gray-50 border-gray-200';
      case 'executive': return 'bg-indigo-50 border-indigo-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  // 基于主色调生成强调文字颜色
  const getTemplateAccentColor = () => {
    switch (template.id) {
      case 'classic': return 'text-blue-700';
      case 'modern': return 'text-green-700';
      case 'creative': return 'text-purple-700';
      case 'minimalist': return 'text-gray-700';
      case 'executive': return 'text-indigo-700';
      default: return 'text-gray-700';
    }
  };

  // 基于主色调生成标签背景色
  const getTemplateTagBackground = () => {
    switch (template.id) {
      case 'classic': return 'bg-blue-100 text-blue-700';
      case 'modern': return 'bg-green-100 text-green-700';
      case 'creative': return 'bg-purple-100 text-purple-700';
      case 'minimalist': return 'bg-gray-100 text-gray-700';
      case 'executive': return 'bg-indigo-100 text-indigo-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div 
      className={`
        relative w-48 rounded-md border shadow-sm transition-all duration-200
        ${isSelected ? 'ring-2 ring-blue-500 shadow-md' : 'hover:shadow-md'}
        ${imageLoaded && !imageError ? 'bg-contain bg-center bg-no-repeat' : 'bg-white'}
      `}
      style={{
        height: '271px',
        ...(imageLoaded && !imageError ? {
          backgroundImage: `url(/resume-templates/${template.id}.png)`,
          backgroundSize: 'contain',
          backgroundPosition: 'center top',
          backgroundColor: '#f8f9fa'
        } : {})
      }}
      onMouseEnter={(e) => {
        // 检查鼠标进入的是否是信息区域
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseY = e.clientY;
        const cardBottom = rect.bottom;
        const infoAreaHeight = 120; // 信息区域大约的高度
        
        // 如果鼠标在信息区域内，不隐藏
        if (mouseY > cardBottom - infoAreaHeight) {
          setIsImageAreaHovered(false);
        } else {
          // 如果鼠标在图片区域，隐藏信息区域
          setIsImageAreaHovered(true);
        }
      }}
      onMouseMove={(e) => {
        // 实时检查鼠标位置
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseY = e.clientY;
        const cardBottom = rect.bottom;
        const infoAreaHeight = 120;
        
        if (mouseY > cardBottom - infoAreaHeight) {
          setIsImageAreaHovered(false);
        } else {
          setIsImageAreaHovered(true);
        }
      }}
      onMouseLeave={() => setIsImageAreaHovered(false)}
      data-template-id={template.id}
    >
      {/* Content based on image loading state */}
      {!imageLoaded || imageError ? (
        // No image: Show colored block at top + combined info and buttons
        <>
          {/* Colored block at top - 使用getTemplateColor */}
          <div className={`h-36 flex items-center justify-center text-4xl font-bold text-white ${getTemplateColor()}`}>
            {template.name.charAt(0)}
          </div>
          
          {/* Combined template information and buttons */}
          <div className={`absolute bottom-0 left-0 right-0 px-4 py-3 ${getTemplateInfoBackground()} border-t`}>
            {/* Template information */}
            <div className="text-center mb-3">
              <h4 className={`font-semibold text-base mb-2 transition-colors duration-200 ${
                isSelected ? getTemplateAccentColor() : 'text-gray-900'
              }`}>
                {template.name}
              </h4>
              
              <p className="text-xs text-gray-600 leading-relaxed mb-2 line-clamp-2">
                {template.description}
              </p>
              
              {/* Template features */}
              <div className="flex flex-wrap gap-1 justify-center">
                <span className={`inline-block px-2 py-0.5 text-[10px] rounded-full ${getTemplateTagBackground()}`}>
                  {template.layout.type}
                </span>
                <span className={`inline-block px-2 py-0.5 text-[10px] rounded-full ${getTemplateTagBackground()}`}>
                  {template.sections.order.length} sections
                </span>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex gap-2">
              <button
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-[10px] py-2 px-1 rounded transition-colors duration-200 flex items-center justify-center gap-1 min-w-0"
                onClick={handlePreview}
                title="Preview template"
              >
                <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 616 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="truncate">Preview</span>
              </button>
              
              <button
                className={`flex-1 text-[10px] py-2 px-1 rounded transition-colors duration-200 flex items-center justify-center gap-1 min-w-0 ${
                  isSelected 
                    ? 'bg-green-500 text-white cursor-default' 
                    : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
                }`}
                onClick={isSelected ? undefined : handleUseClick}
                disabled={isSelected}
                title={isSelected ? 'Currently selected' : 'Use this template'}
              >
                <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isSelected ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  )}
                </svg>
                <span className="truncate">{isSelected ? 'Selected' : 'Use'}</span>
              </button>
            </div>
          </div>
        </>
      ) : (
        // Has image: Show combined info and buttons with hover hide when mouse is over image area
        <>
          {/* Combined template information and buttons block - shows/hides based on mouse position */}
          <div 
            className={`
              absolute bottom-0 left-0 right-0 px-4 py-3 ${getTemplateInfoBackground()} border-t rounded-b-md z-10
              transition-all duration-300 transform
              ${isImageAreaHovered ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'}
            `}
            onMouseEnter={() => setIsImageAreaHovered(false)}
          >
            {/* Template information */}
            <div className="text-center mb-3">
              <h4 className={`font-semibold text-base mb-2 transition-colors duration-200 ${
                isSelected ? getTemplateAccentColor() : 'text-gray-900'
              }`}>
                {template.name}
              </h4>
              
              <p className="text-xs text-gray-700 leading-relaxed mb-2 line-clamp-2 font-medium">
                {template.description}
              </p>
              
              {/* Template features */}
              <div className="flex flex-wrap gap-1 justify-center">
                <span className={`inline-block px-2 py-0.5 text-[10px] rounded-full ${getTemplateTagBackground()}`}>
                  {template.layout.type}
                </span>
                <span className={`inline-block px-2 py-0.5 text-[10px] rounded-full ${getTemplateTagBackground()}`}>
                  {template.sections.order.length} sections
                </span>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex gap-2">
              <button
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-[10px] py-2 px-1 rounded transition-colors duration-200 flex items-center justify-center gap-1 min-w-0"
                onClick={handlePreview}
                title="Preview template"
              >
                <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 616 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="truncate">Preview</span>
              </button>
              
              <button
                className={`flex-1 text-[10px] py-2 px-1 rounded transition-colors duration-200 flex items-center justify-center gap-1 min-w-0 ${
                  isSelected 
                    ? 'bg-green-500 text-white cursor-default' 
                    : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
                }`}
                onClick={isSelected ? undefined : handleUseClick}
                disabled={isSelected}
                title={isSelected ? 'Currently selected' : 'Use this template'}
              >
                <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isSelected ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  )}
                </svg>
                <span className="truncate">{isSelected ? 'Selected' : 'Use'}</span>
              </button>
            </div>
          </div>
        </>
      )}
      
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute top-3 right-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center z-10">
          <svg 
            className="w-4 h-4 text-white" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default TemplatePreview;
