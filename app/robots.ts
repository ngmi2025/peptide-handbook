import type { MetadataRoute } from 'next';

/**
 * Robots policy.
 *
 * We explicitly welcome the major AI crawlers (GPTBot, ClaudeBot, Perplexity,
 * Google-Extended, etc.) so peptide-handbook content is citable inside
 * generative answers. Search engines crawl and index by default.
 *
 * /assessment/results is excluded — it's a per-user URL with quiz answers
 * passed via search params; nothing canonical to index.
 */
export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    'GPTBot', // OpenAI / ChatGPT
    'OAI-SearchBot', // OpenAI ChatGPT browsing
    'ChatGPT-User', // ChatGPT plugin / browse
    'ClaudeBot', // Anthropic
    'Claude-Web',
    'anthropic-ai',
    'PerplexityBot', // Perplexity
    'Perplexity-User',
    'Applebot-Extended', // Apple Intelligence training
    'Bytespider', // ByteDance
    'CCBot', // Common Crawl
    'cohere-ai', // Cohere
    'Diffbot',
    'FacebookBot',
    'Google-Extended', // Bard / Gemini training
    'Meta-ExternalAgent',
    'meta-externalagent',
    'Amazonbot',
    'Bingbot',
    'DuckAssistBot',
    'Webzio-Extended',
    'YouBot',
    'AwarioRssBot',
    'AwarioSmartBot',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/assessment/results', '/_next/', '/api/'],
      },
      ...aiCrawlers.map((ua) => ({
        userAgent: ua,
        allow: '/',
        disallow: ['/assessment/results'],
      })),
    ],
    sitemap: 'https://peptidehandbook.co.uk/sitemap.xml',
    host: 'https://peptidehandbook.co.uk',
  };
}
