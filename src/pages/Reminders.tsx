import { findReceipt, reminders } from '../data/mockData';
import { ReminderCard } from '../components/ui';

/** "Áminningar": upcoming return-deadline and warranty reminders */
export default function Reminders() {
  const sorted = [...reminders].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="page">
      <h1 className="page-title">Áminningar</h1>
      <h2 className="section-title">Næstu áminningar</h2>

      <div className="receipt-list">
        {sorted.map((reminder) => {
          const receipt = findReceipt(reminder.receiptId);
          if (!receipt) return null;
          return <ReminderCard key={reminder.id} reminder={reminder} receipt={receipt} />;
        })}
      </div>
    </div>
  );
}
