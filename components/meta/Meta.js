import Head from "next/head";

export default function Meta({ title, keywords, description }) {
    const homepage = "https://atsresume.top/";
    const logo = "https://atsresume.top/assets/logo.png";
    const favicon = "/assets/favicon.ico";
    const faviconSvg = "/favicon.svg";
    const favicon32 = "/favicon-32x32.png";
    const favicon16 = "/favicon-16x16.png";

    function isiteJsonLd() {
        return {
            __html: `{
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": ${homepage},
                "logo": ${logo},
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91 9999999999",
                    "contactType": "customer service"
                },
                "image": ${logo},
                "description": ${description},
                "founder": "InterviewPilot AI",
                "foundingDate": "2023",
                "foundingLocation": "IN",
                "email": "xyz@gmail.com",
                "telephone": "+91 9999999999",
                "areaServed": "IN",
                "keywords": ${keywords},
                "mainEntityOfPage": ${homepage},
                "knowsAbout": ${keywords},
                "knowsLanguage": "English",
                "memberOf": "InterviewPilot AI",
                "owns": "InterviewPilot AI",
                "publishingPrinciples": ${homepage},
                "slogan": "Get hired with an ATS-optimized resume"
            }`
        }
    }


    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            
            {/* Favicon - Multiple formats for better browser support */}
            <link rel="icon" type="image/svg+xml" href={faviconSvg} />
            <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
            <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
            <link rel="shortcut icon" href={favicon} />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="theme-color" content="#3B82F6" />
            
            <title>{title}</title>
            <meta type="copyright" content="ATSResume" />
            <meta type="author" content="InterviewPilot AI" />
            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={homepage} />
            <meta property="og:title" content={title} />
            <meta
                property="og:description"
                content={description} />
            <meta property="og:image" content={logo} />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={homepage} />
            <meta property="twitter:title" content={title} />
            <meta
                property="twitter:description"
                content={description} />
            <meta property="twitter:image" content={logo} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={isiteJsonLd()}
                key="isiteJsonLd"
            />
        </Head>
    );
}