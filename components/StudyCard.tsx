import { ArrowUpRight } from './Icons';

type Props = {
  title: string;
  year: string;
  design: string;
  n: string;
  finding: string;
  link: string;
  href?: string;
};

export function StudyCard({ title, year, design, n, finding, link, href = '#' }: Props) {
  return (
    <div className="study-card">
      <div className="study-card__head">
        <h5 className="study-card__title">{title}</h5>
        <span className="study-card__year">{year}</span>
      </div>
      <div className="study-card__meta">
        <span>{design}</span>
        <span>·</span>
        <span>n = {n}</span>
      </div>
      <p className="study-card__finding">{finding}</p>
      <a href={href} className="study-card__link" target="_blank" rel="noopener noreferrer">
        {link} <ArrowUpRight size={11} />
      </a>
    </div>
  );
}
