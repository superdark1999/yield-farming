import React from 'react'

export interface TabMenuProps {
  activeIndex?: number
  onItemClick?: (index: number) => void
  children: React.ReactElement[]
}
export interface TabProps {
  isActive?: boolean
  onClick?: () => void
  children: React.ReactNode
}
