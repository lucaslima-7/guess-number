import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';
import GameOverScreen from './src/screens/GameOverScreen';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const fetchFonts = () => {
  return Font.loadAsync({
    'muli': require('./assets/fonts/Muli-Regular.ttf'),
    'muli-bold': require('./assets/fonts/Muli-Bold.ttf'),
    'muli-light': require('./assets/fonts/Muli-Light.ttf'),
    'muli-medium': require('./assets/fonts/Muli-Medium.ttf')
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()
  const [rounds, setRounds] = useState(0)

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )
  }

  const configNewGameHandler = () => {
    setRounds(0)
    setSelectedNumber(null)
  }

  const startGameHandler = selectedNumber => {
    setSelectedNumber(selectedNumber)
  }

  const gameOverHandler = rounds => {
    setRounds(rounds)
  }


  let container = <StartGameScreen onStartGame={startGameHandler} />

  if (selectedNumber && rounds <= 0) {
    container = (
      <GameScreen choice={selectedNumber} onGameOver={gameOverHandler} leaveGame={startGameHandler} />
    )
  } else if (rounds > 0) {
    container = (
      <GameOverScreen choice={selectedNumber} rounds={rounds} onRestart={configNewGameHandler} />
    )
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {container}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
