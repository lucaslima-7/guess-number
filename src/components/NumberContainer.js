import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    fontSize: 32,
    fontFamily: 'muli'
  }
})

export default NumberContainer