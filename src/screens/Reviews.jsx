import Layout from '../components/Layout'
import Header from '../components/Header'
import { IconStar, IconPiggyBank, IconDownload } from '../components/icons'

export default function Reviews() {
  const DownloadButton = () => (
    <button style={{ background: 'white', border: '1px solid #E8E6F0', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <IconDownload size={16} />
    </button>
  )
  return (
    <Layout>
      <Header title="Reviews" border rightContent={<DownloadButton />} />
      <div style={{ padding: 16 }}>
        <button className="link-text" style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16, fontSize: 15 }}>
          The Old Bakery Cafe
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 9L12 15L18 9" stroke="#5B4FE5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div style={{ border: '1px solid #E8E6F0', borderRadius: 16, overflow: 'hidden', marginBottom: 20 }}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '0 0 40%', background: '#F5F4FA', padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: 12, color: '#6B6B70', marginBottom: 6 }}>Rating</div>
              <div style={{ fontSize: 36, fontWeight: 800, marginBottom: 6 }}>0.0</div>
              <div style={{ display: 'flex', gap: 2 }}>
                {[1,2,3,4,5].map(i => <IconStar key={i} size={14} color="#D8D5E8" />)}
              </div>
            </div>
            <div style={{ flex: 1, padding: 16 }}>
              {[5,4,3,2,1].map(star => (
                <div key={star} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 12, color: '#6B6B70', width: 14 }}>{star}</span>
                  <div style={{ flex: 1, background: '#F0EFF7', borderRadius: 4, height: 7 }}><div style={{ width: '0%', height: '100%', background: '#5B4FE5', borderRadius: 4 }} /></div>
                  <span style={{ fontSize: 12, color: '#6B6B70', width: 12, textAlign: 'right' }}>0</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: '#5B3A63', color: 'white', padding: '8px 16px', fontSize: 12.5, fontWeight: 600 }}>Last 90 days · 0.0</div>
        </div>
        <div style={{ textAlign: 'center', padding: '20px 20px' }}>
          <div className="empty-illustration">
            <IconPiggyBank size={48} color="#5B4FE5" />
          </div>
          <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>No reviews yet</div>
          <div style={{ fontSize: 14, color: '#6B6B70', lineHeight: 1.5 }}>Ask customers for feedback to grow your rating and attract more bookings.</div>
        </div>
      </div>
    </Layout>
  )
}
