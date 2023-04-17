import { View, ScrollView, ViewProps, FlatListProps, FlatList } from 'react-native'
import React, { useId } from 'react'

interface CarouselProps<T> extends Omit<ViewProps, 'children'> {
  data: T[],
  RenderItem: React.FC<{ item: T}>
}

export default function Carousel<T>({data, RenderItem, ...props}: CarouselProps<T>) {
  return (
    <View {...props}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: 'row',
            columnGap: 8,
            // width: '100%'
          }}
        >
          {data.map(item => <RenderItem key={useId()} item={item} />)}
        </View>
      </ScrollView>
    </View>
  )
}
