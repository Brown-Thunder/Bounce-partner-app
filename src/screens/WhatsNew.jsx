import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'

export default function WhatsNew() {
  const navigate = useNavigate()
  return (
    <Layout showNav={false}>
      <Header title="What's new" showBack />
      <div style={{ padding: 16 }}>
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 12, color: '#9E9E9E', marginBottom: 10 }}>August 6, 2025</div>
          <div style={{ background: '#F5F5F5', borderRadius: 12, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, fontSize: 40 }}>🪧</div>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Boost your store's visibility with your Signage page</div>
          <div style={{ fontSize: 14, color: '#757575', lineHeight: 1.5, marginBottom: 10 }}>It's now easier (and faster) to make your store stand out and boost your earnings.</div>
          {["Order official Bounce signage to stand out", "Connect it to your store to unlock walk-in bonuses", "Get smart tips to place it where it matters most"].map(p => (
            <div key={p} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
              <span style={{ color: '#FF6B35', flexShrink: 0 }}>•</span>
              <span style={{ fontSize: 14 }}>{p}</span>
            </div>
          ))}
          <button onClick={() => navigate('/store/signage')} style={{ background: 'none', border: 'none', color: '#FF6B35', fontSize: 14, fontWeight: 600, cursor: 'pointer', padding: 0, marginTop: 8 }}>Explore Signage &gt;</button>
        </div>
        <div style={{ height: 1, background: '#E8E8E8', marginBottom: 24 }} />
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 12, color: '#9E9E9E', marginBottom: 10 }}>July 3, 2025</div>
          <div style={{ background: '#F5F5F5', borderRadius: 12, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, fontSize: 40 }}>⭐</div>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Easily see your customer feedback</div>
          <div style={{ fontSize: 14, color: '#757575', lineHeight: 1.5, marginBottom: 10 }}>Manage all your reviews in one place with the new 'Reviews' page:</div>
          {["See your overall score and last 90 days performance", "You'll find this page in Account on mobile"].map(p => (
            <div key={p} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
              <span style={{ color: '#FF6B35', flexShrink: 0 }}>•</span>
              <span style={{ fontSize: 14 }}>{p}</span>
            </div>
          ))}
          <button onClick={() => navigate('/account/reviews')} style={{ background: 'none', border: 'none', color: '#FF6B35', fontSize: 14, fontWeight: 600, cursor: 'pointer', padding: 0, marginTop: 8 }}>Explore your reviews &gt;</button>
        </div>
        <div style={{ height: 1, background: '#E8E8E8', marginBottom: 24 }} />
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 12, color: '#9E9E9E', marginBottom: 10 }}>June 12, 2025</div>
          <div style={{ background: '#F5F5F5', borderRadius: 12, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, fontSize: 32 }}>⚙️</div>
          <div style={{ fontSize: 14, color: '#757575', lineHeight: 1.5 }}>We've made behind-the-scenes improvements for a smoother, faster experience managing your store.</div>
        </div>
      </div>
    </Layout>
  )
}
