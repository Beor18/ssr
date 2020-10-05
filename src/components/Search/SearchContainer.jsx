import React from 'react'
import './Search.styl'

export default function SearchContainer({ children, ref }) {

  return (
    <div className="search" ref={ref}>
      {children}
    </div>
  )
}
