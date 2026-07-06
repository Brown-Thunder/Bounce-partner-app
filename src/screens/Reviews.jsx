import Layout from '../components/Layout'
import Header from '../components/Header'

export default function Reviews() {
  return (
    <Layout>
      <Header title="Reviews" showBack />
      <div style={{ padding: 16 }}>
        <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 16 }}>The Old Bakery Cafe</div>
        <div className="card" style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 }}>
            <div style={{ fontSize: 42, fontWeight: 800 }}>0.0</div>
            <div>
              <div style={{ display: 'flex', gap: 3, marginBottom: 4 }}>
                {[1,2,3,4,5].map(i => <span key={i} style={{ fontSize: 20, color: '#E0E0E0' }}>★</span>)}
              </div>
              <div style={{ fontSize: 13, color: '#757575' }}>Last 90 days — 0.0</div>
            </div>
          </div>
          {[5,4,3,2,1].map(star => (
            <div key={star} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ fontSize: 13, color: '#757575', width: 20, textAlign: 'right' }}>{star}★</span>
              <div style={{ flex: 1, background: '#F5F5F5', borderRadius: 4, height: 8 }}><div style={{ width: '0%', height: '100%', background: '#FFB300', borderRadius: 4 }} /></div>
              <span style={{ fontSize: 13, color: '#757575', width: 16, textAlign: 'right' }}>0</span>
            </div>
          ))}
        </div>
        <div className="empty-state">
          <div className="empty-state-icon">📭</div>
          <div className="empty-state-title">No reviews yet</div>
          <div className="empty-state-text">Ask customers for feedback to grow your rating and attract more bookings.</div>
        </div>
      </div>
    </Layout>
  )
}
