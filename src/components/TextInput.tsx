import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react'

export interface TextInputRootProps{
  children: ReactNode
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 py-4 px-3 rounded bg-indigo-900 focus-within:ring-sage-100 focus-within:ring-2">
      {props.children}
    </div>
  )
}

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <div className='w-6 h-6 text-sage-200'>
      {props.children}
    </div>
  )
}

TextInputIcon.displayName = 'TextInputIcon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps){
  return (
    <input {...props} className="bg-transparent flex-1 text-sage-100 text-xs placeholder:text-sage-200 outline-none" />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}