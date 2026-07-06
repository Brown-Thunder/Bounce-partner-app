export default function RequirementRow({ req }) {
  return (
    <div style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px solid #F5F5F5' }}>
      <div style={{ width: 24, height: 24, borderRadius: '50%', background: req.met ? '#E8F5E9' : '#F5F5F5', border: `2px solid ${req.met ? '#2E7D32' : '#E0E0E0'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 12, color: req.met ? '#2E7D32' : '#9E9E9E', fontWeight: 700, marginTop: 2 }}>
        {req.met ? '✓' : '○'}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>{req.label}</span>
          {req.value && <span style={{ fontSize: 13, color: '#757575' }}>({req.value})</span>}
        </div>
        {req.note && <div style={{ fontSize: 13, color: '#757575', marginTop: 3, lineHeight: 1.4 }}>{req.note}</div>}
      </div>
    </div>
  )
}
