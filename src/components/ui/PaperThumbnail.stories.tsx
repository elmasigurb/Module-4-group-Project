import type { Meta, StoryObj } from '@storybook/react-vite';
import { receipts } from '../../data/mockData';
import PaperThumbnail from './PaperThumbnail';

const meta = {
  component: PaperThumbnail,
  tags: ['autodocs'],
} satisfies Meta<typeof PaperThumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Next to an action, as on the "Yfirfara og vista" screen. */
export const InThumbRow: Story = {
  render: () => (
    <div className="thumb-row">
      <PaperThumbnail />
      <span>
        {receipts[0].product} · {receipts[0].store}
      </span>
    </div>
  ),
};
