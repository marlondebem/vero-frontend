import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'inline-flex items-center justify-center font-medium rounded-[10px] transition-colors',
  variants: {
    color: {
      primary: 'bg-spaceblack hover:bg-opacity-90 text-white'
    },
    size: {
      default: 'px-4 py-2 text-sm'
    }
  },
  defaultVariants: {
    color: 'primary',
    size: 'default'
  }
})

type ButtonProps = ComponentProps<'button'> & 
  VariantProps<typeof button> & {
    children: React.ReactNode
  }

export function Button({ children, size, className, ...props }: ButtonProps) {
  return (
    <button className={button({ size, className })} {...props}>
      {children}
    </button>
  )
}