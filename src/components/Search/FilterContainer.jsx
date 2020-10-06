import React from 'react'
import './Search.styl'

export default function SearchContainer({ children, ref }) {

  return (
    <div className="filterContainer" ref={ref}>
      {children}
    </div>
  )
}
