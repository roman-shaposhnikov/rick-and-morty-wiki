import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

const meta = {
  title: 'Features/Share-in-telegram/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const IconOnly: Story = {
  args: {
    url: 'https://core.telegram.org/widgets/share',
  },
}

export const IconWithText: Story = {
  args: {
    url: 'https://core.telegram.org/widgets/share',
    text: 'Share',
  },
}
