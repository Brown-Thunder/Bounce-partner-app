import Layout from '../components/Layout'
import Header from '../components/Header'
import { IconBell, IconGear } from '../components/icons'

const notifications = [
  { id: 1, text: 'Your location is now published! Get ready to welcome a flood of bookings your way!', time: '23 min ago', unread: true },
  { id: 2, text: 'Your location photo has been approved and is now live!', time: '10 days ago', unread: true },
  { id: 3, text: 'Your location photo has been approved and is now live!', time: '10 days ago', unread: false },
  { id: 4, text: 'Walk in bonus unlocked! Activate it now to increase your bookings and earnings.', time: '10 days ago', unread: false },
  { id: 5, text: "You're now exclusive! Access your Boosts page to activate your new boosts.", time: '10 days ago', unread: false },
]

export default function Notifications() {
  const GearButton = () => (
    <button style={{ background: 'white', border: '1px solid #E8E6F0', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <IconGear size={17} />
    </button>
  )
  return (
    <Layout showNav={false}>
      <Header title="Notifications" showClose rightContent={<GearButton />} />
      <div style={{ padding: '12px 16px 8px', borderBottom: '1px solid #E8E6F0' }}>
        <div style={{ fontSize: 13, color: '#6B6B70' }}>Showing {notifications.length} notifications</div>
      </div>
      {notifications.map(n => (
        <div key={n.id} style={{ display: 'flex', gap: 12, padding: '14px 16px', borderBottom: '1px solid #E8E6F0', background: 'white' }}>
          <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#F5F4FA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <IconBell size={17} color="#16151C" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, color: '#16151C', lineHeight: 1.5, marginBottom: 4, fontWeight: n.unread ? 500 : 400 }}>{n.text}</div>
            <div style={{ fontSize: 12, color: '#9E9CA8' }}>{n.time}</div>
          </div>
          {n.unread && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#5B4FE5', flexShrink: 0, marginTop: 6 }} />}
        </div>
      ))}
    </Layout>
  )
}
