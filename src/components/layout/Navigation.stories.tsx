import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Navigation from './Navigation';

/**
 * The navigation changes layout with screen width (see components.css):
 * a bottom bar on mobile and a sidebar on desktop (≥ 900px).
 * Use the viewport menu in the toolbar to switch between them.
 */
const meta = {
  component: Navigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Bottom bar. The scan button only shows an icon, but keeps its label for screen readers. */
export const Mobile: Story = {
  globals: { viewport: { value: 'kvittMobile' } },
  parameters: { router: { initialEntries: ['/'] } },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'Heim' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    await expect(canvas.getByRole('link', { name: 'Skanna kvittun' })).toBeInTheDocument();
  },
};

/** Sidebar with logo and labels. Here "Kvittanir" is the active page. */
export const Desktop: Story = {
  globals: { viewport: { value: 'kvittDesktop' } },
  parameters: { router: { initialEntries: ['/receipts'] } },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'Kvittanir' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    await expect(canvas.getByRole('link', { name: 'Heim' })).not.toHaveAttribute('aria-current');
  },
};
