import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { storeData } from '../data/store'
import { IconStar, IconPiggyBank, IconBell, IconLink, IconGrid, IconChevronRight, IconSupport, IconTag } from '../components/icons'

export default function Account() {
  const navigate = useNavigate()
  const menuItems = [
    { icon: IconStar, label: 'Reviews', subtitle: 'View your store ratings', path: '/account/reviews' },
    { icon: IconPiggyBank, label: 'Earnings', subtitle: 'Payouts and earnings history', path: '/account/earnings' },
    { icon: IconBell, label: 'Notifications', subtitle: 'Manage your notifications', path: '/account/profile' },
    { icon: IconLink, label: 'Affiliates', subtitle: 'Share and earn with referrals', path: '/account/profile' },
    { icon: IconTag, label: 'Users', subtitle: 'Manage team access', path: '/account/users' },
    { icon: IconGrid, label: "What's new", subtitle: 'Latest features and updates', path: '/account/whats-new' },
  ]
  return (
    <Layout>
      <Header title="Account" border />
      <div onClick={() => navigate('/account/profile')} style={{ background: 'white', margin: '16px 16px 8px', borderRadius: 16, padding: '20px 16px', border: '1px solid #E8E6F0', cursor: 'pointer' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: '#F1EEFC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: '#5B4FE5' }}>{storeData.name.charAt(0)}</span>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: '#16151C', marginBottom: 2 }}>{storeData.name}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 13, color: '#6B6B70' }}>{storeData.type}</span>
              {storeData.exclusive && <span className="exclusive-badge" style={{ fontSize: 10 }}>EXCLUSIVE</span>}
            </div>
          </div>
          <IconChevronRight />
        </div>
      </div>

      <div style={{ background: 'white', borderRadius: 16, margin: '8px 16px 16px', overflow: 'hidden', border: '1px solid #E8E6F0' }}>
        {menuItems.map((item, i) => (
          <div key={item.label + item.path} className="menu-row" onClick={() => navigate(item.path)} style={{ borderBottom: i < menuItems.length - 1 ? '1px solid #F0EFF7' : 'none' }}>
            <div className="menu-row-icon"><item.icon size={18} /></div>
            <div className="menu-row-content">
              <div className="menu-row-title">{item.label}</div>
              <div className="menu-row-subtitle">{item.subtitle}</div>
            </div>
            <IconChevronRight />
          </div>
        ))}
      </div>

      <div style={{ padding: '0 16px 8px' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#9E9CA8', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8 }}>Support</div>
      </div>
      <div style={{ background: 'white', borderRadius: 16, margin: '0 16px 16px', overflow: 'hidden', border: '1px solid #E8E6F0' }}>
        <a href="https://wa.me/1234567890" className="menu-row" style={{ display: 'flex' }}>
          <div className="menu-row-icon"><IconSupport size={18} /></div>
          <div className="menu-row-content">
            <div className="menu-row-title">Contact our support team</div>
          </div>
          <IconChevronRight />
        </a>
      </div>

      <div style={{ padding: '0 16px 24px' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#9E9CA8', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8 }}>Account</div>
        <button style={{ width: '100%', background: 'white', color: '#C4432B', border: '1px solid #E8E6F0', borderRadius: 16, padding: '14px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>Sign out</button>
      </div>
    </Layout>
  )
}
