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

    // Cleanup function
    return () => {
      document.head.removeChild(link);
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