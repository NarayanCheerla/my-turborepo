import React from "react";
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "../button";
import "../styles.css";

const meta = {
    title: 'Button',
    component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      children: "Primary",
      disable: true,
      onClick: fn()
    },
  };