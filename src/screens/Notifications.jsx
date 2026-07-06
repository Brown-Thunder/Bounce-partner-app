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
      {notifications.map(n => (
        <div key={n.id} style={{ display: 'flex', gap: 12, padding: '14px 16px', borderBottom: '1px solid #E8E8E8', background: n.unread ? '#FFF3ED' : 'white' }}>
          <span style={{ fontSize: 24, flexShrink: 0 }}>{n.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, color: '#1A1A1A', lineHeight: 1.5, marginBottom: 4 }}>{n.text}</div>
            <div style={{ fontSize: 12, color: '#9E9E9E' }}>{n.time}</div>
          </div>
        </div>
      ))}
    </Layout>
  )
}
