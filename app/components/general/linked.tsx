
import React from 'react'
import { Link } from 'react-router'

type linkProps = {
    to: string 
    onClick?: () => void 
    children: React.ReactNode 
    className?: string
}

export default function Linked({to, className, onClick, children}: linkProps) {
  return (
    <Link to={`${to}`} prefetch="viewport" className={`outline-none ${className}`} onClick={onClick}>{children}</Link>
  )
}
