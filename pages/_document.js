import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const fontHref =
    'https://cdn.zyrosite.com/u1/google-fonts/font-faces?family=Poppins:wght@400;500;600;700&family=Inter:wght@400&display=swap.css';

  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href={fontHref} as="style" />
        <link rel="stylesheet" href={fontHref} crossOrigin="true" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

