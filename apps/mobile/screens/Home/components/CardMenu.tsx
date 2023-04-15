import { View, Text, Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { SVGIcon } from '../../../utils'
import { BudgetsInactive } from '../../../assets/navIcons'

interface CardMenuProps extends Omit<PressableProps, 'style'> {
  title?: string,
  value?: string,
  Icon?: SVGIcon,
  style?: StyleProp<ViewStyle>
}

export default function CardMenu({
  title='Card title',
  value='00', 
  Icon=BudgetsInactive,
  style,
  ...pressableProps
}: CardMenuProps) {
  return (
    <Pressable
      style={[style,{
        width: '45%',
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        gap: 24,
        shadowColor: '#333333',
        shadowRadius: 2,
        shadowOpacity: 0.4,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        elevation: 4,
      }]}
      {...pressableProps}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          gap: 8
        }}
      >
        <View
          style={{
            width: 24,
            height: 24,
            borderWidth: 1,
            borderColor: '#333333',
            borderRadius: 24,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Icon width={16} height={16} fill="#333333" />
        </View>
        <Text style={{fontSize: 16}} >{title}</Text>
      </View>
      <Text style={{ fontSize: 16, fontWeight: '300' }} >{value}</Text>
    </Pressable>
  )
}
