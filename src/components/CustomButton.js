import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

const CustomButton = ({ onPress, title, color, width = 'auto', icon = null }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: color,
          width: width,
          ...styles.oultlinedBG
        }}
        onPress={onPress}
      >
        <Text style={{ ...styles.customBtnText }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  customBtnText: {
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'muli-bold',
    color: "#fff",
    textTransform: "capitalize"
  },
  oultlinedBG: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 6
  }
})

export default CustomButton