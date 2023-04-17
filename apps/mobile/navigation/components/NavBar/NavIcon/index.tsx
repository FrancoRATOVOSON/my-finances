import React from 'react'
import { NavIconType } from './utils'

interface NavIconProps {
  isFocused: boolean,
  Icon: NavIconType
}

export default function NavIcon({isFocused, Icon}: NavIconProps) {
  return (
    isFocused ? <Icon.Active width={24} height={24} fill={"#000000"}/>
    : <Icon.Inactive width={24} height={24} fill={"#333333"}/>
  )
}

export * from './utils'
