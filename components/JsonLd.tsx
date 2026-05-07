/**
 * Inline JSON-LD emitter. Use as <JsonLd data={...} /> in any server component.
 * Accepts a single schema object or a pre-serialised string from `jsonLd()` / `jsonLdGraph()`.
 */
type Props = { data: string | object };

export function JsonLd({ data }: Props) {
  const json = typeof data === 'string' ? data : JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
