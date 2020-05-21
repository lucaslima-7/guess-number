import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card = ({ children, style }) => {
  return (
    <View style={{ ...styles.card, ...style }}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000000',
    shadowOpacity: 0.22,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2.22,
    backgroundColor: '#FFFFFF',
    elevation: 3,
    padding: 20,
    borderRadius: 6
  },
})

export default Card