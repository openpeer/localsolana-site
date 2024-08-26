import React, { useEffect } from 'react';
import Script from 'next/script';

const WaitList = () => {
  useEffect(() => {
    // Load the external stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css';
    document.head.appendChild(link);

    // Add custom CSS to hide the image
    const style = document.createElement('style');
    style.textContent = `
      #getWaitlistContainer img {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Script
        src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
        strategy="lazyOnload"
      />
      <div id="getWaitlistContainer" data-waitlist_id="19781" data-widget_type="WIDGET_1"></div>
    </>
  );
};

export default WaitList;