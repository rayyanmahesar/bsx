import { useEffect } from 'react';
import faviconImage from 'src\app\components\assets';

export default function Favicon() {
  useEffect(() => {
    // Create or update favicon link element
    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    
    link.type = 'image/png';
    link.href = faviconImage;
  }, []);

  return null;
}
