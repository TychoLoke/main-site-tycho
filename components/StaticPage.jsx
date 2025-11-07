import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { routeMap } from '../data/pageConfigs.js';

function resolveRoute(href, currentUrl) {
  if (!href) return null;
  if (/^(https?:|mailto:|tel:|whatsapp:)/i.test(href)) {
    return null;
  }
  try {
    const base = currentUrl || window.location.href;
    const url = new URL(href, base);
    const pathname = url.pathname;
    const normalized = pathname.replace(/^\/+/, '');
    return (
      routeMap[pathname] ||
      routeMap[`/${normalized}`] ||
      routeMap[normalized] ||
      routeMap[`${normalized}.html`] ||
      routeMap[`${pathname}.html`]
    );
  } catch (error) {
    return null;
  }
}

export default function StaticPage({ html }) {
  const containerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return () => {};
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const fragment = document.createDocumentFragment();

    Array.from(doc.body.childNodes).forEach((node) => {
      if (node.nodeName === 'SCRIPT') {
        const script = document.createElement('script');
        Array.from(node.attributes).forEach((attr) => {
          script.setAttribute(attr.name, attr.value);
        });
        script.textContent = node.textContent;
        fragment.appendChild(script);
      } else {
        fragment.appendChild(document.importNode(node, true));
      }
    });

    container.innerHTML = '';
    container.appendChild(fragment);

    const handleClick = (event) => {
      const anchor = event.target.closest('a');
      if (!anchor) return;
      if (anchor.target && anchor.target !== '_self') return;
      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('#')) return;

      const targetRoute = resolveRoute(href, window.location.href);
      if (targetRoute) {
        event.preventDefault();
        router.push(targetRoute.route);
      }
    };

    container.addEventListener('click', handleClick);

    return () => {
      container.removeEventListener('click', handleClick);
      container.innerHTML = '';
    };
  }, [html, router]);

  return <div ref={containerRef} className="static-page" />;
}

