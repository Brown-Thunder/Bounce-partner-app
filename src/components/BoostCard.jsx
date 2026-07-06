import { useNavigate } from 'react-router-dom'

export default function BoostCard({ boost }) {
  const navigate = useNavigate()
  const dotColor = boost.status === 'active' ? '#2E7D32' : boost.status === 'ready' ? '#FF6B35' : '#9E9E9E'
  return (
    <div onClick={() => navigate(`/boosts/${boost.id}`)} style={{ display: 'flex', alignItems: 'center', padding: '14px 16px', borderBottom: '1px solid #E8E8E8', cursor: 'pointer', background: boost.status === 'ready' ? '#FFFAF8' : 'white' }}>
      <div style={{ width: 12, height: 12, borderRadius: '50%', background: dotColor, marginRight: 14, flexShrink: 0 }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 500, color: '#1A1A1A' }}>{boost.name}</div>
        <div style={{ fontSize: 13, color: '#9E9E9E', marginTop: 2 }}>{boost.reqCount} requirements met</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {boost.status === 'active' && <span className="badge-active">ACTIVE</span>}
        {boost.status === 'locked' && <span className="badge-locked">LOCKED</span>}
        {boost.status === 'ready' && <span className="badge-activate pulse-badge">ACTIVATE</span>}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="#E8E8E8" strokeWidth="2" strokeLinecap="round"/></svg>
      </div>
    </div>
  )
}
