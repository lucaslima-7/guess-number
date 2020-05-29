import React from 'react'
import { View, Text, Image, StyleSheet, BackHandler, Dimensions, ScrollView } from 'react-native'
import { ScreenOrientation } from 'expo'
import CustomButton from '../components/CustomButton'
import theme from '../../constants/theme'

const GameOverScreen = ({ rounds, choice, onRestart }) => {
  // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.title}>The Game is Over!</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageSuccess}
            resizeMode="cover"
            // source={require('../../assets/images/success.png')}
            source={{
              uri: 'https://vandal-us.s3.amazonaws.com/spree/products/50162/product/open-uri20180820-270-1wtjno1.jpg'
            }}
          />
        </View>
        <Text style={styles.textInfo} numberOfLines={1} ellipsizeMode="tail">
          It took me <Text style={styles.highlight}>{rounds}</Text> rounds to discover!!
      </Text>
        <Text style={styles.textInfo}>
          The Number was: <Text style={styles.highlight}>{choice}</Text>
        </Text>
        <View style={{ flexDirection: 'row', width: '80%', marginTop: 42 }}>
          <CustomButton
            title={"New Game"}
            color={theme.secondary}
            width='100%'
            onPress={() => onRestart()}
          />
        </View>
        <View style={{ flexDirection: 'row', width: '80%', marginTop: 4 }}>
          <CustomButton
            title={"Exit"}
            color={theme.primary}
            width='100%'
            onPress={() => BackHandler.exitApp()}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 32
  },
  title: {
    fontFamily: 'muli-bold',
    fontSize: Dimensions.get('window').height < 400 ? 20 : 32,
    marginBottom: 12
  },
  textInfo: {
    fontFamily: 'muli',
    fontSize: Dimensions.get('window').height < 400 ? 14 : 20
  },
  imageSuccess: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    marginVertical: Dimensions.get('window').height / 40,
    borderRadius: Dimensions.get('window').width * 0.7 / 2,
    borderWidth: 2,
    borderColor: 'black',
    overflow: 'hidden'
  },
  highlight: {
    fontFamily: 'muli-bold',
    color: theme.primary
  }
})

export default GameOverScreen