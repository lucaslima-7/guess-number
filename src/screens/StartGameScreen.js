import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native'
import Card from '../components/Card'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import NumberContainer from '../components/NumberContainer'

const StartGameScreen = ({ onStartGame }) => {
  const [guessedNumber, setGuessedNumber] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [parsedNumber, setParsedNumber] = useState()
  const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 1.1)

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 1.1)
    }

    Dimensions.addEventListener('change', updateLayout)
    return () => {
      Dimensions.removeEventListener('change', updateLayout)
    }
  })


  const numberInputHandler = text => {
    setGuessedNumber(text.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setGuessedNumber('')
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const parsed = parseInt(guessedNumber)

    if (isNaN(parsed) || parsed <= 0 || parsed > 99) {
      Alert.alert('Invalid Number!', 'Choose a number between 1 and 99', [
        {
          text: 'Close',
          style: 'destructive',
          onPress: () => resetInputHandler()
        }
      ])
      return
    }

    setConfirmed(true)
    setParsedNumber(parsed)
    setGuessedNumber('')
    Keyboard.dismiss()
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
            {!confirmed ? (
              <>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                  <Text style={{ fontFamily: 'muli' }}>Select a Number between 1 and 99</Text>
                  <CustomInput
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='number-pad'
                    maxLength={2}
                    value={guessedNumber}
                    onChangeText={numberInputHandler}
                  />
                  <View style={{ ...styles.buttonContainer }}>
                    <CustomButton
                      title="Reset"
                      color={"#ff0e54"}
                      onPress={() => resetInputHandler()}
                    />
                    <CustomButton
                      title="Confirm"
                      color={"#59EE32"}
                      onPress={() => confirmInputHandler()}
                    />
                  </View>
                </Card>
              </>
            ) : (
                <View style={styles.chosenNumber}>
                  <NumberContainer>
                    You've chosen: {parsedNumber}
                  </NumberContainer>
                  <Text style={styles.startText}>Can we start with this number?</Text>
                  <View style={{ ...styles.buttonContainer }}>
                    <CustomButton
                      title="No, Return"
                      color={"#ff0e54"}
                      onPress={() => setConfirmed(false)}
                    />
                    <CustomButton
                      title="Yes, Start Game!"
                      color={"#23BBFB"}
                      onPress={() => onStartGame(parsedNumber)}
                    />
                  </View>
                </View>
              )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
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
    width: '80%',
    minWidth: 300,
    maxWidth: '90%',
    alignItems: 'center',
    marginBottom: 32
  },
  // button: {
  //   // width: 100,
  //   // width: '40%,
  //   width: buttonWidth
  // },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  chosenNumber: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  startText: {
    marginBottom: 20,
    fontSize: 20,
    fontFamily: 'muli'
  }
})

export default StartGameScreen