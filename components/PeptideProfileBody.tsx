import Link from 'next/link';
import { Mechanism, type MechanismStep } from './Mechanism';
import { Callout } from './Callout';
import { StudyCard } from './StudyCard';
import { ProfileToc, PageNav, type NavItem } from './PageNav';
import { ArrowRight, IconInjection, IconReceptor, IconInsulin, IconClock, IconBrain, IconCell, IconTissue, Icon } from './Icons';
import { StarRating } from './StarRating';
import type { Peptide } from '@/lib/types';
import { COMPARISONS } from '@/lib/comparisons';

const ICON_MAP = {
  injection: <IconInjection size={16} />,
  receptor: <IconReceptor size={16} />,
  insulin: <IconInsulin size={16} />,
  clock: <IconClock size={16} />,
  brain: <IconBrain size={16} />,
  cell: <IconCell size={16} />,
  tissue: <IconTissue size={16} />,
};

const TOC: NavItem[] = [
  { id: 'tldr', label: 'Key takeaways' },
  { id: 'what', label: 'What it is' },
  { id: 'how', label: 'How it works' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'research', label: 'Research summary' },
  { id: 'dosage', label: 'Dosage & administration' },
  { id: 'safety', label: 'Side effects & safety' },
  { id: 'legal', label: 'UK legal status' },
  { id: 'summary', label: 'Summary' },
  { id: 'refs', label: 'References' },
];

export function PeptideProfileBody({ p }: { p: Peptide }) {
  const goalLabel = goalLabelOf(p.goal);
  const initials = p.reviewedBy.name
    .split(' ')
    .filter((s) => /^[A-Za-z]/.test(s))
    .map((s) => s[0])
    .slice(0, 2)
    .join('');

  const steps: MechanismStep[] = p.how.steps.map((s) => ({
    title: s.title,
    desc: s.desc,
    icon: ICON_MAP[s.iconKey],
  }));

  return (
    <>
      <section className="profile-hero">
        <div className="wrap">
          <div className="profile-hero__breadcrumb">
            <Link href="/">Handbook</Link>
            <span>›</span>
            <Link href="/peptides">Peptides</Link>
            <span>›</span>
            <Link href={`/goals/${p.goal}`}>{goalLabel}</Link>
            <span>›</span>
            <span style={{ color: 'var(--charcoal)' }}>{p.name}</span>
          </div>
          <div className="profile-hero__inner">
            <div>
              <span className="eyebrow">{p.className}</span>
              <h1 className="profile-hero__title">{p.name}</h1>
              <div className="profile-hero__alt">
                {p.altNames.map((alt) => (
                  <span key={alt} className="chip chip--neutral">
                    {alt}
                  </span>
                ))}
              </div>
              <p className="profile-hero__sub">{p.intro}</p>
              <div className="profile-hero__byline">
                <div className="profile-hero__avatar">{initials}</div>
                <div>
                  <p className="profile-hero__byline-name">Reviewed by {p.reviewedBy.name}</p>
                  <p className="profile-hero__byline-meta">{p.reviewedBy.credentials}</p>
                </div>
                <div className="profile-hero__updated">
                  <div className="micro" style={{ color: 'var(--charcoal)', fontWeight: 500 }}>
                    Last updated {p.updated}
                  </div>
                  <div className="micro">Reviewed quarterly</div>
                </div>
              </div>
            </div>

            <div className="stats-card">
              <div className="stats-card__head">
                <div>
                  <div className="rating-card__rating-lbl">Overall rating</div>
                  <div className="stats-card__rating">
                    <span className="stats-card__rating-val tabular">{p.rating.toFixed(1)}</span>
                    <span className="stats-card__rating-of">/ 5</span>
                  </div>
                  <div style={{ marginTop: 6 }}>
                    <StarRating value={p.rating} lg />
                  </div>
                </div>
                <span className="chip chip--dot">{p.confidence} confidence</span>
              </div>
              <div className="stats-card__divider" />
              {p.stats.map((s) => (
                <div key={s.label} className="stats-card__row">
                  <span>{s.label}</span>
                  <span style={s.highlight ? { color: 'var(--sage-deep)' } : undefined}>{s.value}</span>
                </div>
              ))}
              <div className="stats-card__divider" />
              <a href="#dosage" className="btn btn--secondary btn--sm" style={{ width: '100%', justifyContent: 'center' }}>
                Skip to dosage <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageNav items={TOC} />

      <div className="wrap">
        <div className="article-layout">
          <ProfileToc items={TOC} />

          <article className="article-body">
            <div id="tldr" className="tldr">
              <h4>Key takeaways</h4>
              <ul>
                {p.tldr.map((line, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: line }} />
                ))}
              </ul>
            </div>

            <h2 id="what">What it is</h2>
            {p.what.paragraphs.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}

            <h2 id="how">How it works</h2>
            <p>{p.how.intro}</p>
            <Mechanism steps={steps} />
            {p.how.afterText && <p>{p.how.afterText}</p>}

            <h2 id="benefits">Benefits</h2>
            {p.benefits.map((b, i) => (
              <div key={i}>
                <h3>{b.heading}</h3>
                {b.paragraphs.map((para, j) => (
                  <p key={j} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            ))}
            {p.benefitsLimit && (
              <Callout kind="limit" title={p.benefitsLimit.title}>
                <span dangerouslySetInnerHTML={{ __html: p.benefitsLimit.body }} />
              </Callout>
            )}

            <h2 id="research">Research summary</h2>
            {p.studies.map((s, i) => (
              <StudyCard key={i} {...s} />
            ))}

            <h2 id="dosage">Dosage &amp; administration</h2>
            <p>{p.dosage.intro}</p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Dose</th>
                  <th>Duration</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {p.dosage.rows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.phase}</td>
                    <td>{row.dose}</td>
                    <td>{row.duration}</td>
                    <td>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
              <caption>{p.dosage.caption}</caption>
            </table>
            {p.dosage.note && (
              <Callout kind="legal" title="Educational summary, not a prescription">
                {p.dosage.note}
              </Callout>
            )}

            <h2 id="safety">Side effects &amp; safety</h2>
            <p>{p.safety.intro}</p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Effect</th>
                  <th>Frequency</th>
                  <th>Severity</th>
                </tr>
              </thead>
              <tbody>
                {p.safety.rows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.effect}</td>
                    <td>{row.frequency}</td>
                    <td>{row.severity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              <strong>Contraindications</strong>: {p.safety.contraindications}
            </p>

            <h2 id="legal">UK legal status</h2>
            <Callout kind="legal" title={p.legal.title}>
              {p.legal.body}
            </Callout>

            <h2 id="summary">Summary</h2>
            <p>{p.summary}</p>

            <details className="refs" id="refs" open>
              <summary>References ({p.references.length})</summary>
              <ol>
                {p.references.map((r, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: r }} />
                ))}
              </ol>
            </details>

            <div className="article-card__meta" style={{ marginTop: 32 }}>
              This page has been peer-reviewed by a clinician.{' '}
              <Link href="/editorial-policy" style={{ color: 'var(--sage-deep)' }}>
                How we review content →
              </Link>
            </div>
          </article>

          <aside className="sidebar">
            {p.compareWith && p.compareWith.length > 0 && (
              <div className="sidebar__block">
                <h6 className="sidebar__head">Compare with</h6>
                <ul className="sidebar__list">
                  {p.compareWith.map((c) => {
                    const cmp = COMPARISONS.find((x) => x.slug === c.slug);
                    if (!cmp) return null;
                    return (
                      <li key={c.slug}>
                        <Link href={`/compare/${c.slug}`}>
                          {cmp.title}
                          <span className="micro">{c.tagline}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {p.relatedGuides && p.relatedGuides.length > 0 && (
              <div className="sidebar__block">
                <h6 className="sidebar__head">Related guides</h6>
                <ul className="sidebar__list">
                  {p.relatedGuides.map((g) => (
                    <li key={g.href}>
                      <Link href={g.href}>{g.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="sidebar__block" style={{ background: 'var(--pale-sage)', borderColor: 'rgba(79,124,106,0.18)' }}>
              <h6 className="sidebar__head" style={{ color: 'var(--sage-deep)' }}>
                Find your match
              </h6>
              <p style={{ fontSize: 13, lineHeight: 1.5, margin: '0 0 12px', color: 'var(--charcoal)' }}>
                Not sure if {p.name} is right for your goal? Take the 90-second assessment.
              </p>
              <Link href={`/assessment?goal=${p.goal}`} className="btn btn--primary btn--sm" style={{ width: '100%', justifyContent: 'center' }}>
                Start assessment <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

function goalLabelOf(slug: string): string {
  switch (slug) {
    case 'fat-loss':
      return 'Fat Loss';
    case 'muscle-growth':
      return 'Muscle Growth';
    case 'recovery':
      return 'Recovery';
    case 'longevity':
      return 'Longevity';
    case 'sleep':
      return 'Sleep';
    case 'cognitive':
      return 'Cognitive';
    default:
      return 'Peptides';
  }
}
