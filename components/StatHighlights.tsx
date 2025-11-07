interface StatHighlightsProps {
  items: { label: string; value: string }[];
}

export function StatHighlights({ items }: StatHighlightsProps) {
  return (
    <div
      className="card"
      style={{
        display: 'grid',
        gap: '1.5rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))'
      }}
    >
      {items.map((item) => (
        <div key={item.label} style={{ display: 'grid', gap: '0.5rem' }}>
          <span style={{ fontSize: '2rem', fontWeight: 700 }}>{item.value}</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
