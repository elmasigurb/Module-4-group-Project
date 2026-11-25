import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { categories } from '../../data/mockData';
import CategoryTile from './CategoryTile';
import { iconNames, type IconName } from './iconNames';

const meta = {
  component: CategoryTile,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: iconNames },
  },
} satisfies Meta<typeof CategoryTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { to: `/categories/${categories[0].id}`, label: categories[0].name },
  play: async ({ args, canvas }) => {
    await expect(canvas.getByRole('link', { name: args.label })).toHaveAttribute('href', args.to);
  },
};

const iconsForCategories: IconName[] = ['folder', 'home', 'receipt'];

/** All mock categories in the same 3-column grid as on the home screen, each with its own icon. */
export const WithIcons: Story = {
  args: Default.args,
  render: () => (
    <div className="grid-3">
      {categories.map((category, i) => (
        <CategoryTile
          key={category.id}
          to={`/categories/${category.id}`}
          label={category.name}
          icon={iconsForCategories[i % iconsForCategories.length]}
        />
      ))}
    </div>
  ),
};
