import React from 'react'
import './Search.styl'

export default function SearchContainer({ children, ref }) {

  return (
    <div className="filter_container" ref={ref}>
      {children}
    </div>
  )
}
