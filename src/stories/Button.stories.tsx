/*
 * @Description:
 * @Author: Ran junlin
 * @Date: 2023-05-08 16:34:45
 * @LastEditTime: 2023-05-09 14:45:23
 * @LastEditors: Ran junlin
 */
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { ButtonType } from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Button',
  component: Button,
  // tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: { actions: { handleOnChange: '^on.*' } },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    btnType: ButtonType.Primary,
    children: 'Primary',
  },
};

export const Default = {
  args: {
    btnType: ButtonType.Default,
    children: 'Default',
  },
};

export const Danger = {
  args: {
    btnType: ButtonType.Danger,
    children: 'Danger',
  },
};

export const Link = {
  args: {
    btnType: ButtonType.Link,
    children: 'Link',
    target: '_blank',
  },
  render: () => (
    <Button
      onClick={() => {
        console.log('111');
      }}
    >
      link
    </Button>
  ),
};

const ButtonWithHooks = () => {
  // Sets the hooks for both the label and primary props
  let [value, setValue] = useState(0);
  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    setValue(value++);
  };
  useEffect(()=>{
    handleOnChange()
  })
  return <Button onClick={handleOnChange}>{value}</Button>;
};

export const Primary2 = {
  render: () => <ButtonWithHooks />,
};
