import clsx from 'clsx'
import type { FC, PropsWithChildren } from 'react'

export const TitleTag: FC<
  PropsWithChildren & {
    className?: string
  }
> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'inline-block text-xs text-white p-1 rounded-md bg-cyan-600 dark:bg-cyan-500',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const ProTag = () => {
  return (
    <TitleTag className="absolute translate-y-2 translate-x-2 z-[10]">
      <span title="此功能仅闭源版本提供">闭源版本</span>
    </TitleTag>
  )
}
