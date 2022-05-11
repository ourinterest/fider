import React from "react"
import { useFider } from "@fider/hooks"
import { classSet } from "@fider/services"

import "./PoweredByFider.scss"

interface PoweredByFiderProps {
  slot: string
  className?: string
}

export const PoweredByFider = (props: PoweredByFiderProps) => {

  const className = classSet({
    "c-powered": true,
    [props.className || ""]: props.className,
  })

  return (
    <div className={className}>
      <a rel="noopener" href={`https://hypoteket.com/`} target="_blank">
        Hypoteket.com
      </a>
    </div>
  )
}
