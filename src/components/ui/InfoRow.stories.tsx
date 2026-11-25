import type { Meta, StoryObj } from '@storybook/react-vite';
import { categories, receipts } from '../../data/mockData';
import { formatDate, formatISK } from '../../lib/format';
import InfoRow from './InfoRow';

const receipt = receipts[0];

const meta = {
  component: InfoRow,
  tags: ['autodocs'],
  // InfoRow is always used inside an info card in the app
  decorators: [
    (Story) => (
      <div className="info-card">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InfoRow>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default: numbers and dates use the monospace font. */
export const Mono: Story = {
  args: { label: 'Kaupdagur', value: formatDate(receipt.purchaseDate), mono: true },
};

/** `mono={false}` for normal text such as a category name. */
export const PlainText: Story = {
  args: { label: 'Flokkur', value: categories[0].name, mono: false },
};

/** Several rows together, as on the receipt detail screen. */
export const InCard: Story = {
  args: Mono.args,
  render: () => (
    <>
      <InfoRow label="Verslun" value={receipt.store} mono={false} />
      <InfoRow label="Kaupdagur" value={formatDate(receipt.purchaseDate)} />
      <InfoRow label="Upphæð" value={formatISK(receipt.amount)} />
      <InfoRow label="Ábyrgð til" value={formatDate(receipt.warrantyUntil)} />
    </>
  ),
};
