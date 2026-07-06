import { useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { storeData } from '../data/store'
import { IconClose } from '../components/icons'

function AddUserModal({ onClose }) {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('employee')
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 200, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
      <div style={{ background: 'white', borderRadius: '20px 20px 0 0', padding: 20, width: '100%', maxWidth: 390, maxHeight: '85vh', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div style={{ fontSize: 18, fontWeight: 800 }}>Add user</div>
          <button onClick={onClose} style={{ background: '#F5F4FA', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconClose size={16} /></button>
        </div>
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 12.5, color: '#6B6B70', marginBottom: 6 }}>Store access</div>
          <div style={{ border: '1px solid #E8E6F0', borderRadius: 12, padding: '12px 14px', fontSize: 14.5 }}>All stores</div>
        </div>
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 12.5, color: '#6B6B70', marginBottom: 6 }}>Email</div>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="name@example.com" style={{ width: '100%', border: '1px solid #E8E6F0', borderRadius: 12, padding: '12px 14px', fontSize: 14.5, outline: 'none', fontFamily: 'inherit' }} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 12.5, color: '#6B6B70', marginBottom: 6 }}>Phone number</div>
          <div style={{ border: '1px solid #E8E6F0', borderRadius: 12, padding: '12px 14px', fontSize: 14.5, color: '#9E9CA8' }}>🇬🇧 +44</div>
        </div>
        <div style={{ fontSize: 12.5, color: '#6B6B70', marginBottom: 8 }}>Role</div>
        {[
          { key: 'employee', title: 'Employee', desc: 'Access limited to Bookings only. Earnings and Settings are hidden.' },
          { key: 'owner', title: 'Owner', desc: 'Full access to all store data and settings.' },
        ].map(r => (
          <div key={r.key} onClick={() => setRole(r.key)} style={{ border: role === r.key ? '1.5px solid #5B4FE5' : '1.5px solid #E8E6F0', background: role === r.key ? '#F1EEFC' : 'white', borderRadius: 14, padding: '12px 14px', marginBottom: 10, cursor: 'pointer' }}>
            <div style={{ fontSize: 14.5, fontWeight: 700, marginBottom: 3 }}>{r.title}</div>
            <div style={{ fontSize: 12.5, color: '#6B6B70', lineHeight: 1.4 }}>{r.desc}</div>
          </div>
        ))}
        <button className="btn-orange" disabled={!email} style={{ marginTop: 8, opacity: email ? 1 : 0.5 }}>Add user</button>
      </div>
    </div>
  )
}

export default function Users() {
  const [showAdd, setShowAdd] = useState(false)
  const AddButton = () => (
    <button onClick={() => setShowAdd(true)} style={{ background: '#5B4FE5', border: 'none', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 20, fontWeight: 700 }}>+</button>
  )
  return (
    <Layout showNav={false}>
      <Header title="Users" showBack rightContent={<AddButton />} />
      <div style={{ padding: 16 }}>
        <div className="section-header" style={{ fontSize: 16 }}>1 User</div>
        <div style={{ border: '1px solid #E8E6F0', borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr auto', gap: 10, padding: '10px 14px', background: '#F5F4FA', fontSize: 11.5, fontWeight: 700, color: '#6B6B70', textTransform: 'uppercase' }}>
            <span>Name and Role</span><span>Stores access</span><span></span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr auto', gap: 10, padding: '14px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Amit Dhunna</div>
              <div style={{ fontSize: 12, color: '#9E9CA8' }}>amit.dhunna@hotmail.co.uk</div>
              <span style={{ display: 'inline-block', marginTop: 4, background: '#DDD6F7', color: '#5B4FE5', borderRadius: 20, padding: '2px 8px', fontSize: 10.5, fontWeight: 700 }}>Owner</span>
            </div>
            <div style={{ fontSize: 13 }}>All Stores</div>
            <button className="link-text" style={{ fontSize: 13 }}>Edit</button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
          <button className="btn-grey" disabled style={{ width: 'auto', padding: '8px 16px', fontSize: 13 }}>Previous</button>
          <button className="btn-grey" disabled style={{ width: 'auto', padding: '8px 16px', fontSize: 13 }}>Next</button>
        </div>
      </div>
      {showAdd && <AddUserModal onClose={() => setShowAdd(false)} />}
    </Layout>
  )
}
