import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    // Docs pages (Introduction, Design Tokens)
    '../src/stories/*.mdx',
    // Stories live next to their components. The prefix groups them in the sidebar.
    { directory: '../src/components/ui', files: '*.stories.tsx', titlePrefix: 'UI' },
    { directory: '../src/components/layout', files: '*.stories.tsx', titlePrefix: 'Layout' },
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-mcp',
  ],
  framework: '@storybook/react-vite',
};

export default config;
