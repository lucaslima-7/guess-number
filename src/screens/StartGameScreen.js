import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import Card from '../components/Card'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'

const StartGameScreen = () => {
  const [guessedNumber, setGuessedNumber] = useState('')

  const numberInputHandler = text => {
    setGuessedNumber(text.replace(/[^0-9]/g, ''))
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={{ fontFamily: 'muli' }}>Select a Number between 0 and 99</Text>
          <CustomInput
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            value={guessedNumber}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonContainer}>
            <CustomButton title="Reset" color={"#ff0e54"} onPress={() => setGuessedNumber('')} />
            <CustomButton title="Confirm" color={"#59EE32"} onPress={() => console.log('opa')} />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginVertical: 32,
    fontFamily: 'muli'
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