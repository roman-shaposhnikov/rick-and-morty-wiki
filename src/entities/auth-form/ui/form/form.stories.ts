import type { Meta, StoryObj } from '@storybook/react'

import { authValidator } from '../../../data-validator'
import { AuthForm } from './form'

const meta = {
  title: 'Entities/AuthForm',
  component: AuthForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AuthForm>

export default meta
type Story = StoryObj<typeof meta>

export const SigninForm: Story = {
  args: {
    topInputLabel: 'username',
    bottomInputLabel: 'password',

    topInputType: 'text',
    bottomInputType: 'password',

    buttonText: 'Sign In',

    formValidator: authValidator.credentials,
  },
}

export const SignupForm: Story = {
  args: {
    topInputLabel: 'username',
    bottomInputLabel: 'password',

    topInputType: 'text',
    bottomInputType: 'text',

    buttonText: 'Sign Up',

    formValidator: authValidator.credentials,
  },
}
