import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import BoostCard from '../components/BoostCard'
import { boostsData } from '../data/boosts'

export default function Boosts() {
  const navigate = useNavigate()
  const readyBoost = boostsData.find(b => b.status === 'ready')
  return (
    <Layout>
      <Header title="Boosts" />
      <div style={{ padding: '16px 16px 8px' }}>
        <div style={{ fontSize: 14, color: '#757575', marginBottom: 16 }}>Unlock rewards by meeting performance milestones</div>
        <div className="card" style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: '#FF6B35', marginBottom: 6 }}>5 / 10</div>
          <div style={{ fontSize: 13, color: '#757575', marginBottom: 10 }}>boosts unlocked</div>
          <div className="progress-bar"><div className="progress-fill" style={{ width: '50%' }} /></div>
        </div>
        {readyBoost && (
          <div className="orange-banner" style={{ marginBottom: 8 }}>
            <span style={{ fontSize: 14, fontWeight: 600 }}>1 Boost ready to activate!</span>
            <button onClick={() => navigate(`/boosts/${readyBoost.id}`)} style={{ background: 'white', color: '#FF6B35', border: 'none', borderRadius: 8, padding: '8px 14px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>Activate</button>
          </div>
        )}
      </div>
      <div style={{ borderTop: '1px solid #E8E8E8' }}>
        {boostsData.map(boost => <BoostCard key={boost.id} boost={boost} />)}
      </div>
    </Layout>
  )
}
