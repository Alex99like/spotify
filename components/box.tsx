import { twMerge } from 'tailwind-merge'
import { PropsWithChildren } from "react"

interface BoxProps {
  className?: string
}

export const Box = ({ children, className }: PropsWithChildren<BoxProps>) => {
  return (
    <div
      className={twMerge(`
        bg-neutral-900
        rounded-lg
        h-fit
        w-full
        `,
        className
      )}
    >
      {children}
    </div>
  )
}