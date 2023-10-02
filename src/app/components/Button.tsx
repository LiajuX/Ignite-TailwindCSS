import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'px-4 py-2 rounded-lg outline-none text-sm font-semibold shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
  ],

  variants: {
    variant: {
      primary:
        'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600',
      ghost:
        'group rounded-md p-2 hover:bg-violet-50 dark:hover:bg-white/5 shadow-none text-zinc-500 hover:text-violet-700 dark:hover:text-violet-300',
      outline:
        'border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-400 hover:bg-zinc-800',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button className={button({ variant, className })} {...props} />
}
