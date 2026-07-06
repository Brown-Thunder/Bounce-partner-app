import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Notifications from './screens/Notifications'
import Bookings from './screens/Bookings'
import BookingDetail from './screens/BookingDetail'
import CheckInOut from './screens/CheckInOut'
import Store from './screens/Store'
import Signage from './screens/Signage'
import PhotoTutorial from './screens/PhotoTutorial'
import Boosts from './screens/Boosts'
import BoostDetail from './screens/BoostDetail'
import Account from './screens/Account'
import Reviews from './screens/Reviews'
import Earnings from './screens/Earnings'
import AccountNotifications from './screens/AccountNotifications'
import Affiliates from './screens/Affiliates'
import WhatsNew from './screens/WhatsNew'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/bookings/:id" element={<BookingDetail />} />
      <Route path="/check-in-out" element={<CheckInOut />} />
      <Route path="/store" element={<Store />} />
      <Route path="/store/signage" element={<Signage />} />
      <Route path="/store/photos/tutorial" element={<PhotoTutorial />} />
      <Route path="/boosts" element={<Boosts />} />
      <Route path="/boosts/:id" element={<BoostDetail />} />
      <Route path="/account" element={<Account />} />
      <Route path="/account/reviews" element={<Reviews />} />
      <Route path="/account/earnings" element={<Earnings />} />
      <Route path="/account/notifications" element={<AccountNotifications />} />
      <Route path="/account/affiliates" element={<Affiliates />} />
      <Route path="/account/whats-new" element={<WhatsNew />} />
    </Routes>
  )
}
