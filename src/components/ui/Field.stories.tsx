import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { receipts } from '../../data/mockData';
import Field from './Field';

const receipt = receipts[0];

const meta = {
  component: Field,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'date', 'number', 'email'] },
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: { label: 'Verslun', type: 'text', defaultValue: receipt.store },
  play: async ({ canvas }) => {
    // The label is connected to the input, so screen readers announce it
    await expect(canvas.getByLabelText('Verslun')).toHaveValue(receipt.store);
  },
};

export const Date: Story = {
  args: { label: 'Kaupdagur', type: 'date', defaultValue: receipt.purchaseDate },
};

export const Number: Story = {
  args: {
    label: 'Upphæð (kr.)',
    type: 'number',
    inputMode: 'numeric',
    defaultValue: receipt.amount,
  },
};

export const WithPlaceholder: Story = {
  args: { label: 'Netfang', type: 'email', placeholder: 'nafn@netfang.is' },
};
