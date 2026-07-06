import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'

const steps = [
  { title: 'Avoid cropped photos', description: 'Show where your business is relative to its surroundings.', good: 'Full storefront visible with surroundings', bad: 'Photo cut off at edges' },
  { title: 'Use landscape format', description: 'Portrait pictures limit visibility, while landscape offers a broader view.', good: 'Wide landscape shot', bad: 'Narrow portrait shot' },
  { title: 'Ensure your photo is bright enough', description: 'Capture photos during daylight for better quality.', good: 'Bright, well-lit exterior', bad: 'Dark, underexposed photo' },
  { title: 'Avoid too many elements', description: 'The more elements a picture has, the harder it becomes to understand.', good: 'Clean, clear storefront', bad: 'Cluttered, busy background' },
]

export default function PhotoTutorial() {
  const [step, setStep] = useState(0)
  const navigate = useNavigate()
  const current = steps[step]
  return (
    <Layout showNav={false}>
      <Header title="Photo Guidelines" showBack />
      <div style={{ padding: '24px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 28 }}>
          {steps.map((_, i) => (
            <div key={i} style={{ width: i === step ? 24 : 8, height: 8, borderRadius: 4, background: i === step ? '#FF6B35' : '#E8E8E8', transition: 'all 0.3s' }} />
          ))}
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{current.title}</h2>
        <p style={{ fontSize: 15, color: '#757575', lineHeight: 1.5, marginBottom: 24 }}>{current.description}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
          <div style={{ border: '2px solid #2E7D32', borderRadius: 10, overflow: 'hidden' }}>
            <div style={{ background: '#E8F5E9', height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>✅</div>
            <div style={{ background: '#E8F5E9', padding: '6px 10px' }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#2E7D32' }}>GOOD</div>
              <div style={{ fontSize: 11, color: '#2E7D32', marginTop: 2 }}>{current.good}</div>
            </div>
          </div>
          <div style={{ border: '2px solid #D32F2F', borderRadius: 10, overflow: 'hidden' }}>
            <div style={{ background: '#FFEBEE', height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>❌</div>
            <div style={{ background: '#FFEBEE', padding: '6px 10px' }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#D32F2F' }}>BAD</div>
              <div style={{ fontSize: 11, color: '#D32F2F', marginTop: 2 }}>{current.bad}</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          {step > 0 && <button className="btn-grey" style={{ flex: 1 }} onClick={() => setStep(step - 1)}>Previous</button>}
          {step < steps.length - 1 ? (
            <button className="btn-orange" style={{ flex: 1 }} onClick={() => setStep(step + 1)}>Next</button>
          ) : (
            <button className="btn-orange" style={{ flex: 1 }} onClick={() => navigate(-1)}>Close</button>
          )}
        </div>
      </div>
    </Layout>
  )
}
