import React from "react";
import { ReactNode } from "react"
import "./styles.css";

type CardProps = {
    children: ReactNode
}

export const Card = ({children}: CardProps):JSX.Element => {
    return (
        <div className="ui-flex ui-justify-center ui-w-1/2 ui-bg-slate-200 border rounded-md p-1 w-full ui-my-1 hover:ui-border-neutral-700 hover:ui-bg-neutral-800/30">
            {children}
        </div>
    )
}
