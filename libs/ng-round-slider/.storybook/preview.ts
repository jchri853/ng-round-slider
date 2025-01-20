import { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    options: { showPanel: true },
  },

  tags: ['autodocs']
};

export default preview;
