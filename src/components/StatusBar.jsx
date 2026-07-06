export default function StatusBar({ bg = 'white' }) {
  const textColor = bg === 'white' || !bg ? '#1A1A1A' : 'white'
  return (
    <div style={{ height: 44, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px', flexShrink: 0 }}>
      <span style={{ fontSize: 15, fontWeight: 600, color: textColor, letterSpacing: -0.3 }}>09:32</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {/* Signal bars */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <rect x="0" y="9" width="3" height="3" rx="0.5" fill={textColor}/>
          <rect x="4.5" y="6" width="3" height="6" rx="0.5" fill={textColor}/>
          <rect x="9" y="3" width="3" height="9" rx="0.5" fill={textColor}/>
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill={textColor}/>
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 9.5C8.8 9.5 9.5 10.2 9.5 11C9.5 11.8 8.8 12.5 8 12.5C7.2 12.5 6.5 11.8 6.5 11C6.5 10.2 7.2 9.5 8 9.5Z" fill={textColor}/>
          <path d="M4.3 6.8C5.3 5.8 6.6 5.3 8 5.3C9.4 5.3 10.7 5.8 11.7 6.8" stroke={textColor} strokeWidth="1.3" strokeLinecap="round"/>
          <path d="M1.5 4C3.2 2.3 5.5 1.3 8 1.3C10.5 1.3 12.8 2.3 14.5 4" stroke={textColor} strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        {/* Battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="20" height="11" rx="2.5" stroke={textColor} strokeWidth="1"/>
          <rect x="2" y="2" width="14" height="8" rx="1.5" fill={textColor}/>
          <path d="M22 4V8C23.1 7.6 23.1 4.4 22 4Z" fill={textColor}/>
        </svg>
      </div>
    </div>
  )
}
