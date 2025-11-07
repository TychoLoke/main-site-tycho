interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'start' | 'center';
}

export function SectionHeader({ eyebrow, title, description, align = 'start' }: SectionHeaderProps) {
  return (
    <div
      style={{
        display: 'grid',
        gap: '0.75rem',
        textAlign: align,
        justifyItems: align === 'center' ? 'center' : 'start',
        maxWidth: align === 'center' ? '56ch' : '60ch',
        marginInline: align === 'center' ? 'auto' : undefined
      }}
    >
      {eyebrow && <span className="tag">{eyebrow}</span>}
      <h2 style={{ margin: 0 }}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
