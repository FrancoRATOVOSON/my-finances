import { View, Text, ViewProps, ViewStyle, StyleSheet } from 'react-native'
import React from 'react'

interface BudgetCardProps extends Omit<ViewProps, 'style'> {
  label?: string,
  expenses?: string,
  limit?: string,
  color?: string,
  style?: ViewStyle
}

export default function BudgetCard({
  label='Budget Label',
  expenses='Ar 000 000 000',
  limit='Ar 000 000 000',
  color='#2A4AA6',
  style,
  ...viewProps
}: BudgetCardProps) {
  return (
    <View
      style={[
        {
          height: 176,
          paddingHorizontal: 40,
          paddingVertical: 40,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          rowGap: 24,
          backgroundColor: color,
          borderRadius: 24 
        },
        style
      ]}

      {...viewProps}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: '500',
          color: '#FFFFFF'
        }}
      >
        {label}
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: 0
        }}
      >
        <Text
          style={[
            styles.text,
            {
              marginBottom: 4,
              textAlign: 'right',
              color: '#FFFFFF'
            }
          ]}
        >{expenses}</Text>
        <Text
          style={[
            {
              marginHorizontal: 2,
              color: '#FFFFFF',
              fontSize: 24,
              fontWeight: '400'
            }
          ]}
        >/</Text>
        <Text
          style={[
            styles.text,
            {
              marginTop: 8,
              textAlign: 'left',
              color: '#FFFFFF'
            }
          ]}
        >{limit}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '300'
  }
})
