import { Text, Pressable, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { SVGIcon } from '../../utils'
import { AddIcon } from '../../assets/vuesax/linear'

interface ButtonProps {
  style?: StyleProp<ViewStyle>,
  label?: string,
  Icon?: SVGIcon,
  level: 'Primary' | 'Secondary' | 'Tertiary' | 'Danger'
}

export default function Button({
  style, label='Button', Icon=AddIcon, level
}: ButtonProps) {
  const buttonColor = level === 'Primary' ? '#4169E1'
    : level === 'Secondary' ? '#FFFFFF'
    : level === 'Danger' ? '#E54322'
    : undefined
  const contentColor = level === 'Primary' || level === 'Danger' ? '#FFFFFF' : '#333333'

  return (
    <Pressable
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          columnGap: 8,
          backgroundColor: buttonColor,
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 8,
          shadowColor: '#333333',
          shadowRadius: 2,
          shadowOpacity: 0.4,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          elevation: 4,
        },
        style
      ]}
    >
      {Icon && <Icon width={24} height={24} fill={contentColor}/>}
      {
        label &&
        <Text
          style={{
            color: contentColor,
            fontSize: 16,
            fontWeight: '400'
          }}
        >
          {label}
        </Text>
      }
    </Pressable>
  )
}
