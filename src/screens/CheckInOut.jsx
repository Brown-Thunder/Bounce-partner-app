import { useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { IconCamera } from '../components/icons'

export default function CheckInOut() {
  const [ref, setRef] = useState('')
  return (
    <Layout showNav={false}>
      <Header title="Check in / out" showBack />
      <div style={{ background: '#16151C', height: 260, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        {[{ top: 30, left: 30, borderTop: '3px solid white', borderLeft: '3px solid white' }, { top: 30, right: 30, borderTop: '3px solid white', borderRight: '3px solid white' }, { bottom: 30, left: 30, borderBottom: '3px solid white', borderLeft: '3px solid white' }, { bottom: 30, right: 30, borderBottom: '3px solid white', borderRight: '3px solid white' }].map((style, i) => (
          <div key={i} style={{ position: 'absolute', width: 32, height: 32, ...style }} />
        ))}
        <div style={{ textAlign: 'center', color: 'white' }}>
          <IconCamera size={36} color="white" />
          <div style={{ fontSize: 13, color: '#9E9CA8', marginTop: 8 }}>Camera access required</div>
        </div>
      </div>
      <div style={{ padding: '16px' }}>
        <div className="card">
          <div style={{ fontSize: 15, fontWeight: 600, textAlign: 'center', marginBottom: 8 }}>Point camera at customer's QR code</div>
          <div style={{ textAlign: 'center', color: '#9E9CA8', fontSize: 13, marginBottom: 14 }}>— or —</div>
          <input value={ref} onChange={e => setRef(e.target.value)} placeholder="Enter booking reference manually..." style={{ width: '100%', border: '1.5px solid #E8E6F0', borderRadius: 10, padding: '12px 14px', fontSize: 14, marginBottom: 12, outline: 'none', fontFamily: 'inherit' }} />
          <button className="btn-blue">Search Booking</button>
        </div>
        <div style={{ marginTop: 16, padding: '12px 16px', background: '#F5F4FA', borderRadius: 10 }}>
          <div style={{ fontSize: 13, color: '#6B6B70', textAlign: 'center', lineHeight: 1.5 }}>Make sure customers have their QR code ready in the Bounce app</div>
        </div>
      </div>
    </Layout>
  )
}
