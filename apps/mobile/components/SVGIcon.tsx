import { View, Text, ImageURISource } from 'react-native'
import React from 'react'
import { SvgUri } from 'react-native-svg'

interface SVGIconProps {
  size: number,
  icon: string,
  fill?: string
}

export default function SVGIcon({size, icon, fill}: SVGIconProps) {
  return (
    <SvgUri
      width={size}
      height={size}
      uri={icon}
      fill={fill}
    />
  )
}
