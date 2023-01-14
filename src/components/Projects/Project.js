import React from 'react'

export default function Project({title,description,language,link,github}) {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{language}</div>
      <div>{link}</div>
      <div>{github}</div>
      
      
    </div>
  )
}
