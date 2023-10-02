import { twMerge } from 'tailwind-merge'
import { LogOut } from 'lucide-react'

import { Button } from '../Button'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/diego3g.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Diego Fernandes
        </span>

        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          diego@rocketseat.com.br
        </span>
      </div>

      <Button type="button" variant="ghost">
        <LogOut
          className={twMerge(
            'h-5 w-5 text-zinc-500 group-hover:text-violet-700',
            'dark:group-hover:text-violet-300',
          )}
        />
      </Button>
    </div>
  )
}
