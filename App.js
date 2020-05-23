import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import StartGameScreen from './src/screens/StartGameScreen';
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

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
