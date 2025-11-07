import PageHead from '../components/PageHead.jsx';
import StaticPage from '../components/StaticPage.jsx';
import { getPageData, getStaticSlugs } from '../lib/pageData.js';

export default function ContentPage({ html, meta }) {
  return (
    <>
      <PageHead meta={meta} />
      <StaticPage html={html} />
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getStaticSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { html, meta } = await getPageData(slug);
  return {
    props: {
      html,
      meta,
    },
  };
}

