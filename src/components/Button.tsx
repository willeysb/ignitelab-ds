import { Slot } from '@radix-ui/react-slot';

import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode,
  asChild?: boolean
}

export function Button({ children, asChild }: ButtonProps){
  const Comp = asChild ? Slot : 'button' 
  return (
    <Comp className={clsx(
      "py-4 px-3 rounded bg-indigo-500 font-semibold text-sage-100 hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-sage-100"
    )}
    >
      {children}
    </Comp>
  )
}