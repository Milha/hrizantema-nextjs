import Script from "next/script";

function GoogleAnalytics() {
  return (
    <div className="container-analytics">
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TRQ94EBVM7"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TRQ94EBVM7');
        `}
      </Script>
    </div>
  );
}

export default GoogleAnalytics;
