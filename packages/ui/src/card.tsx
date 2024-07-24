import { ReactNode } from "react"

type CardProps = {
    children: ReactNode
}

export const Card = ({children}: CardProps) => {
    return (
        <div className="border bg-slate-300 rounded-md p-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 cursor-pointer hover:ui-border-neutral-700 hover:ui-bg-neutral-800/30">
            {children}
        </div>
    )
}
