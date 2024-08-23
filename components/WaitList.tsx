import React, { useEffect } from 'react';

const WaitList = () => {
  useEffect(() => {
    // Load the external script
    const script = document.createElement('script');
    script.src = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Load the external stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css';
    document.head.appendChild(link);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div id="getWaitlistContainer" data-waitlist_id="19781" data-widget_type="WIDGET_1"></div>
  );
};

export default WaitList;