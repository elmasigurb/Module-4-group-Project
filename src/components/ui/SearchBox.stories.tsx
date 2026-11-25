import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import { receipts } from '../../data/mockData';
import SearchBox from './SearchBox';

const meta = {
  component: SearchBox,
  tags: ['autodocs'],
  args: {
    value: '',
    placeholder: 'Leita í kvittunum',
    onChange: fn(),
  },
  // SearchBox is controlled, so the story keeps the value in local state
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    return (
      <SearchBox
        {...args}
        value={value}
        onChange={(next) => {
          setValue(next);
          args.onChange(next);
        }}
      />
    );
  },
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  play: async ({ args, canvas, userEvent }) => {
    const input = canvas.getByRole('searchbox', { name: 'Leita í kvittunum' });
    await userEvent.type(input, 'Lampi');
    await expect(input).toHaveValue('Lampi');
    await expect(args.onChange).toHaveBeenLastCalledWith('Lampi');
  },
};

export const WithText: Story = {
  args: { value: receipts[0].product },
};
