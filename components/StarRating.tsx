import { Star } from './Icons';

export function StarRating({ value = 4.5, size = 14, lg = false }: { value?: number; size?: number; lg?: boolean }) {
  const filled = Math.round(value);
  return (
    <span className={'stars' + (lg ? ' stars--lg' : '')} aria-label={`${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} filled={i <= filled} size={lg ? 18 : size} />
      ))}
    </span>
  );
}
