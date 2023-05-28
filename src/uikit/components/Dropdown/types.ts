import React from 'react'

export type Position = 'top' | 'top-right' | 'bottom'

export interface PositionProps {
  position?: Position
  children: React.ReactNode
}

export interface DropdownProps extends PositionProps {
  target: React.ReactElement
}
