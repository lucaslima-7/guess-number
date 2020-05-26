import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import CustomButton from '../components/CustomButton'
import theme from '../../constants/theme'
import { MaterialIcons } from '@expo/vector-icons'

const generateRandom = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max)
  const random = Math.floor(Math.random() * (max - min)) + min

  if (random === exclude) {
    return generateRandom(min, max, exclude)
  } else {
    return random
  }
}

const GameScreen = ({ choice, leaveGame, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandom(1, 100, choice))
  const [rounds, setRounds] = useState(0)
  const currentLow = useRef(1)
  const currentHigh = useRef(100)

  useEffect(() => {
    if (currentGuess === choice) {
      onGameOver(rounds)
    }
  }, [currentGuess, onGameOver, choice]);

  const guessHandler = direction => {
    if ((direction === 'lower' && currentGuess < choice) || (direction === 'greater' && currentGuess > choice)) {
      Alert.alert('Don\'t lie to me 🧐', 'You know that this is wrong...', [{
        text: 'Sorry!',
        style: 'cancel'
      }])
      return
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess
    } else {
      currentLow.current = currentGuess
    }

    const nextNumber = generateRandom(currentLow.current, currentHigh.current, currentGuess)
    setCurrentGuess(nextNumber)
    setRounds(rounds => rounds + 1)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.chosenNumber}>
        <Text style={styles.startText}>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Lower"
            color={"#23BBFB"}
            onPress={() => guessHandler('lower')}
          />
          <CustomButton
            title="Greater"
            color={"#23BBFB"}
            onPress={() => guessHandler('greater')}
          />
        </View>
        <View style={{ flexDirection: 'row', width: '80%', marginTop: 64 }}>
          <CustomButton
            title={"Return"}
            color={theme.secondary}
            width='100%'
            onPress={() => leaveGame()}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    marginTop: 32
  },
  startText: {
    fontSize: 28,
    fontFamily: 'muli'
  },
  chosenNumber: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly'
  },
})

export default GameScreen