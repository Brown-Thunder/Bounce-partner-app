import { useNavigate } from 'react-router-dom'
import { IconPiggyBank, IconCardExchange, IconWindowSearch, IconSignage, IconTicket, IconSupport, IconPlane, IconLock } from './icons'

const iconMap = {
  piggy: IconPiggyBank,
  tip: IconCardExchange,
  walk: IconCardExchange,
  card: IconCardExchange,
  marketing: IconSignage,
  search: IconWindowSearch,
  signage: IconSignage,
  early: IconPlane,
  support: IconSupport,
  ticket: IconTicket,
}

export default function BoostCard({ boost }) {
  const navigate = useNavigate()
  const Icon = iconMap[boost.icon] || IconPiggyBank
  const isLocked = boost.status === 'locked'
  const isActive = boost.status === 'active'
  const isReady = boost.status === 'ready'

  return (
    <div onClick={() => navigate(`/boosts/${boost.id}`)} style={{ background: 'white', border: '1px solid #E8E6F0', borderRadius: 18, padding: '18px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'pointer', gap: 10, position: 'relative' }}>
      <div style={{ width: 68, height: 68, borderRadius: '50%', background: isLocked ? '#F0EFF7' : '#F1EEFC', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <Icon size={30} color={isLocked ? '#B7B4C9' : '#5B4FE5'} />
        {isLocked && (
          <div style={{ position: 'absolute', bottom: -2, right: -2, width: 26, height: 26, borderRadius: '50%', background: 'white', border: '1px solid #E8E6F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconLock size={13} color="#6B6B70" />
          </div>
        )}
        {!isLocked && (
          <div style={{ position: 'absolute', bottom: -6, left: '50%', transform: 'translateX(-50%)', background: '#5B4FE5', color: 'white', fontSize: 10, fontWeight: 700, borderRadius: 20, padding: '2px 8px', whiteSpace: 'nowrap' }}>{boost.reqCount}</div>
        )}
      </div>
      <div style={{ fontSize: 13.5, fontWeight: 700, color: '#16151C', lineHeight: 1.3, minHeight: 34 }}>{boost.name}</div>
      {isActive && <span className="badge-active">ACTIVE</span>}
      {isReady && <span className="badge-activate pulse-badge">ACTIVATE</span>}
      {isLocked && boost.ratePill && <span style={{ background: '#DDD6F7', color: '#5B4FE5', borderRadius: 20, padding: '3px 10px', fontSize: 11, fontWeight: 700 }}>{boost.ratePill}</span>}
      {isLocked && !boost.ratePill && <span className="badge-locked">LOCKED</span>}
      {!isLocked && boost.ratePill && !isActive && !isReady && <span style={{ background: '#DDD6F7', color: '#5B4FE5', borderRadius: 20, padding: '3px 10px', fontSize: 11, fontWeight: 700 }}>{boost.ratePill}</span>}
    </div>
  )
}
