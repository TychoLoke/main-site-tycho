import Head from 'next/head';

export default function PageHead({ meta }) {
  if (!meta) {
    return null;
  }

  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogUrl,
    twitterTitle,
    twitterDescription,
    canonical,
  } = meta;

  const resolvedOgUrl = ogUrl || canonical;

  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {(ogTitle || title) && <meta property="og:title" content={ogTitle || title} />}
      {(ogDescription || description) && (
        <meta property="og:description" content={ogDescription || description} />
      )}
      {resolvedOgUrl && <meta property="og:url" content={resolvedOgUrl} />}
      {(twitterTitle || title) && (
        <meta name="twitter:title" content={twitterTitle || title} />
      )}
      {(twitterDescription || description) && (
        <meta name="twitter:description" content={twitterDescription || description} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  );
}

