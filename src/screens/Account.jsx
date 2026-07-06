import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { storeData } from '../data/store'

export default function Account() {
  const navigate = useNavigate()
  const menuItems = [
    { icon: '⭐', label: 'Reviews', subtitle: 'View your store ratings', path: '/account/reviews' },
    { icon: '💰', label: 'Earnings', subtitle: 'Payouts and earnings history', path: '/account/earnings' },
    { icon: '🔔', label: 'Notifications', subtitle: 'Manage your notifications', path: '/account/notifications' },
    { icon: '🔗', label: 'Affiliates', subtitle: 'Share and earn with referrals', path: '/account/affiliates' },
    { icon: '🆕', label: "What's new", subtitle: 'Latest features and updates', path: '/account/whats-new' },
  ]
  return (
    <Layout>
      <Header title="Account" />
      {/* Profile card */}
      <div style={{ background: 'white', margin: '16px 16px 8px', borderRadius: 16, padding: '20px 16px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: 'linear-gradient(135deg, #FF6B35, #E55A2B)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 26 }}>☕</span>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: '#1A1A1A', marginBottom: 2 }}>{storeData.name}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 13, color: '#757575' }}>{storeData.type}</span>
              {storeData.exclusive && (
                <span className="exclusive-badge" style={{ fontSize: 10 }}>EXCLUSIVE</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div style={{ background: 'white', borderRadius: 12, margin: '8px 16px 16px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
        {menuItems.map((item, i) => (
          <div key={item.path} className="menu-row" onClick={() => navigate(item.path)} style={{ borderBottom: i < menuItems.length - 1 ? '1px solid #F0F0F0' : 'none' }}>
            <div className="menu-row-icon">{item.icon}</div>
            <div className="menu-row-content">
              <div className="menu-row-title">{item.label}</div>
              <div className="menu-row-subtitle">{item.subtitle}</div>
            </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="#C8C8C8" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
        ))}
      </div>

      {/* Support */}
      <div style={{ padding: '0 16px 8px' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#9E9E9E', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8 }}>Support</div>
      </div>
      <div style={{ background: 'white', borderRadius: 12, margin: '0 16px 16px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
        <a href="https://wa.me/1234567890" className="menu-row" style={{ display: 'flex' }}>
          <div className="menu-row-icon">💬</div>
          <div className="menu-row-content">
            <div className="menu-row-title">Contact our support team</div>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="#C8C8C8" strokeWidth="2" strokeLinecap="round"/></svg>
        </a>
      </div>

      {/* Sign out */}
      <div style={{ padding: '0 16px 24px' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#9E9E9E', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8 }}>Account</div>
        <button style={{ width: '100%', background: 'white', color: '#FF3B30', border: 'none', borderRadius: 12, padding: '14px', fontSize: 15, fontWeight: 600, cursor: 'pointer', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>Sign out</button>
      </div>
    </Layout>
  )
}
