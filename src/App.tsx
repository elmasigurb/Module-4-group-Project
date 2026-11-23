import { Route, Routes } from 'react-router';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import ScanReceipt from './pages/ScanReceipt';
import ReviewReceipt from './pages/ReviewReceipt';
import Receipts from './pages/Receipts';
import ReceiptDetail from './pages/ReceiptDetail';
import ReceiptPaperView from './pages/ReceiptPaperView';
import CategoryDetail from './pages/CategoryDetail';
import Reminders from './pages/Reminders';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Routes>
      {/* Screens with header and navigation */}
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="scan" element={<ScanReceipt />} />
        <Route path="scan/review" element={<ReviewReceipt />} />
        <Route path="receipts" element={<Receipts />} />
        <Route path="receipts/:id" element={<ReceiptDetail />} />
        <Route path="categories/:id" element={<CategoryDetail />} />
        <Route path="reminders" element={<Reminders />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Full screen, no navigation */}
      <Route path="receipts/:id/paper" element={<ReceiptPaperView />} />
    </Routes>
  );
}
