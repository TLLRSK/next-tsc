'use client'
// This component will be rendered everytime the app is trying to fetch tours data
import React from 'react'

function loading() {
  return (
    <span className='text-xl capitalize'>Loading...</span>
  )
}

export default loading