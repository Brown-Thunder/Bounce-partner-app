import Layout from '../components/Layout'
import Header from '../components/Header'

const notifications = [
  { id: 1, icon: '🟢', text: 'Your location is now published! Get ready to welcome a flood of bookings your way!', time: '23 min ago', unread: true },
  { id: 2, icon: '📸', text: 'Your location photo has been approved and is now live!', time: '10 days ago', unread: true },
  { id: 3, icon: '📸', text: 'Your location photo has been approved and is now live!', time: '10 days ago', unread: false },
  { id: 4, icon: '🎉', text: 'Walk in bonus unlocked! Activate it now to increase your bookings and earnings.', time: '10 days ago', unread: false },
  { id: 5, icon: '⭐', text: "You're now exclusive! Access your Boosts page to activate your new boosts.", time: '10 days ago', unread: false },
]

export default function Notifications() {
  return (
    <Layout showNav={false}>
      <Header title="Notifications" showBack />
      <div style={{ padding: '12px 16px 8px', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ fontSize: 13, color: '#757575' }}>Showing {notifications.length} notifications</div>
      </div>
      {notifications.map(n => (
        <div key={n.id} style={{ display: 'flex', gap: 12, padding: '14px 16px', borderBottom: '1px solid #E8E8E8', background: n.unread ? '#FFF8F5' : 'white' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: n.unread ? '#FFE8DC' : '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{n.icon}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, color: '#1A1A1A', lineHeight: 1.5, marginBottom: 4, fontWeight: n.unread ? 500 : 400 }}>{n.text}</div>
            <div style={{ fontSize: 12, color: '#9E9E9E' }}>{n.time}</div>
          </div>
          {n.unread && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF6B35', flexShrink: 0, marginTop: 6 }} />}
        </div>
      ))}
    </Layout>
  )
}
