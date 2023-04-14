import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import NavButton from './NavButton'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { RouteLabels } from '../../utils'

export default function NavBar({state, navigation}:BottomTabBarProps) {
  const inset = useSafeAreaInsets()

  return (
    <View
      style={{
        marginBottom: inset.bottom,
        paddingVertical: 8,
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
      }}
    >
      {
        state.routes.map((route, index) => {
          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true
            })

            if (!isFocused && !event.defaultPrevented)
              navigation.navigate(route.name)
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          return (
            <NavButton
              key={route.key}
              label={route.name as RouteLabels}
              isFocused={isFocused}
              onPress={onPress}
              onLongPress={onLongPress}
            />
          )
        })
      }
    </View>
  )
}
