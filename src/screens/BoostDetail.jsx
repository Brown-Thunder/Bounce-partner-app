import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import RequirementRow from '../components/RequirementRow'
import { boostsData } from '../data/boosts'

export default function BoostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const boost = boostsData.find(b => b.id === parseInt(id)) || boostsData[0]
  const isLocked = boost.status === 'locked'
  const isReady = boost.status === 'ready'
  const isActive = boost.status === 'active'
  const metCount = boost.requirements.filter(r => r.met).length
  const totalCount = boost.requirements.length
  const CloseButton = () => (
    <button onClick={() => navigate('/boosts')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="#757575" strokeWidth="2" strokeLinecap="round"/></svg>
    </button>
  )
  return (
    <Layout showNav={false}>
      <Header title={boost.name} showBack rightContent={<CloseButton />} />
      <div style={{ height: 180, background: isLocked ? 'linear-gradient(135deg, #F0EDF5, #E0D8ED)' : isActive ? 'linear-gradient(135deg, #E8F5E9, #C8E6C9)' : 'linear-gradient(135deg, #FFF3ED, #FFE0CC)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', flexShrink: 0, gap: 8 }}>
        <span style={{ fontSize: 56 }}>{boost.emoji}</span>
        {isLocked && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', borderRadius: 20, padding: '4px 12px', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>
            <span style={{ fontSize: 14 }}>🔒</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#D32F2F' }}>LOCKED</span>
          </div>
        )}
        {isActive && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', borderRadius: 20, padding: '4px 12px', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#2E7D32' }}>✓ ACTIVE</span>
          </div>
        )}
        {isReady && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', borderRadius: 20, padding: '4px 12px', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#FF6B35' }}>ACTIVATE</span>
          </div>
        )}
      </div>
      <div style={{ padding: '20px 16px', paddingBottom: 90 }}>
        <div style={{ marginBottom: 20 }}>
          <div className="section-header">What this unlocks</div>
          <p style={{ fontSize: 14, color: '#757575', lineHeight: 1.6 }}>{boost.description}</p>
          {boost.previewFeatures && (
            <div style={{ marginTop: 12 }}>
              {boost.previewFeatures.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0' }}>
                  <span style={{ color: '#2E7D32', fontSize: 14, fontWeight: 600 }}>✓</span>
                  <span style={{ fontSize: 14 }}>{f}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {boost.rateCard && (
          <div className="card" style={{ marginBottom: 20, background: '#FFF3ED' }}>
            {boost.rateCard.map(r => (
              <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #FFE0CC' }}>
                <span style={{ fontSize: 14 }}>{r.label}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 15, fontWeight: 700 }}>{r.boosted}</span>
                  {r.diff && <span style={{ fontSize: 13, color: '#2E7D32', fontWeight: 600 }}>{r.diff}</span>}
                </div>
              </div>
            ))}
          </div>
        )}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <div className="section-header" style={{ margin: 0 }}>Requirements</div>
            <span style={{ fontSize: 14, fontWeight: 600, color: isActive ? '#2E7D32' : '#FF6B35' }}>{metCount}/{totalCount}</span>
          </div>
          <div style={{ fontSize: 13, color: '#9E9E9E', marginBottom: 12 }}>Requirement updates may take a few hours</div>
          {boost.requirements.map((req, i) => <RequirementRow key={i} req={req} />)}
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 390, padding: '16px', background: 'white', borderTop: '1px solid #E8E8E8' }}>
        {isActive && <button className="btn-green" disabled style={{ opacity: 0.9 }}>✓ Active</button>}
        {isReady && <button className="btn-orange">Activate Boost</button>}
        {isLocked && (
          <button className="btn-grey" disabled style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, height: 'auto', paddingTop: 12, paddingBottom: 12 }}>
            <span>Locked</span>
            <span style={{ fontSize: 12, fontWeight: 400 }}>Meet requirements to unlock</span>
          </button>
        )}
      </div>
    </Layout>
  )
}
