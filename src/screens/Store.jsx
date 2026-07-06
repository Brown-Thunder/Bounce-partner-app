import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { storeData } from '../data/store'
import { IconPhone, IconCamera, IconClose, IconInfo, IconCalendar, IconChevronDown, IconChevronUp, IconAlert, IconPlus } from '../components/icons'

const TIME_OPTIONS = Array.from({ length: 48 }, (_, i) => {
  const hour24 = Math.floor(i / 2)
  const min = i % 2 === 0 ? '00' : '30'
  const period = hour24 < 12 ? 'AM' : 'PM'
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12
  return `${hour12}:${min} ${period}`
})

const DEFAULT_DAYS = [
  { key: 'Mon', label: 'Mon', closed: false, open: '8:30 AM', close: '2:30 PM', open24h: false },
  { key: 'Tue', label: 'Tue', closed: false, open: '8:30 AM', close: '2:30 PM', open24h: false },
  { key: 'Wed', label: 'Wed', closed: false, open: '8:30 AM', close: '2:30 PM', open24h: false },
  { key: 'Thu', label: 'Thu', closed: false, open: '8:30 AM', close: '2:30 PM', open24h: false },
  { key: 'Fri', label: 'Fri', closed: false, open: '8:30 AM', close: '2:30 PM', open24h: false },
  { key: 'Sat', label: 'Sat', closed: false, open: '8:30 AM', close: '2:30 PM', open24h: false },
  { key: 'Sun', label: 'Sun', closed: true, open: '8:30 AM', close: '2:30 PM', open24h: false },
]

function timeToMinutes(t) {
  const [, h, m, period] = t.match(/(\d+):(\d+) (AM|PM)/)
  let hour = parseInt(h, 10) % 12
  if (period === 'PM') hour += 12
  return hour * 60 + parseInt(m, 10)
}

function weeklyHours(days) {
  return days.reduce((total, d) => {
    if (d.closed) return total
    if (d.open24h) return total + 24 * 60
    return total + Math.max(0, timeToMinutes(d.close) - timeToMinutes(d.open))
  }, 0) / 60
}

function BottomSheet({ onClose, children, maxHeight }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 300, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }} onClick={onClose}>
      <div style={{ background: 'white', borderRadius: '20px 20px 0 0', padding: 20, width: '100%', maxWidth: 390, maxHeight: maxHeight || '80vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

function TimePickerSheet({ title, value, onSelect, onClose }) {
  return (
    <BottomSheet onClose={onClose}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <div style={{ fontSize: 17, fontWeight: 800 }}>{title}</div>
        <button onClick={onClose} style={{ background: '#F5F4FA', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconClose size={16} /></button>
      </div>
      <div style={{ maxHeight: 320, overflowY: 'auto' }}>
        {TIME_OPTIONS.map(t => (
          <div key={t} onClick={() => { onSelect(t); onClose() }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 4px', borderBottom: '1px solid #F0EFF7', cursor: 'pointer', color: t === value ? '#5B4FE5' : '#16151C', fontWeight: t === value ? 700 : 400 }}>
            <span style={{ fontSize: 15 }}>{t}</span>
            {t === value && <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13L10 18L19 7" stroke="#5B4FE5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          </div>
        ))}
      </div>
    </BottomSheet>
  )
}

function CalendarSheet({ title, value, onSelect, onClose }) {
  const [cursor, setCursor] = useState(() => new Date(value.getFullYear(), value.getMonth(), 1))
  const monthLabel = cursor.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  const firstWeekday = (cursor.getDay() + 6) % 7 // Mon = 0
  const daysInMonth = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate()
  const cells = [...Array(firstWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)]
  const isSelected = (d) => d && value.getDate() === d && value.getMonth() === cursor.getMonth() && value.getFullYear() === cursor.getFullYear()

  return (
    <BottomSheet onClose={onClose} maxHeight="90vh">
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
        <button onClick={onClose} style={{ background: 'white', border: '1px solid #E8E6F0', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><IconClose size={16} /></button>
        <div>
          <div style={{ fontSize: 13, color: '#6B6B70' }}>Date</div>
          <div style={{ fontSize: 20, fontWeight: 800 }}>{value.getMonth() + 1}-{value.getDate()}-{value.getFullYear()}</div>
        </div>
      </div>
      <div style={{ background: '#F5F4FA', borderRadius: 16, padding: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <button onClick={() => setCursor(c => new Date(c.getFullYear(), c.getMonth() - 1, 1))} style={{ background: 'white', border: '1px solid #E8E6F0', borderRadius: '50%', width: 34, height: 34, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="#16151C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div style={{ fontSize: 16, fontWeight: 700 }}>{monthLabel}</div>
          <button onClick={() => setCursor(c => new Date(c.getFullYear(), c.getMonth() + 1, 1))} style={{ background: 'white', border: '1px solid #E8E6F0', borderRadius: '50%', width: 34, height: 34, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="#16151C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginBottom: 8 }}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
            <div key={d} style={{ textAlign: 'center', fontSize: 13, fontWeight: 600, color: '#16151C', padding: '4px 0' }}>{d}</div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
          {cells.map((d, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '8px 0' }}>
              {d && (
                <button onClick={() => onSelect(new Date(cursor.getFullYear(), cursor.getMonth(), d))} style={{ width: 34, height: 34, borderRadius: '50%', border: 'none', cursor: 'pointer', fontSize: 15, background: isSelected(d) ? '#5B4FE5' : 'transparent', color: isSelected(d) ? 'white' : '#16151C', fontWeight: isSelected(d) ? 700 : 400 }}>{d}</button>
              )}
            </div>
          ))}
        </div>
      </div>
      <button className="btn-orange" style={{ marginTop: 20 }} onClick={onClose}>Set date</button>
    </BottomSheet>
  )
}

function DayRow({ day, onChange, allDaysSameHours, onCopyToAll }) {
  const [expanded, setExpanded] = useState(false)
  const [pickerField, setPickerField] = useState(null)

  return (
    <div style={{ borderBottom: '1px solid #F0EFF7', padding: '14px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }} onClick={() => !day.closed && setExpanded(e => !e)}>
        <button onClick={(e) => { e.stopPropagation(); onChange({ ...day, closed: !day.closed }); setExpanded(false) }} style={{ width: 22, height: 22, borderRadius: 6, border: day.closed ? '1.5px solid #D8D5E8' : 'none', background: day.closed ? 'white' : 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: 0 }}>
          {!day.closed && (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#5B4FE5" strokeWidth="1.7"/><path d="M7 12.5L10 15.5L17 8.5" stroke="#5B4FE5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          )}
        </button>
        <span style={{ fontSize: 15, flex: 1 }}>{day.label}</span>
        {day.closed ? (
          <span style={{ background: '#F0EFF7', color: '#6B6B70', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 700 }}>CLOSED</span>
        ) : (
          <>
            {!expanded && <span style={{ fontSize: 14, color: '#6B6B70' }}>{day.open24h ? 'Open 24h' : `${day.open} - ${day.close}`}</span>}
            {expanded ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
          </>
        )}
      </div>

      {expanded && !day.closed && (
        <div style={{ marginTop: 12, paddingLeft: 34 }}>
          {!day.open24h && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <button onClick={() => setPickerField('open')} style={{ flex: 1, border: '1px solid #E8E6F0', borderRadius: 12, padding: '12px 14px', background: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 15 }}>
                {day.open} <IconChevronDown size={14} />
              </button>
              <button onClick={() => setPickerField('close')} style={{ flex: 1, border: '1px solid #E8E6F0', borderRadius: 12, padding: '12px 14px', background: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 15 }}>
                {day.close} <IconChevronDown size={14} />
              </button>
              <IconPlus size={20} />
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <span style={{ fontSize: 14, color: '#6B6B70' }}>Open 24h</span>
            <label className="toggle-switch">
              <input type="checkbox" checked={day.open24h} onChange={() => onChange({ ...day, open24h: !day.open24h })} />
              <span className="toggle-slider" />
            </label>
          </div>
          {!allDaysSameHours && (
            <div style={{ background: '#F5F4FA', borderRadius: 12, padding: 14, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <IconInfo size={16} />
              <div>
                <div style={{ fontSize: 14 }}>Copy these opening hours to all days?</div>
                <button className="link-text" style={{ marginTop: 4 }} onClick={() => onCopyToAll(day)}>Yes, copy</button>
              </div>
            </div>
          )}
        </div>
      )}

      {pickerField && (
        <TimePickerSheet
          title={pickerField === 'open' ? 'Opening time' : 'Closing time'}
          value={day[pickerField]}
          onSelect={(t) => onChange({ ...day, [pickerField]: t })}
          onClose={() => setPickerField(null)}
        />
      )}
    </div>
  )
}

function EditHoursModal({ initialDays, onClose, onSave }) {
  const [days, setDays] = useState(initialDays)
  const [showAlert, setShowAlert] = useState(true)
  const [open247, setOpen247] = useState(false)

  const hours = useMemo(() => weeklyHours(days), [days])
  const belowMinimum = hours < 40
  const allDaysSameHours = useMemo(() => {
    const open = days.filter(d => !d.closed)
    return open.every(d => d.open === open[0]?.open && d.close === open[0]?.close && d.open24h === open[0]?.open24h)
  }, [days])

  const updateDay = (key, patch) => setDays(ds => ds.map(d => d.key === key ? patch : d))
  const copyToAll = (source) => setDays(ds => ds.map(d => d.closed ? d : { ...d, open: source.open, close: source.close, open24h: source.open24h }))

  return (
    <BottomSheet onClose={onClose} maxHeight="95vh">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ fontSize: 20, fontWeight: 800 }}>Edit Opening hours</div>
        <button onClick={onClose} style={{ background: 'white', border: '1px solid #E8E6F0', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconClose size={18} /></button>
      </div>

      {showAlert && belowMinimum && (
        <div style={{ background: '#FBE7E2', borderRadius: 14, padding: 16, marginBottom: 20, position: 'relative' }}>
          <button onClick={() => setShowAlert(false)} style={{ position: 'absolute', top: 14, right: 14, background: 'none', border: 'none', cursor: 'pointer' }}><IconClose size={16} /></button>
          <div style={{ display: 'flex', gap: 10 }}>
            <IconAlert size={18} />
            <div style={{ paddingRight: 20 }}>
              <div style={{ fontSize: 14.5, fontWeight: 700, marginBottom: 4 }}>Minimum weekly hours is 40h</div>
              <div style={{ fontSize: 13.5, color: '#16151C', lineHeight: 1.4, marginBottom: 8 }}>Hours are below the minimum. To close temporarily, add an exception instead.</div>
              <button className="link-text" style={{ fontSize: 13.5 }}>Add exception</button>
            </div>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{ fontSize: 15 }}>Open 24/7</span>
        <label className="toggle-switch">
          <input type="checkbox" checked={open247} onChange={() => setOpen247(o => !o)} />
          <span className="toggle-slider" />
        </label>
      </div>

      {!open247 && (
        <div style={{ background: '#F9F8FC', borderRadius: 14, padding: '0 14px', marginBottom: 20 }}>
          {days.map(day => (
            <DayRow key={day.key} day={day} onChange={(patch) => updateDay(day.key, patch)} allDaysSameHours={allDaysSameHours} onCopyToAll={copyToAll} />
          ))}
        </div>
      )}

      <button className="btn-orange" disabled={belowMinimum} style={{ opacity: belowMinimum ? 0.4 : 1, cursor: belowMinimum ? 'not-allowed' : 'pointer' }} onClick={() => { onSave(days); onClose() }}>Save changes</button>
    </BottomSheet>
  )
}

function AddExceptionModal({ onClose, onAdd }) {
  const [fromDate, setFromDate] = useState(new Date())
  const [toDate, setToDate] = useState(new Date())
  const [closeAllDay, setCloseAllDay] = useState(false)
  const [openFrom, setOpenFrom] = useState('9:00 AM')
  const [openTo, setOpenTo] = useState('5:00 PM')
  const [reason, setReason] = useState('')
  const [pickerField, setPickerField] = useState(null)
  const fmt = (d) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' }).replace(/^(\w+), (\d+)\/(\d+)$/, '$1, $2/$3')

  return (
    <BottomSheet onClose={onClose} maxHeight="95vh">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ fontSize: 20, fontWeight: 800 }}>Add exception</div>
        <button onClick={onClose} style={{ background: 'white', border: '1px solid #E8E6F0', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconClose size={18} /></button>
      </div>
      <div style={{ fontSize: 14, color: '#6B6B70', lineHeight: 1.5, marginBottom: 20 }}>Specify when your store is open to receive customers. It will be closed outside of these times.</div>

      <div style={{ fontSize: 13, color: '#6B6B70', marginBottom: 8 }}>Dates</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <button onClick={() => setPickerField('from')} style={{ flex: 1, border: '1px solid #E8E6F0', borderRadius: 12, padding: '12px 14px', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
          <IconCalendar size={16} /> {fmt(fromDate)}
        </button>
        <span style={{ fontSize: 13, color: '#9E9CA8' }}>to</span>
        <button onClick={() => setPickerField('to')} style={{ flex: 1, border: '1px solid #E8E6F0', borderRadius: 12, padding: '12px 14px', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
          <IconCalendar size={16} /> {fmt(toDate)}
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>Close all day</span>
        <label className="toggle-switch">
          <input type="checkbox" checked={closeAllDay} onChange={() => setCloseAllDay(c => !c)} />
          <span className="toggle-slider" />
        </label>
      </div>

      {!closeAllDay && (
        <>
          <div style={{ fontSize: 13, color: '#6B6B70', marginBottom: 8 }}>Open hours</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <button onClick={() => setPickerField('openFrom')} style={{ flex: 1, border: '1px solid #E8E6F0', borderRadius: 12, padding: '12px 14px', background: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 15 }}>
              {openFrom} <IconChevronDown size={14} />
            </button>
            <span style={{ fontSize: 13, color: '#9E9CA8' }}>to</span>
            <button onClick={() => setPickerField('openTo')} style={{ flex: 1, border: '1px solid #E8E6F0', borderRadius: 12, padding: '12px 14px', background: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 15 }}>
              {openTo} <IconChevronDown size={14} />
            </button>
          </div>
        </>
      )}

      <div style={{ fontSize: 13, color: '#6B6B70', marginBottom: 8 }}>Reason</div>
      <input value={reason} onChange={e => setReason(e.target.value)} placeholder="e.g. Holiday" style={{ width: '100%', border: '1px solid #E8E6F0', borderRadius: 12, padding: '12px 14px', fontSize: 14.5, outline: 'none', fontFamily: 'inherit', marginBottom: 24 }} />

      <button
        className="btn-orange"
        onClick={() => { onAdd({ fromDate, toDate, closeAllDay, openFrom, openTo, reason }); onClose() }}
      >
        Add exception
      </button>

      {pickerField === 'from' && <CalendarSheet title="Date" value={fromDate} onSelect={setFromDate} onClose={() => setPickerField(null)} />}
      {pickerField === 'to' && <CalendarSheet title="Date" value={toDate} onSelect={setToDate} onClose={() => setPickerField(null)} />}
      {pickerField === 'openFrom' && <TimePickerSheet title="Opening time" value={openFrom} onSelect={setOpenFrom} onClose={() => setPickerField(null)} />}
      {pickerField === 'openTo' && <TimePickerSheet title="Closing time" value={openTo} onSelect={setOpenTo} onClose={() => setPickerField(null)} />}
    </BottomSheet>
  )
}

function QRCodeModal({ onClose }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 200, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
      <div style={{ background: 'white', borderRadius: '20px 20px 0 0', padding: 20, width: '100%', maxWidth: 390 }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 4 }}>
          <button onClick={onClose} style={{ background: '#F5F4FA', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconClose size={16} /></button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 4 }}>{storeData.name} QR Code</div>
          <div style={{ fontSize: 13, color: '#6B6B70', marginBottom: 20 }}>Scan the QR code to open your booking page.</div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <svg width="180" height="180" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" fill="white"/>
              <rect x="10" y="10" width="56" height="56" fill="black"/><rect x="18" y="18" width="40" height="40" fill="white"/><rect x="26" y="26" width="24" height="24" fill="black"/>
              <rect x="134" y="10" width="56" height="56" fill="black"/><rect x="142" y="18" width="40" height="40" fill="white"/><rect x="150" y="26" width="24" height="24" fill="black"/>
              <rect x="10" y="134" width="56" height="56" fill="black"/><rect x="18" y="142" width="40" height="40" fill="white"/><rect x="26" y="150" width="24" height="24" fill="black"/>
              <rect x="74" y="74" width="8" height="8" fill="black"/><rect x="90" y="74" width="8" height="8" fill="black"/><rect x="106" y="74" width="8" height="8" fill="black"/><rect x="122" y="74" width="8" height="8" fill="black"/>
              <rect x="82" y="82" width="8" height="8" fill="black"/><rect x="98" y="82" width="8" height="8" fill="black"/><rect x="114" y="82" width="8" height="8" fill="black"/>
              <rect x="74" y="90" width="8" height="8" fill="black"/><rect x="90" y="90" width="8" height="8" fill="black"/><rect x="106" y="90" width="8" height="8" fill="black"/>
              <rect x="82" y="98" width="8" height="8" fill="black"/><rect x="114" y="98" width="8" height="8" fill="black"/>
              <rect x="74" y="106" width="8" height="8" fill="black"/><rect x="98" y="106" width="8" height="8" fill="black"/><rect x="122" y="106" width="8" height="8" fill="black"/>
              <rect x="90" y="114" width="8" height="8" fill="black"/><rect x="106" y="114" width="8" height="8" fill="black"/>
              <rect x="74" y="122" width="8" height="8" fill="black"/><rect x="82" y="122" width="8" height="8" fill="black"/><rect x="114" y="122" width="8" height="8" fill="black"/>
            </svg>
          </div>
          <div className="info-box" style={{ display: 'flex', gap: 8, textAlign: 'left', marginBottom: 16 }}>
            <IconInfo size={16} />
            <span>If your signage QR code isn't working, show this QR code to your customers so they can scan and make a booking.</span>
          </div>
          <button className="btn-orange" onClick={onClose}>OK</button>
        </div>
      </div>
    </div>
  )
}

function OverviewTab({ onShowQR }) {
  const navigate = useNavigate()
  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <span className="exclusive-badge">EXCLUSIVE</span>
        <button onClick={onShowQR} className="link-text">Store QR code</button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        {[{ value: '0.0', label: 'Store rating' }, { value: 'Cafe', label: 'Store type' }, { value: '20', label: 'Bag capacity' }].map((item, i) => (
          <div key={item.label} style={{ flex: 1, textAlign: 'center', borderLeft: i > 0 ? '1px solid #E8E6F0' : 'none' }}>
            <div style={{ fontSize: 18, fontWeight: 800 }}>{item.value}</div>
            <div style={{ fontSize: 11.5, color: '#6B6B70', marginTop: 2 }}>{item.label}</div>
          </div>
        ))}
      </div>
      <div style={{ background: '#F1EEFC', borderRadius: 16, padding: 16, marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 700 }}>Store commissions</div>
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#6B6B70', textTransform: 'uppercase', marginBottom: 8 }}>Online Bookings</div>
        {['£1.50 per small bag stored', '£2.50 per regular bag stored', '£3.75 per odd-sized item stored'].map(row => (
          <div key={row} style={{ display: 'flex', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #E4DFFA' }}>
            <span style={{ fontSize: 14 }}>{row}</span>
          </div>
        ))}
        <div style={{ fontSize: 12, fontWeight: 700, color: '#6B6B70', textTransform: 'uppercase', margin: '12px 0 8px' }}>Walk-in Bookings</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
          <span style={{ fontSize: 14 }}>Walk-in booking</span>
          <span style={{ fontSize: 14, fontWeight: 600 }}>85% of booking value</span>
        </div>
        <div style={{ fontSize: 12, color: '#9E9CA8', marginTop: 6 }}>(excl. service fee)</div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div className="section-header" style={{ margin: 0, fontSize: 15 }}>Contact info</div>
          <button className="link-text">Edit details</button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <IconPhone size={17} />
          <span style={{ fontSize: 15 }}>{storeData.phone}</span>
        </div>
      </div>
      <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Location photos</div>
      <div className="info-box" style={{ marginBottom: 16 }}>
        Partners with storefront photos are preferred by customers and receive higher reviews on average. Add yours to help increase bookings.
        <button onClick={() => navigate('/store/photos/tutorial')} className="link-text" style={{ display: 'block', marginTop: 8 }}>Review photo guidelines</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
        {[1, 2].map(i => (
          <div key={i} style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', aspectRatio: '4/3', background: '#F0EBE3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 11, color: '#9B8F7A' }}>{storeData.name}</span>
            <div style={{ position: 'absolute', top: 6, left: 6, width: 22, height: 22, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13L10 18L19 7" stroke="#1E8E5A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div style={{ position: 'absolute', top: 6, right: 6, width: 22, height: 22, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18M6 18L18 6" stroke="#C4432B" strokeWidth="2.5" strokeLinecap="round"/></svg>
            </div>
          </div>
        ))}
      </div>
      <div style={{ border: '1px solid #E8E6F0', borderRadius: 14, padding: '20px', textAlign: 'center', cursor: 'pointer' }}>
        <IconCamera size={22} />
        <div style={{ fontSize: 14, color: '#6B6B70', marginTop: 8 }}>Click to upload a photo</div>
      </div>
    </div>
  )
}

function HoursTab() {
  const [days, setDays] = useState(DEFAULT_DAYS)
  const [exceptions, setExceptions] = useState([])
  const [showEditHours, setShowEditHours] = useState(false)
  const [showAddException, setShowAddException] = useState(false)

  const displayDays = [
    { day: 'Monday', hours: days[0].closed ? null : (days[0].open24h ? 'Open 24h' : `${days[0].open} – ${days[0].close}`) },
    { day: 'Tuesday', hours: days[1].closed ? null : (days[1].open24h ? 'Open 24h' : `${days[1].open} – ${days[1].close}`) },
    { day: 'Wednesday', hours: days[2].closed ? null : (days[2].open24h ? 'Open 24h' : `${days[2].open} – ${days[2].close}`) },
    { day: 'Thursday', hours: days[3].closed ? null : (days[3].open24h ? 'Open 24h' : `${days[3].open} – ${days[3].close}`) },
    { day: 'Friday', hours: days[4].closed ? null : (days[4].open24h ? 'Open 24h' : `${days[4].open} – ${days[4].close}`) },
    { day: 'Saturday', hours: days[5].closed ? null : (days[5].open24h ? 'Open 24h' : `${days[5].open} – ${days[5].close}`) },
    { day: 'Sunday', hours: days[6].closed ? null : (days[6].open24h ? 'Open 24h' : `${days[6].open} – ${days[6].close}`) },
  ]

  const fmtDate = (d) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

  return (
    <div style={{ padding: 16 }}>
      <div className="section-header" style={{ fontSize: 16 }}>Opening hours</div>
      <div style={{ fontSize: 13.5, color: '#6B6B70', marginBottom: 16, lineHeight: 1.4 }}>
        You can add <button className="link-text" style={{ fontSize: 13.5 }} onClick={() => setShowAddException(true)}>exceptions</button> for holidays or special closures.
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
        {displayDays.map(d => (
          <div key={d.day} style={{ border: '1px solid #E8E6F0', borderRadius: 14, padding: '12px 14px', opacity: d.hours ? 1 : 0.5 }}>
            <div style={{ fontSize: 13.5, fontWeight: 700, marginBottom: 4 }}>{d.day}</div>
            <div style={{ fontSize: 13, color: d.hours ? '#6B6B70' : '#C4432B' }}>{d.hours || 'Closed'}</div>
          </div>
        ))}
      </div>
      <button className="btn-orange-outline" style={{ width: '100%', marginBottom: 10 }} onClick={() => setShowEditHours(true)}>Edit opening hours</button>
      <button style={{ background: 'none', border: '1.5px solid #C4432B', color: '#C4432B', borderRadius: 999, padding: '12px 16px', fontSize: 14, fontWeight: 600, cursor: 'pointer', width: '100%', marginBottom: 24 }}>Close store for today</button>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div className="section-header" style={{ margin: 0, fontSize: 16 }}>Exceptions and holidays</div>
      </div>
      {exceptions.length === 0 ? (
        <div className="card" style={{ marginBottom: 12, textAlign: 'center', padding: '24px' }}>
          <div style={{ color: '#6B6B70', fontSize: 14 }}>No exceptions set</div>
        </div>
      ) : (
        <div style={{ marginBottom: 12 }}>
          {exceptions.map((ex, i) => (
            <div key={i} className="card" style={{ marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: 14.5, fontWeight: 700, marginBottom: 4 }}>{fmtDate(ex.fromDate)} – {fmtDate(ex.toDate)}</div>
                  <div style={{ fontSize: 13, color: ex.closeAllDay ? '#C4432B' : '#6B6B70' }}>
                    {ex.closeAllDay ? 'Closed: All day' : `Open ${ex.openFrom} - ${ex.openTo}`}
                  </div>
                  {ex.reason && <div style={{ fontSize: 12.5, color: '#9E9CA8', marginTop: 2 }}>{ex.reason}</div>}
                </div>
                <button className="link-text" style={{ fontSize: 13 }}>Edit</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <button className="btn-orange-outline" style={{ width: '100%' }} onClick={() => setShowAddException(true)}>+ Add exception</button>

      {showEditHours && (
        <EditHoursModal
          initialDays={days}
          onClose={() => setShowEditHours(false)}
          onSave={(newDays) => setDays(newDays)}
        />
      )}
      {showAddException && (
        <AddExceptionModal
          onClose={() => setShowAddException(false)}
          onAdd={(ex) => setExceptions(list => [...list, ex])}
        />
      )}
    </div>
  )
}

export default function Store() {
  const [tab, setTab] = useState('Overview')
  const [showQR, setShowQR] = useState(false)
  return (
    <Layout>
      <Header title={storeData.name} border />
      <div className="sub-tabs">
        {['Overview', 'Hours'].map(t => (
          <div key={t} className={`sub-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</div>
        ))}
      </div>
      {tab === 'Overview' && <OverviewTab onShowQR={() => setShowQR(true)} />}
      {tab === 'Hours' && <HoursTab />}
      {showQR && <QRCodeModal onClose={() => setShowQR(false)} />}
    </Layout>
  )
}
