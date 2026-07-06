import { useNavigate, useLocation } from 'react-router-dom'

const tabs = [
  { path: '/', label: 'Home', icon: (active) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 9.5L12 3L21 9.5V20C21 20.6 20.6 21 20 21H15V15H9V21H4C3.4 21 3 20.6 3 20V9.5Z" stroke={active ? '#16151C' : '#AEAEB2'} strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  )},
  { path: '/bookings', label: 'Bookings', badge: true, icon: (active) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke={active ? '#16151C' : '#AEAEB2'} strokeWidth="1.8"/>
      <path d="M16 2V6M8 2V6M3 10H21" stroke={active ? '#16151C' : '#AEAEB2'} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M8 14H16M8 17H13" stroke={active ? '#16151C' : '#AEAEB2'} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )},
  { path: '/store', label: 'Store', icon: (active) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 9H21L19 4H5L3 9Z" stroke={active ? '#16151C' : '#AEAEB2'} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M3 9V20H21V9M9 20V14H15V20" stroke={active ? '#16151C' : '#AEAEB2'} strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  )},
  { path: '/boosts', label: 'Boosts', badge: true, icon: (active) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C12 2 6 8 6 13C6 16.3 8.7 19 12 19C15.3 19 18 16.3 18 13C18 8 12 2 12 2Z" stroke={active ? '#16151C' : '#AEAEB2'} strokeWidth="1.8"/>
      <path d="M9 22L12 19L15 22" stroke={active ? '#16151C' : '#AEAEB2'} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )},
  { path: '/account', label: 'Account', icon: (active) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={active ? '#16151C' : '#AEAEB2'} strokeWidth="1.8"/>
      <path d="M4 20C4 17 7.6 15 12 15C16.4 15 20 17 20 20" stroke={active ? '#16151C' : '#AEAEB2'} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )},
]

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 390, background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(0,0,0,0.08)', display: 'flex', alignItems: 'stretch', zIndex: 100, paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      {tabs.map((tab) => {
        const active = isActive(tab.path)
        return (
          <button key={tab.path} onClick={() => navigate(tab.path)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3, background: 'none', border: 'none', cursor: 'pointer', padding: '10px 4px 10px', position: 'relative', minHeight: 56 }}>
            <div style={{ position: 'relative' }}>
              {tab.icon(active)}
              {tab.badge && !active && <span className="notif-dot" />}
            </div>
            <span style={{ fontSize: 10, fontWeight: active ? 600 : 400, color: active ? '#16151C' : '#8E8E93' }}>{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}
