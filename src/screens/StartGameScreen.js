import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import Card from '../components/Card'
import Theme from '../../constants/theme'
import CustomButton from '../components/CustomButton'
import theme from '../../constants/theme'

const StartGameScreen = ({ }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <CustomButton title="Cancel" color={"#ff0e54"} onPress={() => console.log('opa')} />
          <CustomButton title="Confirm" color={"#59EE32"} onPress={() => console.log('opa')} />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    marginVertical: 32
  },
  firstBtn: {
    marginRight: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '90%',
    alignItems: 'center',
  },
  button: {
    width: 100,

  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly'
  }
})

export default StartGameScreen