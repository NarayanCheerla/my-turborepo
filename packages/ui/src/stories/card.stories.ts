import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from "../card";

const meta = {
    title: 'Card',
    component: Card
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      children: "Primary Card"
    },
  };