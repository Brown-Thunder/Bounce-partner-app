import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'

const BounceLogo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="14" fill="#FF6B35"/>
      <path d="M9 8h4.5c2.5 0 4 1.2 4 3.2 0 1.2-.6 2-1.5 2.5 1.2.4 2 1.4 2 2.8 0 2.2-1.6 3.5-4.2 3.5H9V8zm2 3.5v2.2h2.2c1 0 1.6-.4 1.6-1.1 0-.8-.6-1.1-1.6-1.1H11zm0 4.6v2.4h2.4c1.1 0 1.8-.5 1.8-1.2 0-.8-.7-1.2-1.8-1.2H11z" fill="white"/>
    </svg>
    <span style={{ fontSize: 20, fontWeight: 800, color: '#FF6B35', letterSpacing: -0.5 }}>bounce</span>
  </div>
)

export default function Home() {
  const navigate = useNavigate()
  const BellIcon = () => (
    <button onClick={() => navigate('/notifications')} style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative', padding: 4 }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C10.3 2 9 3.3 9 5C6.1 5.9 4 8.7 4 12V17L2 19V20H22V19L20 17V12C20 8.7 17.9 5.9 15 5C15 3.3 13.7 2 12 2Z" stroke="#1A1A1A" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20" stroke="#1A1A1A" strokeWidth="2"/>
      </svg>
      <span style={{ position: 'absolute', top: 0, right: 0, background: '#FF6B35', color: 'white', borderRadius: '50%', width: 16, height: 16, fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>5</span>
    </button>
  )
  return (
    <Layout>
      <Header title={<BounceLogo />} rightContent={<BellIcon />} />
      <div style={{ padding: '16px' }}>
        <div style={{ marginBottom: 16 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: '#1A1A1A' }}>Hi, Amit! 👋</h1>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <button onClick={() => navigate('/store/signage')} style={{ background: '#F5F5F5', border: 'none', borderRadius: 20, padding: '8px 14px', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>📶 Link Signage</button>
          <button style={{ background: '#F5F5F5', border: 'none', borderRadius: 20, padding: '8px 14px', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>📅 Add Holidays/Vacations</button>
        </div>
        <div className="card" style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: 20 }}>🚀</span>
            <span style={{ fontSize: 15, fontWeight: 600 }}>Unlocked Boosts</span>
          </div>
          <div style={{ fontSize: 32, fontWeight: 800, color: '#FF6B35', marginBottom: 8 }}>5 of 10</div>
          <div className="progress-bar" style={{ marginBottom: 10 }}><div className="progress-fill" style={{ width: '50%' }} /></div>
          <button onClick={() => navigate('/boosts')} style={{ background: 'none', border: 'none', color: '#FF6B35', fontSize: 13, fontWeight: 500, cursor: 'pointer', padding: 0 }}>See how to unlock more &gt;</button>
        </div>
        <div className="orange-banner" style={{ marginBottom: 16 }}>
          <span style={{ fontSize: 14, fontWeight: 600, flex: 1, marginRight: 8 }}>🚀 You have Boosts waiting for activation!</span>
          <button onClick={() => navigate('/boosts/5')} style={{ background: 'white', color: '#FF6B35', border: 'none', borderRadius: 8, padding: '8px 14px', fontSize: 13, fontWeight: 700, cursor: 'pointer', flexShrink: 0 }}>Activate</button>
        </div>
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span className="section-header" style={{ margin: 0 }}>Pending Tasks</span>
            <span style={{ background: '#FF6B35', color: 'white', borderRadius: '50%', width: 20, height: 20, fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
          </div>
          <div style={{ fontSize: 13, color: '#757575', marginBottom: 12, lineHeight: 1.4 }}>Complete all tasks to unlock benefits and boost your earnings!</div>
          <div className="card" style={{ marginBottom: 10 }}>
            <div style={{ display: 'flex', gap: 12 }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>🏷️</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Order security tags &amp; signage</div>
                <div style={{ fontSize: 13, color: '#757575', lineHeight: 1.4, marginBottom: 12 }}>Make your store stand out to your customers and make sure bags are always tagged</div>
                <button onClick={() => navigate('/store/signage')} className="btn-orange-outline" style={{ width: 'auto' }}>Order</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div style={{ display: 'flex', gap: 12 }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>🏦</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Connect your bank account</div>
                <div style={{ fontSize: 13, color: '#757575', lineHeight: 1.4, marginBottom: 12 }}>Connect your bank account to Stripe to get paid</div>
                <button className="btn-orange-outline" style={{ width: 'auto' }}>Connect</button>
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => navigate('/check-in-out')} className="btn-blue" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 4 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/><path d="M7 7H10V10H7ZM14 7H17V10H14ZM7 14H10V17H7ZM14 14V17M17 14H14V17H17" stroke="white" strokeWidth="1.5"/></svg>
          Check in / out
        </button>
      </div>
    </Layout>
  )
}
