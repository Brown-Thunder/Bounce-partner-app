import Layout from '../components/Layout'
import Header from '../components/Header'
import { IconSliders } from '../components/icons'

const PaperPlaneIllustration = () => (
  <div className="empty-illustration">
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
      <path d="M3 12L21 4L13 22L11 14L3 12Z" stroke="#5B4FE5" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M11 14L21 4" stroke="#5B4FE5" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  </div>
)

export default function Messages() {
  return (
    <Layout showNav={false}>
      <Header title="Messages" showClose />
      <div style={{ padding: '8px 16px 0', display: 'flex', justifyContent: 'flex-end' }}>
        <button className="link-text" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <IconSliders size={16} color="#5B4FE5" /> Filters
        </button>
      </div>
      <div style={{ padding: '60px 32px', textAlign: 'center' }}>
        <PaperPlaneIllustration />
        <div style={{ fontSize: 22, fontWeight: 800, color: '#16151C', marginBottom: 10, lineHeight: 1.3 }}>You don't have any messages yet</div>
        <div style={{ fontSize: 14, color: '#6B6B70', lineHeight: 1.5 }}>Receive and view customer messages here. You can start conversations directly from the booking details.</div>
      </div>
    </Layout>
  )
}
