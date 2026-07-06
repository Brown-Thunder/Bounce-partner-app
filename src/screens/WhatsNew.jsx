import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { IconSignage, IconStar, IconGrid, IconGear } from '../components/icons'

function PhoneMockup({ bg, children }) {
  return (
    <div style={{ background: bg, borderRadius: 14, height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
      <div style={{ width: 88, height: 116, background: 'white', borderRadius: 14, border: '3px solid #16151C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </div>
    </div>
  )
}

export default function WhatsNew() {
  const navigate = useNavigate()
  return (
    <Layout showNav={false}>
      <Header title="What's new" showClose titleStyle={{ textAlign: 'center' }} />
      <div style={{ padding: 16 }}>
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 12, color: '#9E9CA8', marginBottom: 10 }}>Update - August 6, 2025</div>
          <PhoneMockup bg="#FBE9DE"><IconSignage size={28} color="#5B4FE5" /></PhoneMockup>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Boost your store's visibility with your Signage page</div>
          <div style={{ fontSize: 14, color: '#6B6B70', lineHeight: 1.5, marginBottom: 10 }}>It's now easier (and faster) to make your store stand out and boost your earnings.</div>
          {["Order official Bounce signage to stand out", "Connect it to your store to unlock walk-in bonuses", "Get smart tips to place it where it matters most"].map(p => (
            <div key={p} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
              <span style={{ color: '#16151C', flexShrink: 0 }}>▪</span>
              <span style={{ fontSize: 14 }}>{p}</span>
            </div>
          ))}
          <button onClick={() => navigate('/store/signage')} className="link-text" style={{ marginTop: 8 }}>Explore Signage &gt;</button>
        </div>
        <div style={{ height: 1, background: '#E8E6F0', marginBottom: 24 }} />
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 12, color: '#9E9CA8', marginBottom: 10 }}>Update - July 3, 2025</div>
          <PhoneMockup bg="#EDEAFB"><IconStar size={28} filled color="#5B4FE5" /></PhoneMockup>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Easily see your customer feedback</div>
          <div style={{ fontSize: 14, color: '#6B6B70', lineHeight: 1.5, marginBottom: 10 }}>Manage all your reviews in one place with the new 'Reviews' page:</div>
          {["See your overall score and last 90 days performance", "You'll find this page in Account on mobile"].map(p => (
            <div key={p} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
              <span style={{ color: '#16151C', flexShrink: 0 }}>▪</span>
              <span style={{ fontSize: 14 }}>{p}</span>
            </div>
          ))}
          <button onClick={() => navigate('/account/reviews')} className="link-text" style={{ marginTop: 8 }}>Explore your reviews &gt;</button>

          <PhoneMockup bg="#D7F5E6"><IconGrid size={26} color="#1E8E5A" /></PhoneMockup>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Skip the QR code or PIN for walk-ins</div>
          <div style={{ fontSize: 14, color: '#6B6B70', lineHeight: 1.5 }}>Walk-in bookings marked "Now" can be checked in with one tap — no code needed.</div>
        </div>
        <div style={{ height: 1, background: '#E8E6F0', marginBottom: 24 }} />
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 12, color: '#9E9CA8', marginBottom: 10 }}>Update - June 12, 2025</div>
          <PhoneMockup bg="#F5F4FA"><IconGear size={26} /></PhoneMockup>
          <div style={{ fontSize: 14, color: '#6B6B70', lineHeight: 1.5 }}>We've made behind-the-scenes improvements for a smoother, faster experience managing your store.</div>
        </div>
      </div>
    </Layout>
  )
}
