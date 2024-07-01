import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'inline-flex items-center justify-center font-medium rounded-[10px] transition-colors',
  variants: {
    color: {
      primary: 'bg-spaceblack hover:bg-opacity-80 text-white',
      ghost:
        'bg-transparent hover:bg-gray-100 text-gray-500 hover:text-spaceblack',
    },
    size: {
      default: 'px-4 py-2 text-sm',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'default',
  },
})

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    children: React.ReactNode
  }

export function Button({
  children,
  size,
  color,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ size, color, className })} {...props}>
      {children}
    </button>
  )
}
