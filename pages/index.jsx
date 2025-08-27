import React, { useState } from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { 
  FaCheckCircle, 
  FaRocket, 
  FaUsers, 
  FaClock, 
  FaDownload,
  FaArrowRight,
  FaStar,
  FaGithub,
  FaTwitter,
  FaShieldAlt,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

const LandingPage = () => {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@atsresume.top";
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  const features = [
    {
      icon: <FaCheckCircle className="w-8 h-8 text-green-500" />,
      title: "ATS-Friendly",
      description: "Optimized for Applicant Tracking Systems to ensure your resume gets noticed by employers."
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-green-600" />,
      title: "Complete Privacy",
      description: "Your data stays on your device. We don't store any personal information on our servers - everything is saved locally in your browser."
    },
    {
      icon: <FaRocket className="w-8 h-8 text-blue-500" />,
      title: "Fast & Easy",
      description: "Create a professional resume in minutes with our intuitive drag-and-drop interface."
    },
    {
      icon: <FaUsers className="w-8 h-8 text-purple-500" />,
      title: "Professional Templates",
      description: "Choose from modern, clean templates designed by HR professionals."
    },
    {
      icon: <FaClock className="w-8 h-8 text-orange-500" />,
      title: "Real-time Preview",
      description: "See your changes instantly with our live preview feature."
    }
  ];

  const faqs = [
    {
      question: "What is an ATS-friendly resume?",
      answer: "An ATS (Applicant Tracking System) friendly resume is designed to be easily read by automated systems that many companies use to screen resumes. Our resume builder ensures proper formatting, keyword optimization, and clean structure that passes through ATS filters."
    },
    {
      question: "Is ATSResumeBuilder really free to use?",
      answer: "Yes! ATSResumeBuilder is completely free to use. You can create, edit, and download your resume without any charges. As an open-source project, we believe in providing accessible tools for job seekers."
    },
    {
      question: "Can I customize the resume templates?",
      answer: "Absolutely! Our cutting-edge builder allows you to customize colors, fonts, sections, and layout. You can reorder sections using our intuitive drag-and-drop interface and tailor your resume to match your personal style and industry requirements."
    },
    {
      question: "How does the drag-and-drop feature work?",
      answer: "Our latest technology enables you to easily reorder resume sections like Work Experience, Education, Skills, and Projects by simply dragging and dropping them. This allows you to prioritize the most relevant information for each job application."
    },
    {
      question: "Can I add a profile picture to my resume?",
      answer: "Yes, you can upload and add a professional profile picture to your resume. However, keep in mind that for some regions and industries, it's recommended to omit photos to avoid potential bias in the hiring process."
    },
    {
      question: "What file formats can I download?",
      answer: "Currently, you can download your resume as a high-quality PDF, which is the most widely accepted format by employers and ATS systems. The PDF maintains consistent formatting across all devices and platforms."
    },
    {
      question: "Is my data secure and private?",
      answer: "Your privacy is our priority. All data is stored locally in your browser and is not transmitted to external servers. We don't collect, store, or share your personal information. You have complete control over your data."
    },
    {
      question: "Can I use this on mobile devices?",
      answer: "Yes! Our resume builder is 100% mobile optimized and responsive. You can create and edit your resume on any device - desktop, tablet, or smartphone - with the same great experience."
    }
  ];

  const sections = [
    "Personal Information", "Social Media", "Summary", "Education",
    "Work Experience", "Projects", "Technical Skills", "Soft Skills",
    "Languages", "Additional Skills", "Certifications"
  ];

  return (
    <>
      <Head>
        <title>ATSResume - Free ATS Resume Builder</title>
        <meta name="description" content="Create ATS-friendly resumes for free. Cutting-edge builder with drag-and-drop interface, real-time preview, and templates." />
        <meta name="keywords" content="resume builder, ATS resume, free resume maker, CV builder, job application, resume template" />
        <meta name="author" content="ATSResume" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="ATSResume - Free ATS Resume Builder" />
        <meta property="og:description" content="Create professional, ATS-optimized resumes in minutes. Cutting-edge builder with modern templates and real-time preview." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atsresume.top" />
        <meta property="og:image" content="/assets/og-image.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ATSResume - Free ATS Resume Builder" />
        <meta name="twitter:description" content="Create professional, ATS-optimized resumes in minutes. Cutting-edge builder with modern templates and real-time preview." />
        <meta name="twitter:image" content="/assets/twitter-image.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://atsresume.top" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "ATSResumeBuilder",
              "description": "Cutting-edge ATS-friendly resume builder with drag-and-drop interface for creating professional resumes",
              "url": "https://atsresume.top",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "creator": {
                "@type": "Organization",
                "name": "ATSResumeBuilder"
              }
            })
          }}
        />
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0MX2THHK4Q"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0MX2THHK4Q');
        `}
      </Script>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-blue-600">
                  ATSResumeBuilder
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Link 
                  href="/builder"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Get Started Free
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Create Your Perfect
                <span className="text-blue-600 block">ATS-Friendly Resume</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                A cutting-edge resume builder that uses the latest technology to create professional, ATS-optimized resumes in minutes. 
                Say goodbye to frustration and wasted time on manual formatting - get noticed by employers instantly.
              </p>
              <div className="flex justify-center">
                <Link 
                  href="/builder"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg inline-flex items-center"
                >
                  Start Building Now <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose ATSResumeBuilder?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Built with cutting-edge technology, our advanced resume builder leverages the latest innovations to help you succeed in today&apos;s competitive job market.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Sections */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Complete Resume Sections
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Build a comprehensive resume with all the sections employers expect to see.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.map((section, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{section}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Highlight */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Drag & Drop Simplicity
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Easily reorder sections with our intuitive drag-and-drop interface. 
                  Customize your resume layout to highlight your strengths.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <FaCheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Reorder Work Experience, Projects, and Skills</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Real-time preview as you edit</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Professional formatting maintained</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <FaRocket className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Ready in Minutes
                    </h3>
                    <p className="text-gray-600">
                      Create a professional resume faster than ever before.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Stats */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Built for Performance
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Our platform is optimized for speed and user experience with excellent PageSpeed scores.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">98</div>
                <div className="text-blue-100">PageSpeed Score</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">&lt;2s</div>
                <div className="text-blue-100">Load Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Mobile Optimized</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Got questions? We have answers. Here are the most common questions about our cutting-edge resume builder.
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    {openFAQ === index ? (
                      <FaChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <FaChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Still have questions? We&apos;re here to help!
              </p>
              <a 
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Contact us at {contactEmail}
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Land Your Dream Job?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of job seekers who have successfully created ATS-friendly resumes with our cutting-edge platform powered by the latest technology.
            </p>
            <Link 
              href="/builder"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg inline-flex items-center"
            >
              Create Your Resume Now <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="text-2xl font-bold text-blue-400 mb-4">
                  ATSResumeBuilder
                </div>
                <p className="text-gray-400 mb-4">
                  Create professional, ATS-friendly resumes that help you get noticed by employers. 
                  Free, fast, and optimized for success.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/denghuichao/atsresume" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://x.com/eagleineast" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Features</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>ATS-Friendly Templates</li>
                  <li>Drag & Drop Builder</li>
                  <li>Real-time Preview</li>
                  <li>Mobile Optimized</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a 
                      href={`mailto:${contactEmail}`}
                      className="hover:text-white transition-colors"
                    >
                      Contact Via Email
                    </a>
                  </li>
                  <li>
                    <Link 
                      href="/terms-of-service"
                      className="hover:text-white transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/privacy-policy"
                      className="hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 ATSResumeBuilder. Open source resume builder under MIT License.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;

