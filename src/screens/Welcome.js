import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Color, Font } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';

const WELCOME_IMAGE = require('../../assets/images/robot.png');

export default function Welcome() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Hi, Robot</Text>
        <Text style={styles.subTitle}>Everything touched by artificial intelligence</Text>
      </View>
      <Image
        style={styles.image}
        source={ WELCOME_IMAGE }
        contentFit="cover"
        transition={1000}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("home")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: wp(14),
    fontFamily: Font.bold,
    color: Color.button,
    textAlign: 'center'
  },
  subTitle: {
    fontSize: wp(5),
    fontFamily: Font.regular,
    color: Color.black,
    textAlign: 'center'
  },
  image: {
    width: wp(50),
    height: hp(40)
  },
  button: {
    width: wp(70),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: Color.button
  },
  buttonText: {
    fontSize: wp(6),
    fontFamily: Font.medium,
    color: Color.white,
    textAlign: 'center'
  },
})