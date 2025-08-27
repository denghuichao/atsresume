import React from "react";
import Head from "next/head";
import Link from "next/link";

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Terms of Service - ATSResumeBuilder</title>
        <meta name="description" content="Terms of Service for ATSResumeBuilder - Free ATS-friendly resume builder" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://atsresume-sepia.vercel.app/terms-of-service" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                ATSResumeBuilder
              </Link>
              <Link 
                href="/builder"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using ATSResumeBuilder ("the Service"), you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-700 mb-4">
                  ATSResumeBuilder is a free online resume builder that helps users create professional, ATS-friendly resumes. The service includes:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Resume building and editing tools</li>
                  <li>Professional templates</li>
                  <li>Real-time preview functionality</li>
                  <li>Download capabilities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-700 mb-4">You agree to:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Provide accurate and truthful information in your resume</li>
                  <li>Use the service for lawful purposes only</li>
                  <li>Not attempt to hack, reverse engineer, or damage the service</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Privacy and Data</h2>
                <p className="text-gray-700 mb-4">
                  Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  ATSResumeBuilder is open source software released under the MIT License. You retain ownership of the content you create using our service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
                <p className="text-gray-700 mb-4">
                  The service is provided "as is" without any warranties, expressed or implied. We do not guarantee that the service will be uninterrupted or error-free.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  In no event shall ATSResumeBuilder be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us at{" "}
                  <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@atsresume-sepia.vercel.app"}`} className="text-blue-600 hover:underline">
                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@atsresume-sepia.vercel.app"}
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
