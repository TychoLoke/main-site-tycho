import path from 'path';
import { promises as fs } from 'fs';
import { pageConfigs, pageList } from '../data/pageConfigs.js';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://tycholoke.com';

function normalizeAssets(html) {
  let result = html;
  result = result.replace(/https:\/\/assets\.zyrosite\.com\/cdn-cgi\/image\/[^"' )]+\/([^"' )]+)/g, (_match, assetPath) => `/images/${assetPath}`);
  result = result.replace(/https:\/\/assets\.zyrosite\.com\/(?!cdn-cgi\/image\/)([^"' )]+)/g, (_match, assetPath) => `/images/${assetPath}`);
  result = result.replace(/(href|src)=["']_astro/g, '$1="/_astro');
  result = result.replace(/(href|src)=["']\.?\.\/cdn\.zyrosite\.com\//g, '$1="https://cdn.zyrosite.com/');
  result = result.replace(/(href|src)=["']cdn\.zyrosite\.com\//g, '$1="https://cdn.zyrosite.com/');
  result = result.replace(/url\((['"])_astro/g, 'url($1/_astro');
  result = result.replace(/url\((['"])\.?\.\/cdn\.zyrosite\.com\//g, 'url($1https://cdn.zyrosite.com/');
  result = result.replace(/url\((['"])cdn\.zyrosite\.com\//g, 'url($1https://cdn.zyrosite.com/');
  result = rewriteInternalLinks(result);
  return result;
}

function rewriteInternalLinks(html) {
  let result = html;
  pageList.forEach((config) => {
    const { route, slug, file } = config;
    const htmlName = file;
    const slugHtml = `${slug}.html`;
    const variants = [
      htmlName,
      `./${htmlName}`,
      slug,
      `./${slug}`,
      slugHtml,
      `./${slugHtml}`,
    ];
    variants.forEach((variant) => {
      result = replaceHrefVariant(result, variant, route);
    });
  });
  result = replaceHrefVariant(result, 'index.html', '/');
  result = replaceHrefVariant(result, './index.html', '/');
  return result;
}

function replaceHrefVariant(html, target, replacement) {
  return html
    .replaceAll(`href="${target}"`, `href="${replacement}"`)
    .replaceAll(`href='${target}'`, `href='${replacement}'`);
}

export async function getPageData(slug) {
  const config = pageConfigs[slug];
  if (!config) {
    throw new Error(`Unknown page slug: ${slug}`);
  }
  const filePath = path.join(process.cwd(), 'data', 'pages', config.file);
  const htmlContent = await fs.readFile(filePath, 'utf8');
  const html = normalizeAssets(htmlContent);
  const canonical = config.meta.canonicalPath
    ? buildCanonicalUrl(config.meta.canonicalPath)
    : undefined;
  return {
    slug,
    html,
    meta: {
      ...config.meta,
      canonical,
    },
  };
}

export function getStaticSlugs() {
  return pageList.filter((config) => config.slug !== 'index').map((config) => config.slug);
}

function buildCanonicalUrl(canonicalPath) {
  if (!canonicalPath) return undefined;
  try {
    return new URL(canonicalPath, siteUrl).toString();
  } catch (error) {
    return canonicalPath;
  }
}

