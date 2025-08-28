import React, { useContext, useState } from 'react';
import { ResumeContext } from '../../pages/builder';
import { getAvailableTemplates } from './templateConfig';
import TemplatePreview from './TemplatePreview';
import TemplatePreviewModal from './TemplatePreviewModal';

const TemplateSelector = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const templates = getAvailableTemplates();
  const [isChanging, setIsChanging] = useState(false);
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // console.log('TemplateSelector rendered:', {
  //   currentTemplate: resumeData.selectedTemplate,
  //   templatesCount: templates.length,
  //   isChanging,
  //   isPreviewOpen
  // });

  const handleTemplateChange = (templateId) => {
    // console.log('🎨 Template change requested:', {
    //   requestedTemplate: templateId,
    //   currentTemplate: resumeData.selectedTemplate,
    //   isChanging,
    //   isSameTemplate: resumeData.selectedTemplate === templateId
    // });
    
    if (isChanging || resumeData.selectedTemplate === templateId) {
      console.log('❌ Template change blocked:', isChanging ? 'already changing' : 'same template');
      return;
    }
    
    setIsChanging(true);
    // console.log('⏳ Starting template change...');
    
    // Add a slight delay for better UX feedback
    setTimeout(() => {
      // console.log('✅ Setting new template:', templateId);
      setResumeData({
        ...resumeData,
        selectedTemplate: templateId
      });
      setIsChanging(false);
      // console.log('🎉 Template change completed');
    }, 200);
  };

  const handlePreview = (template) => {
    // console.log('👁️ Preview requested for template:', template.id, template.name);
    
    // 使用setTimeout确保事件处理完毕后再打开模态框
    setTimeout(() => {
      setPreviewTemplate(template);
      setIsPreviewOpen(true);
      // console.log('📱 Preview modal opened');
    }, 50);
  };

  const closePreview = () => {
    console.log('❌ Closing preview modal');
    setIsPreviewOpen(false);
    setPreviewTemplate(null);
  };

  const handleUseTemplate = (template) => {
    // console.log('✨ Use template clicked:', template.id, template.name);
    handleTemplateChange(template.id);
    closePreview();
  };

  const currentTemplate = resumeData.selectedTemplate || 'classic';

  return (
    <div className="form-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Resume Template</h3>
        {isChanging && (
          <div className="flex items-center text-sm text-blue-600">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
            Switching...
          </div>
        )}
      </div>
      
      {/* Horizontal scrollable template container */}
      <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100">
        <div className="flex gap-6 min-w-max p-4">
          {templates.map((template) => (
            <div key={template.id} className="flex-shrink-0">
              <TemplatePreview
                template={template}
                isSelected={currentTemplate === template.id}
                onClick={() => handleTemplateChange(template.id)}
                onPreview={handlePreview}
              />
            </div>
          ))}
        </div>
        
        {/* Scroll indicator hint */}
        {templates.length > 3 && (
          <div className="flex items-center justify-center mt-2 text-xs text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Scroll to see more templates
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        )}
      </div>
      
      {/* Template Preview Modal */}
      <TemplatePreviewModal
        template={previewTemplate}
        isOpen={isPreviewOpen}
        onClose={closePreview}
        onUseTemplate={handleUseTemplate}
      />
    </div>
  );
};

export default TemplateSelector;
