export default [
    { UserAgent: '*' },
    { Allow: '/' },
    { BlankLine: true },
    { Comment: 'Block access to admin pages' },
    { Disallow: '/admin' },
    { BlankLine: true },
    { Sitemap: 'https://mysite.com/sitemap.xml' }
]