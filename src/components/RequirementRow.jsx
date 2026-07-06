import { IconCheckCircle } from './icons'

export default function RequirementRow({ req }) {
  return (
    <div style={{ display: 'flex', gap: 12, padding: '14px', background: '#F1EEFC', borderRadius: 14, marginBottom: 8 }}>
      <div style={{ flexShrink: 0, marginTop: 1 }}>
        <IconCheckCircle size={22} filled={req.met} color="#5B4FE5" />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#16151C' }}>{req.label}</span>
          {req.value && <span style={{ fontSize: 13, color: '#6B6B70' }}>({req.value})</span>}
        </div>
        {req.note && <div style={{ fontSize: 13, color: '#6B6B70', marginTop: 3, lineHeight: 1.4 }}>{req.note}</div>}
      </div>
    </div>
  )
}
