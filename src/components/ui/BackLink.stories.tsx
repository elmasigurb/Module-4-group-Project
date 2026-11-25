import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { receipts } from '../../data/mockData';
import BackLink from './BackLink';

const meta = {
  component: BackLink,
  tags: ['autodocs'],
} satisfies Meta<typeof BackLink>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Screen title with a back arrow, used at the top of sub-screens. */
export const Default: Story = {
  args: { to: '/receipts', title: 'Skoða kvittun' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: 'Skoða kvittun' })).toBeVisible();
    await expect(canvas.getByRole('link')).toHaveAttribute('href', '/receipts');
  },
};

export const WithProductName: Story = {
  args: { to: '/receipts', title: receipts[0].product },
};
