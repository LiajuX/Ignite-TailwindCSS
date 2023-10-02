import { twMerge } from 'tailwind-merge'

export function UsedSpaceWidget() {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5',
        'dark:bg-zinc-800',
      )}
    >
      <div className="space-y-1">
        <span
          className={twMerge(
            'text-sm/5 font-medium text-violet-700',
            'dark:text-zinc-100',
          )}
        >
          Used space
        </span>
        <p className="text-sm/5 text-violet-500 dark:text-zinc-400">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <progress
        className={twMerge(
          'h-2 w-full [&::-moz-progress-bar]:bg-violet-600 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-bar]:bg-violet-100 [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-violet-600',
          'dark:[&::-moz-progress-bar]:bg-violet-400 dark:[&::-webkit-progress-bar]:bg-zinc-600 dark:[&::-webkit-progress-value]:bg-violet-400',
        )}
        value={80}
        max={100}
      />

      <div className="space-x-3">
        <button
          type="button"
          className={twMerge(
            'text-sm font-medium text-violet-500 hover:text-violet-700',
            'dark:text-violet-300 dark:hover:text-violet-200',
          )}
        >
          Dismiss
        </button>
        <button
          type="button"
          className={twMerge(
            'text-sm font-medium text-violet-700 hover:text-violet-900',
            'dark:text-zinc-300 dark:hover:text-zinc-200',
          )}
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
