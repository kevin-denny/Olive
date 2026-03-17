import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const baseUrl = 'https://houseofolive.lk';
    
    // Ensure the homepage uses just the trailing slash, and other pages drop trailing slash if preferred
    // For consistency, let's keep it exact as the route path.
    const path = location.pathname;
    const currentUrl = `${baseUrl}${path}`;

    // Update canonical tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', currentUrl);
    } else {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      canonicalTag.setAttribute('href', currentUrl);
      document.head.appendChild(canonicalTag);
    }

    // Update og:url tag
    let ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag) {
      ogUrlTag.setAttribute('content', currentUrl);
    } else {
      ogUrlTag = document.createElement('meta');
      ogUrlTag.setAttribute('property', 'og:url');
      ogUrlTag.setAttribute('content', currentUrl);
      document.head.appendChild(ogUrlTag);
    }

  }, [location]);

  return null;
};

export default SEOUpdater;
