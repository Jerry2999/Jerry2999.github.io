import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Blog de Desarrollo Web y Tecnología | Gerardo Flores | GerardoF',
    description: 'Blog sobre desarrollo frontend, diseño web y tecnología.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es</language>`,
  });
}