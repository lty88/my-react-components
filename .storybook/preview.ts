/*
 * @Description:
 * @Author: Ran junlin
 * @Date: 2023-05-08 16:34:34
 * @LastEditTime: 2023-05-08 18:22:03
 * @LastEditors: Ran junlin
 */
/** @type { import('@storybook/react').Preview } */
import '../src/styles/index.scss';
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  cssresources: [
    {
      id: 'global',
      code: `
        <style>
          body {
            background-color: #f0f0f0;
          }
        </style>
      `,
      picked: true,
    },
    {
      id: 'button',
      code: `
        <style>
          .button {
            background-color: #0074D9;
            color: #FFFFFF;
            padding: 8px 16px;
            border-radius: 4px;
            font-size: 14px;
            cursor: pointer;
          }
        </style>
      `,
      picked: false
    }
  ]
};

export default preview;
