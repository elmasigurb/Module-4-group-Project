import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import Button from './Button';

const meta = {
  component: Button,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Skanna kvittun' },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Skanna kvittun' }));
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Hætta við' },
};

export const Disabled: Story = {
  args: { children: 'Vista kvittun', disabled: true },
  play: async ({ args, canvas, userEvent }) => {
    const button = canvas.getByRole('button', { name: 'Vista kvittun' });
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

/** With `to`, the button renders as a React Router `<Link>` but keeps the button styling. */
export const AsLink: Story = {
  args: { to: '/receipts', children: 'Skoða allar kvittanir' },
  play: async ({ canvas }) => {
    const link = canvas.getByRole('link', { name: 'Skoða allar kvittanir' });
    await expect(link).toHaveAttribute('href', '/receipts');
  },
};

/**
 * Checks that the global CSS (tokens.css + components.css) is loaded in Storybook.
 * `.btn--primary` uses `--color-primary` (#8b6a3e). Update this value if the token changes.
 */
export const CssCheck: Story = {
  args: { children: 'Litapróf' },
  tags: ['!autodocs'],
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Litapróf' });
    await expect(getComputedStyle(button).backgroundColor).toBe('rgb(139, 106, 62)');
  },
};
