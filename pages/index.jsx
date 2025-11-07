import PageHead from '../components/PageHead.jsx';
import StaticPage from '../components/StaticPage.jsx';
import { getPageData } from '../lib/pageData.js';

export default function HomePage({ html, meta }) {
  return (
    <>
      <PageHead meta={meta} />
      <StaticPage html={html} />
    </>
  );
}

export async function getStaticProps() {
  const { html, meta } = await getPageData('index');
  return {
    props: {
      html,
      meta,
    },
  };
}

