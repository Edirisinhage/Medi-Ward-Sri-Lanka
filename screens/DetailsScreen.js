import { View, Text } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'

export default function DetailsScreen() {
  return (
    <View className="flex-1" style={{backgroundColor: themeColors.bg}}>
      <Text>DetailsScreen</Text>
    </View>
  )
}