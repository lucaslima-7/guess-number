import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Theme from '../../constants/theme'

const Header = ({ title = 'Default' }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Theme.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: "700"
  }
})

export default Header