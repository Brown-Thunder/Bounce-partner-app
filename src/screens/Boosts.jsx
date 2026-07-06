import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import BoostCard from '../components/BoostCard'
import { boostsData, boostCategories } from '../data/boosts'
import { IconLock } from '../components/icons'

export default function Boosts() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('All')
  const readyBoost = boostsData.find(b => b.status === 'ready')
  const filters = ['All', ...boostCategories]
  const visibleCategories = filter === 'All' ? boostCategories : [filter]

  return (
    <Layout>
      <Header title="Boosts" border />
      <div className="pill-tabs" style={{ borderBottom: '1px solid #E8E6F0' }}>
        {filters.map(f => (
          <div key={f} className={`pill-tab ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f}</div>
        ))}
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ background: '#F1EEFC', borderRadius: 18, padding: 20, marginBottom: 20 }}>
          <div style={{ fontSize: 17, fontWeight: 800, color: '#16151C', marginBottom: 12, lineHeight: 1.3 }}>Your reward for processing all bags through Bounce</div>
          {['Earn more per bag', 'Unlock better placement', 'Access premium perks'].map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0' }}>
              <span style={{ color: '#16151C', fontWeight: 700 }}>✓</span>
              <span style={{ fontSize: 13.5 }}>{f}</span>
            </div>
          ))}
          <button className="link-text" style={{ marginTop: 10 }}>Learn more about boosts &gt;</button>
        </div>

        {readyBoost && (
          <div className="orange-banner" style={{ marginBottom: 20 }}>
            <span style={{ fontSize: 14, fontWeight: 600 }}>1 Boost ready to activate!</span>
            <button onClick={() => navigate(`/boosts/${readyBoost.id}`)} style={{ background: '#5B4FE5', color: 'white', border: 'none', borderRadius: 8, padding: '8px 14px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>Activate</button>
          </div>
        )}

        {visibleCategories.map(category => {
          const boosts = boostsData.filter(b => b.category === category)
          if (boosts.length === 0) return null
          const lockedCount = boosts.filter(b => b.status === 'locked').length
          return (
            <div key={category} style={{ marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span className="section-header" style={{ margin: 0, fontSize: 16 }}>{category}</span>
                {lockedCount > 0 && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#F0EFF7', color: '#6B6B70', borderRadius: 20, padding: '3px 10px', fontSize: 11, fontWeight: 700 }}>
                    <IconLock size={11} color="#6B6B70" /> {lockedCount} LOCKED
                  </span>
                )}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {boosts.map(boost => <BoostCard key={boost.id} boost={boost} />)}
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
