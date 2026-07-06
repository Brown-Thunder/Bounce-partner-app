import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { storeData } from '../data/store'

export default function Account() {
  const navigate = useNavigate()
  const menuItems = [
    { icon: '⭐', label: 'Reviews', path: '/account/reviews' },
    { icon: '💰', label: 'Earnings', path: '/account/earnings' },
    { icon: '🔔', label: 'Notifications', path: '/account/notifications' },
    { icon: '🔗', label: 'Affiliates', path: '/account/affiliates' },
    { icon: '📋', label: "What's new", path: '/account/whats-new' },
  ]
  return (
    <Layout>
      <Header title="Account" />
      <div style={{ padding: '16px' }}>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{storeData.name}</div>
        </div>
      </div>
      <div style={{ background: 'white', borderRadius: 12, margin: '0 16px 16px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        {menuItems.map(item => (
          <div key={item.path} className="menu-row" onClick={() => navigate(item.path)}>
            <div className="menu-row-icon">{item.icon}</div>
            <div className="menu-row-content"><div className="menu-row-title">{item.label}</div></div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="#C8C8C8" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
        ))}
      </div>
      <div style={{ padding: '0 16px 8px' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#9E9E9E', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8 }}>Support</div>
      </div>
      <div style={{ background: 'white', borderRadius: 12, margin: '0 16px 16px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <a href="https://wa.me/1234567890" className="menu-row" style={{ display: 'flex' }}>
          <div className="menu-row-icon">💬</div>
          <div className="menu-row-content"><div className="menu-row-title">Contact our support team</div></div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="#C8C8C8" strokeWidth="2" strokeLinecap="round"/></svg>
        </a>
      </div>
      <div style={{ padding: '0 16px 16px' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#9E9E9E', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8 }}>Account</div>
        <button style={{ width: '100%', background: '#F5F5F5', color: '#757575', border: 'none', borderRadius: 10, padding: '14px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>Sign out</button>
      </div>
    </Layout>
  )
}
