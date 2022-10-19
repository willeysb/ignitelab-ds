import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from './TextInput'

export default {
  title: 'Component/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon> <Envelope size={24}/> </TextInput.Icon>,
      <TextInput.Input placeholder="Type your email"/>
    ]
  },
  argTypes: {
    children: {
      table:{
        disable: true
      }
    }
  }
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {}