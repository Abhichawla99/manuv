import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';

interface Author {
  name: string;
  title?: string;
  url?: string;
}
interface Section {
  heading: string;
  body: string;
  bullets?: string[];
}
interface Faq { q: string; a: string }
interface Citation { text: string; url: string }
interface InternalLink { text: string; href: string }
interface Article {
  slug: string;
  title: string;
  h1?: string;
  metaDescription: string;
  primaryKeyword?: string;
  publishedAt: string;
  updatedAt?: string;
  wordCount?: number;
  tldr?: string;
  vertical: { id: string; label: string };
  location: { city: string; state: string; metro?: string };
  topic: { id: string; label: string };
  author?: Author;
  quickFacts?: string[];
  tableOfContents?: { id: string; label: string }[];
  sections: Section[];
  faq?: Faq[];
  citations?: Citation[];
  internalLinks?: InternalLink[];
  readingTimeMinutes?: number;
}

function injectJsonLd(id: string, payload: object) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  const s = document.createElement('script');
  s.type = 'application/ld+json';
  s.id = id;
  s.textContent = JSON.stringify(payload);
  document.head.appendChild(s);
}

function renderInline(text: string) {
  // Very lightweight markdown: **bold**, [text](url), and paragraphs split by \n\n
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((p, i) => {
    const boldMatch = p.match(/^\*\*(.+)\*\*$/);
    if (boldMatch) return <strong key={i} className="text-white">{boldMatch[1]}</strong>;
    const linkMatch = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) return <a key={i} href={linkMatch[2]} className="text-primary underline hover:text-primary/80" target={linkMatch[2].startsWith('http') ? '_blank' : undefined} rel="noopener">{linkMatch[1]}</a>;
    return <span key={i}>{p}</span>;
  });
}

function renderBody(body: string) {
  return body.split(/\n\n+/).map((para, i) => {
    if (para.startsWith('- ')) {
      const items = para.split(/\n/).map(l => l.replace(/^-\s+/, ''));
      return (
        <ul key={i} className="list-disc list-outside ml-6 space-y-2 my-4 text-white/75 font-light">
          {items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}
        </ul>
      );
    }
    if (/^\d+\.\s/.test(para)) {
      const items = para.split(/\n/).map(l => l.replace(/^\d+\.\s+/, ''));
      return (
        <ol key={i} className="list-decimal list-outside ml-6 space-y-2 my-4 text-white/75 font-light">
          {items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}
        </ol>
      );
    }
    if (para.startsWith('### ')) {
      return <h3 key={i} className="text-xl md:text-2xl font-light text-white mt-8 mb-3">{renderInline(para.slice(4))}</h3>;
    }
    return <p key={i} className="text-white/75 font-light leading-relaxed my-4">{renderInline(para)}</p>;
  });
}

export const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setArticle(null); setNotFound(false);
    fetch(`/content/articles/${slug}.json`)
      .then(r => { if (!r.ok) throw new Error('Not found'); return r.json(); })
      .then((data: Article) => setArticle(data))
      .catch(() => setNotFound(true));
  }, [slug]);

  useEffect(() => {
    if (!article) return;
    const url = `https://manuv.co/resources/${article.slug}`;
    injectJsonLd('article-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.metaDescription,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt || article.publishedAt,
      author: { '@type': 'Organization', name: 'manuv.co', url: 'https://manuv.co' },
      publisher: { '@type': 'Organization', name: 'manuv.co', url: 'https://manuv.co', logo: { '@type': 'ImageObject', url: 'https://manuv.co/logos/manuv%20logo.png' } },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      keywords: article.primaryKeyword,
      articleSection: article.vertical?.label,
      wordCount: article.wordCount
    });
    if (article.faq?.length) {
      injectJsonLd('faq-jsonld', {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faq.map(q => ({
          '@type': 'Question',
          name: q.q,
          acceptedAnswer: { '@type': 'Answer', text: q.a }
        }))
      });
    }
    injectJsonLd('breadcrumbs-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://manuv.co' },
        { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://manuv.co/resources' },
        { '@type': 'ListItem', position: 3, name: article.title, item: url }
      ]
    });
    return () => {
      ['article-jsonld', 'faq-jsonld', 'breadcrumbs-jsonld'].forEach(id => {
        const el = document.getElementById(id); if (el) el.remove();
      });
    };
  }, [article]);

  if (notFound) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Article not found</h1>
          <p className="text-white/60 mb-8">This research piece may have moved or been merged into another article.</p>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm text-white hover:bg-white/20">Back to home</Link>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-white/40 text-sm">Loading research...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      <SEO
        title={`${article.title} | manuv.co`}
        description={article.metaDescription}
        keywords={article.primaryKeyword}
        canonical={`https://manuv.co/resources/${article.slug}`}
      />

      <article className="px-6 md:px-10 lg:px-16 pt-32 pb-24 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs uppercase tracking-widest text-white/40 mb-8 font-light">
          <Link to="/" className="hover:text-white">Home</Link> <span className="mx-2">/</span>
          <span className="text-white/60">Research</span> <span className="mx-2">/</span>
          <span className="text-white/60">{article.vertical?.label}</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extralight tracking-tight mb-6 text-white leading-tight">
          {article.h1 || article.title}
        </h1>

        {/* Meta strip */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 font-light mb-10 pb-10 border-b border-white/10">
          <span>Published {new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          {article.updatedAt && article.updatedAt !== article.publishedAt && (
            <span>Updated {new Date(article.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          )}
          {article.readingTimeMinutes && <span>{article.readingTimeMinutes} min read</span>}
          {article.wordCount && <span>{article.wordCount.toLocaleString()} words</span>}
        </div>

        {/* TL;DR */}
        {article.tldr && (
          <div className="mb-10 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <div className="text-xs uppercase tracking-widest text-primary mb-3">TL;DR</div>
            <p className="text-white/85 font-light leading-relaxed">{article.tldr}</p>
          </div>
        )}

        {/* Quick Facts */}
        {article.quickFacts?.length && (
          <div className="mb-12 p-6 bg-white/5 border border-white/10 rounded-lg">
            <div className="text-xs uppercase tracking-widest text-white/60 mb-4">Quick Facts</div>
            <ul className="space-y-2">
              {article.quickFacts.map((f, i) => (
                <li key={i} className="flex gap-3 text-white/80 font-light">
                  <span className="text-primary mt-1">•</span>
                  <span>{renderInline(f)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* TOC */}
        {article.tableOfContents?.length && (
          <div className="mb-12 p-6 bg-white/[0.02] border border-white/5 rounded-lg">
            <div className="text-xs uppercase tracking-widest text-white/60 mb-3">In this article</div>
            <ol className="space-y-2">
              {article.tableOfContents.map((t, i) => (
                <li key={i} className="text-sm font-light">
                  <a href={`#${t.id}`} className="text-white/70 hover:text-primary">{i + 1}. {t.label}</a>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Sections */}
        {article.sections.map((s, idx) => {
          const slugId = s.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
          return (
            <section key={idx} id={slugId} className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6 text-white mt-12">
                {s.heading}
              </h2>
              <div className="prose-invert">
                {renderBody(s.body)}
              </div>
              {s.bullets?.length && (
                <ul className="mt-4 space-y-2 list-disc list-outside ml-6 text-white/75 font-light">
                  {s.bullets.map((b, i) => <li key={i}>{renderInline(b)}</li>)}
                </ul>
              )}
            </section>
          );
        })}

        {/* FAQ */}
        {article.faq?.length && (
          <section id="faq" className="mt-16 mb-12">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8 text-white">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {article.faq.map((q, i) => (
                <div key={i} className="border-l-2 border-primary/40 pl-6 py-2">
                  <h3 className="text-lg font-light text-white mb-2">{q.q}</h3>
                  <div className="text-white/70 font-light leading-relaxed">{renderBody(q.a)}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Citations */}
        {article.citations?.length && (
          <section className="mt-16 mb-12 pt-8 border-t border-white/10">
            <div className="text-xs uppercase tracking-widest text-white/40 mb-4">Sources & References</div>
            <ol className="space-y-2 text-sm text-white/60 font-light">
              {article.citations.map((c, i) => (
                <li key={i}><a href={c.url} target="_blank" rel="noopener" className="hover:text-primary underline">{c.text}</a></li>
              ))}
            </ol>
          </section>
        )}

        {/* Internal links */}
        {article.internalLinks?.length && (
          <section className="mt-12 mb-12">
            <div className="text-xs uppercase tracking-widest text-white/40 mb-4">Related research</div>
            <ul className="space-y-2">
              {article.internalLinks.map((l, i) => (
                <li key={i}><Link to={l.href} className="text-white/70 hover:text-primary font-light">{l.text} →</Link></li>
              ))}
            </ul>
          </section>
        )}

        {/* CTA */}
        <section className="mt-20 p-10 bg-gradient-to-br from-primary/10 to-white/5 border border-primary/20 rounded-xl text-center">
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4">Ready to build this for your {article.vertical?.label.toLowerCase()}?</h3>
          <p className="text-white/70 font-light mb-6 max-w-2xl mx-auto">manuv.co builds custom Claude-powered agents and Claude Code skills tuned to your exact workflow. Book a strategy call and we'll map your highest-ROI automation in 30 minutes.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-black px-8 py-4 text-sm font-medium hover:scale-105 transition-transform">
            Book a strategy call →
          </Link>
        </section>
      </article>
    </div>
  );
};
