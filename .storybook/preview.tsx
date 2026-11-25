import type { Preview } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';

// Same global CSS as the app (see src/main.tsx)
import '../src/styles/tokens.css';
import '../src/styles/global.css';
import '../src/components/components.css';

const preview: Preview = {
  decorators: [
    // Many components use <Link>/<NavLink>, which need a router.
    // A story can choose the current URL with `parameters.router.initialEntries`,
    // e.g. to show which navigation item is active.
    (Story, { parameters }) => (
      <MemoryRouter initialEntries={parameters.router?.initialEntries ?? ['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    // Viewports that match the breakpoints in src/styles/tokens.css
    viewport: {
      options: {
        kvittMobile: { name: 'Kvitt mobile', styles: { width: '390px', height: '844px' } },
        kvittTablet: {
          name: 'Kvitt tablet (≥ 640px)',
          styles: { width: '768px', height: '1024px' },
        },
        kvittDesktop: {
          name: 'Kvitt desktop (≥ 900px)',
          styles: { width: '1280px', height: '800px' },
        },
      },
    },

    options: {
      storySort: {
        order: ['Kvitt', ['Introduction', 'Design Tokens'], 'UI', 'Layout'],
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
