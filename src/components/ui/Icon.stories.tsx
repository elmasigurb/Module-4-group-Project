import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Icon from './Icon';
import { iconNames } from './iconNames';

const meta = {
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'select', options: iconNames },
    size: { control: { type: 'range', min: 12, max: 48, step: 2 } },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

/** All icons at once. Icons use `currentColor`, so they take the text color of their parent. */
export const AllIcons: Story = {
  args: { name: 'home', size: 24 },
  render: ({ size }) => (
    <ul className="grid-3" aria-label="Öll tákn">
      {iconNames.map((name) => (
        <li key={name} className="stack" style={{ alignItems: 'center', listStyle: 'none' }}>
          <Icon name={name} size={size} />
          <span className="mono link-muted">{name}</span>
        </li>
      ))}
    </ul>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('listitem')).toHaveLength(iconNames.length);
  },
};

/** A single icon. Change the name and size under Controls. */
export const Single: Story = {
  args: { name: 'receipt', size: 24 },
};
