import React from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import Theme from '../../constants/theme'

const Header = ({ title = 'Default' }) => {
  return (
    <View style={{
      ...styles.header, ...Platform.select({
        ios: styles.headerIOS, android: styles.headerAndroid
      })
    }}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerAndroid: {
    backgroundColor: Theme.primary
  },
  headerIOS: {
    backgroundColor: Theme.secondary,
    borderBottomColor: "#000000",
    borderBottomWidth: 1
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'muli-bold'
  }
})

export default Header