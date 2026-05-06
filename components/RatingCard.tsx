import Link from 'next/link';
import { StarRating } from './StarRating';
import { Icon } from './Icons';

type Props = {
  href?: string;
  name: string;
  alt?: string;
  rating: number;
  confidence: 'High' | 'Medium' | 'Low';
  updated: string;
  kicker?: string;
};

export function RatingCard({ href, name, alt, rating, confidence, updated, kicker }: Props) {
  const inner = (
    <div className="card card--lift rating-card">
      <div className="rating-card__head">
        <div>
          {kicker && <div className="eyebrow" style={{ marginBottom: 8 }}>{kicker}</div>}
          <h4 className="rating-card__name">{name}</h4>
          {alt && <p className="rating-card__alt">{alt}</p>}
        </div>
      </div>
      <div className="rating-card__row">
        <div className="rating-card__rating">
          <span className="rating-card__rating-lbl">Overall</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="rating-card__rating-val tabular">{rating.toFixed(1)}</span>
            <StarRating value={rating} />
          </div>
        </div>
        <div className="rating-card__conf">
          <span className="rating-card__conf-lbl">Confidence</span>
          <span className="chip chip--dot">{confidence}</span>
        </div>
      </div>
      <div className="micro" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <Icon size={12}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </Icon>
        Last updated {updated}
      </div>
    </div>
  );
  if (href) return <Link href={href}>{inner}</Link>;
  return inner;
}
