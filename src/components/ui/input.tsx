import { ComponentProps } from 'react'

type InputProps = ComponentProps<'input'> & {
  type: string
}

export function Input({ type, className, ...props }: InputProps) {
  return (
    <input
      type={type}
      className='flex h-9 w-full rounded-lg border shadow-sm bg-transparent px-3 py-1 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
      {...props}
    />
  )
}
