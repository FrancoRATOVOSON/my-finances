import { Text, Pressable } from 'react-native'
import React from 'react'
import NavIcon, { PathIcons } from './NavIcon'
import { RouteLabels } from '../../utils'

interface NavButtonProps {
  label: RouteLabels,
  isFocused: boolean
  onPress: () => void
  onLongPress: () => void
}

export default function NavButton({ label, isFocused, onPress, onLongPress }: NavButtonProps) {
  const color = isFocused ? '#000000' : '#333333'

  return (
    <Pressable
      style={{
        width: 56,
        height: 56,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 4
      }}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <NavIcon isFocused={isFocused} Icon={PathIcons[label]} />
      <Text
        style={{
          fontSize: 12,
          fontWeight: isFocused ? "500" : "400",
          color
        }}
      >
        {label}
      </Text>
    </Pressable>
  )
}
