/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hrizantema.rs',
  generateRobotsTxt: true,
  outDir: './out',
  priority: 0.5,
  changefreq: 'yearly',
  autoLastmod: true,

  transform: async (config, url) => {
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (url === '/') {
      priority = 0.8;
    } else if (url.startsWith('/main-pages/contact')) {
      priority = 0.7;
    } else if (url.startsWith('/lists')) {
      priority = 0.6;
    } else if (url.startsWith('/admin')) {
      return null;
    }

    return {
      loc: url,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
