'use client'
// This component will be rendered everytime the app is trying to fetch tours data
import React from 'react'

function error({error}:{error:Error}) {
  return (
    <div>There was an error...</div>
  )
}

export default error;