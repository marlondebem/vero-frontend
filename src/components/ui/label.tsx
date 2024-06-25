import { ComponentProps } from "react"
import { VariantProps, tv } from 'tailwind-variants'

const label = tv({
  base: 'font-medium text-gray-500',
  variants: {
    size: {
      default: 'text-sm'
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

type LabelProps = ComponentProps<'label'> &
VariantProps<typeof label> & {
  children: React.ReactNode
}

export function Label({ children, size, className, ...props }: LabelProps) {
  return (
    <label 
      className={label({ size, className })}
      {...props}
    >
      {children}
    </label>
  )
}