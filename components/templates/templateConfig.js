const templateConfig = {
  classic: {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional two-column layout with clean design',
    preview: '/assets/templates/classic-preview.png',
    layout: {
      type: 'two-column',
      columns: {
        left: 1,
        right: 2
      },
      gap: 'gap-6'
    },
    sections: {
      order: ['header', 'summary', 'education', 'skills', 'languages', 'certifications', 'experience', 'projects'],
      placement: {
        left: ['summary', 'education', 'skills', 'languages', 'certifications'],
        right: ['experience', 'projects']
      }
    },
    styles: {
      colors: {
        primary: '#2563eb',
        secondary: '#64748b',
        accent: '#f1f5f9',
        text: '#1e293b',
        border: '#e2e8f0'
      },
      typography: {
        name: 'text-xl font-bold',
        profession: 'text-base font-medium',
        sectionTitle: 'text-base font-bold border-b-2 border-gray-300 mb-1',
        content: 'text-sm font-normal',
        subContent: 'text-xs font-normal'
      },
      spacing: {
        sectionGap: 'space-y-2',
        itemGap: 'mb-1',
        padding: 'p-6'
      },
      layout: {
        container: 'grid grid-cols-3 gap-6',
        leftColumn: 'col-span-1 space-y-2',
        rightColumn: 'col-span-2 space-y-2'
      }
    }
  },
  modern: {
    id: 'modern',
    name: 'Modern',
    description: 'Contemporary single-column layout with emphasis on experience',
    preview: '/assets/templates/modern-preview.png',
    layout: {
      type: 'single-column',
      columns: {
        main: 1
      },
      gap: 'gap-4'
    },
    sections: {
      order: ['header', 'summary', 'experience', 'projects', 'skills', 'education', 'languages', 'certifications'],
      placement: {
        main: ['summary', 'experience', 'projects', 'skills', 'education', 'languages', 'certifications']
      }
    },
    styles: {
      colors: {
        primary: '#059669',
        secondary: '#6b7280',
        accent: '#f0fdf4',
        text: '#111827',
        border: '#d1d5db'
      },
      typography: {
        name: 'text-2xl font-bold',
        profession: 'text-lg font-medium',
        sectionTitle: 'text-lg font-bold border-l-4 border-green-600 pl-3 mb-2',
        content: 'text-sm font-normal',
        subContent: 'text-xs font-normal'
      },
      spacing: {
        sectionGap: 'space-y-4',
        itemGap: 'mb-2',
        padding: 'p-8'
      },
      layout: {
        container: 'flex flex-col gap-4',
        leftColumn: '',
        rightColumn: ''
      }
    }
  },
  creative: {
    id: 'creative',
    name: 'Creative',
    description: 'Unique layout with creative elements and modern styling',
    preview: '/assets/templates/creative-preview.png',
    layout: {
      type: 'asymmetric',
      columns: {
        left: 2,
        right: 1
      },
      gap: 'gap-8'
    },
    sections: {
      order: ['header', 'experience', 'projects', 'summary', 'skills', 'education', 'languages', 'certifications'],
      placement: {
        left: ['experience', 'projects'],
        right: ['summary', 'skills', 'education', 'languages', 'certifications']
      }
    },
    styles: {
      colors: {
        primary: '#7c3aed',
        secondary: '#64748b',
        accent: '#faf5ff',
        text: '#1e293b',
        border: '#d1d5db'
      },
      typography: {
        name: 'text-2xl font-bold',
        profession: 'text-base font-medium italic',
        sectionTitle: 'text-base font-bold bg-purple-100 px-3 py-1 rounded-md mb-2',
        content: 'text-sm font-normal',
        subContent: 'text-xs font-normal'
      },
      spacing: {
        sectionGap: 'space-y-3',
        itemGap: 'mb-1.5',
        padding: 'p-6'
      },
      layout: {
        container: 'grid grid-cols-3 gap-8',
        leftColumn: 'col-span-2 space-y-3',
        rightColumn: 'col-span-1 space-y-3'
      }
    }
  },
  minimalist: {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Clean and simple design with focus on content',
    preview: '/assets/templates/minimalist-preview.png',
    layout: {
      type: 'single-column',
      columns: {
        main: 1
      },
      gap: 'gap-4'
    },
    sections: {
      order: ['header', 'summary', 'experience', 'education', 'skills', 'projects', 'languages', 'certifications'],
      placement: {
        main: ['summary', 'experience', 'education', 'skills', 'projects', 'languages', 'certifications']
      }
    },
    styles: {
      colors: {
        primary: '#374151',
        secondary: '#6b7280',
        accent: '#f9fafb',
        text: '#111827',
        border: '#e5e7eb'
      },
      typography: {
        name: 'text-2xl font-bold',
        profession: 'text-lg font-medium',
        sectionTitle: 'text-lg font-bold mb-2',
        content: 'text-sm font-normal',
        subContent: 'text-xs font-normal'
      },
      spacing: {
        sectionGap: 'space-y-4',
        itemGap: 'mb-2',
        padding: 'p-6'
      },
      layout: {
        container: 'space-y-4',
        leftColumn: '',
        rightColumn: ''
      }
    }
  },
  executive: {
    id: 'executive',
    name: 'Executive',
    description: 'Professional design for senior positions',
    preview: '/assets/templates/executive-preview.png',
    layout: {
      type: 'two-column',
      columns: {
        left: 2,
        right: 1
      },
      gap: 'gap-6'
    },
    sections: {
      order: ['header', 'summary', 'experience', 'projects', 'education', 'skills', 'languages', 'certifications'],
      placement: {
        left: ['summary', 'experience', 'projects'],
        right: ['education', 'skills', 'languages', 'certifications']
      }
    },
    styles: {
      colors: {
        primary: '#1f2937',
        secondary: '#6b7280',
        accent: '#f3f4f6',
        text: '#111827',
        border: '#d1d5db'
      },
      typography: {
        name: 'text-2xl font-bold',
        profession: 'text-lg font-medium',
        sectionTitle: 'text-lg font-bold mb-2 pb-1 border-b border-gray-300',
        content: 'text-sm font-normal',
        subContent: 'text-xs font-normal'
      },
      spacing: {
        sectionGap: 'space-y-4',
        itemGap: 'mb-2',
        padding: 'p-6'
      },
      layout: {
        container: 'grid grid-cols-3 gap-6',
        leftColumn: 'col-span-2 space-y-4',
        rightColumn: 'col-span-1 space-y-4'
      }
    }
  }
};

export const getTemplate = (templateId) => {
  return templateConfig[templateId] || templateConfig.classic;
};

export const getAvailableTemplates = () => {
  return Object.values(templateConfig);
};

export const getDefaultTemplate = () => {
  return templateConfig.classic;
};

export default templateConfig;
