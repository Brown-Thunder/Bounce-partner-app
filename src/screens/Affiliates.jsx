import { useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { storeData } from '../data/store'

export default function Affiliates() {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(storeData.affiliateLink).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <Layout showNav={false}>
      <Header title="Affiliates" showBack />
      <div style={{ padding: 16 }}>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Your affiliate link</div>
        <div style={{ fontSize: 14, color: '#757575', marginBottom: 20 }}>Share this link with others and earn money</div>
        <div style={{ background: '#F5F5F5', borderRadius: 12, padding: '14px 16px', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, minWidth: 0 }}>
              <span>🔗</span>
              <span style={{ fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{storeData.affiliateLink}</span>
            </div>
            <button onClick={copy} className="btn-orange" style={{ width: 'auto', padding: '8px 16px', fontSize: 13, flexShrink: 0 }}>{copied ? 'Copied!' : 'Copy'}</button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn-orange-outline" style={{ flex: 1 }}>📤 Share link</button>
          <button style={{ flex: 1, background: '#E8F5E9', color: '#2E7D32', border: 'none', borderRadius: 10, padding: '12px', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>💬 WhatsApp</button>
        </div>
      </div>
    </Layout>
  )
}
