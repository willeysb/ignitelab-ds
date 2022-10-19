import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox(props: CheckboxProps){
  return (
    <CheckboxPrimitive.Root 
      {...props}
      className="w-6 h-6 p-[2px] bg-indigo-900 rounded"
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight='bold' className='w-5 h-5 text-sage-200'/>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}