import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'

const steps = [
  { title: 'Avoid cropped photos', description: 'Show where your business is relative to its surroundings.' },
  { title: 'Use landscape format', description: 'Portrait pictures limit visibility, while landscape offers a broader view.' },
  { title: 'Ensure your photo is bright enough', description: 'Capture photos during daylight for better quality.' },
  { title: 'Avoid too many elements', description: 'The more elements a picture has, the harder it becomes to understand.' },
]

function ExamplePhoto({ good }) {
  return (
    <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', aspectRatio: '16/10', background: good ? '#E4DFC9' : '#D9D3C4' }}>
      <div style={{ position: 'absolute', top: 8, right: 8, width: 26, height: 26, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {good ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 13L10 18L19 7" stroke="#1E8E5A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18M6 18L18 6" stroke="#C4432B" strokeWidth="2.5" strokeLinecap="round"/></svg>
        )}
      </div>
    </div>
  )
}

export default function PhotoTutorial() {
  const [step, setStep] = useState(0)
  const navigate = useNavigate()
  const current = steps[step]
  return (
    <Layout showNav={false}>
      <Header title="" showClose />
      <div style={{ padding: '8px 20px 24px' }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 10, letterSpacing: -0.4 }}>{current.title}</h2>
        <p style={{ fontSize: 15, color: '#6B6B70', lineHeight: 1.5, marginBottom: 20 }}>{current.description}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 12 }}>
          <ExamplePhoto good />
          <ExamplePhoto good={false} />
        </div>
        <div style={{ textAlign: 'center', fontSize: 13, color: '#9E9CA8', marginBottom: 28 }}>{step + 1} of {steps.length}</div>
        <button className="btn-orange" onClick={() => step < steps.length - 1 ? setStep(step + 1) : navigate(-1)} style={{ marginBottom: 12 }}>
          {step < steps.length - 1 ? 'Next' : 'Close'}
        </button>
        {step > 0 && <button className="link-text" style={{ display: 'block', margin: '0 auto' }} onClick={() => setStep(step - 1)}>Previous</button>}
      </div>
    </Layout>
  )
}
