import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { receipts } from '../../data/mockData';
import ReceiptCard from './ReceiptCard';

const meta = {
  component: ReceiptCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ReceiptCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { receipt: receipts[0] },
  play: async ({ canvas }) => {
    const card = canvas.getByRole('link');
    await expect(card).toHaveAttribute('href', '/receipts/1');
    // Amount and date are shown in Icelandic format
    await expect(card).toHaveTextContent('34.490 kr.');
    await expect(card).toHaveTextContent('11.08.2026');
  },
};

/** A long product name is cut off with an ellipsis instead of breaking the layout. */
export const LongProductName: Story = {
  args: {
    receipt: {
      ...receipts[1],
      product: 'Standlampi með dimmer og þráðlausri hleðslustöð fyrir síma',
    },
  },
  globals: { viewport: { value: 'kvittMobile' } },
};
