import React from 'react'

export interface ThemedProps {
  theme: any
}

export type Status = 'past' | 'current' | 'future'

export interface StatusProps extends ThemedProps {
  theme: any
  status: Status
}

export interface StepProps {
  index: number
  status: Status
  numberOfSteps?: number
  children: React.ReactNode
}
