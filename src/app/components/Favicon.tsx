import { useEffect } from 'react';
import faviconImage from 'src/app/components/favicon.png';

export default function Favicon() {
  useEffect(() => {
    let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;

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
