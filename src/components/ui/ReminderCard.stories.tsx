import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { findReceipt, reminders } from '../../data/mockData';
import ReminderCard from './ReminderCard';

const returnReminder = reminders[0];
const warrantyReminder = reminders[1];

const meta = {
  component: ReminderCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ReminderCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Return deadline: "Lampi · IKEA" */
export const ReturnDeadline: Story = {
  args: { reminder: returnReminder, receipt: findReceipt(returnReminder.receiptId)! },
  play: async ({ canvas }) => {
    const card = canvas.getByRole('link');
    await expect(card).toHaveAttribute('href', '/receipts/2');
    await expect(card).toHaveTextContent('Skilafrestur');
    await expect(card).toHaveTextContent('18.11.2026');
  },
};

/** Warranty: "Borvél · BYKO" */
export const Warranty: Story = {
  args: { reminder: warrantyReminder, receipt: findReceipt(warrantyReminder.receiptId)! },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link')).toHaveTextContent('Ábyrgð til:');
  },
};
