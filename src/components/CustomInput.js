import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const CustomInput = ({ style, ...other }) => {
  return (
    <TextInput
      {...other}
      style={{ ...styles.input, ...style }}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    marginVertical: 12,
    borderColor: 'grey',
    fontFamily: 'muli',
    borderWidth: 1,
    minWidth: '80%',
    padding: 8
  }
})

export default CustomInput