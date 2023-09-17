import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Color, Font } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import { Feature } from '../components';

const WELCOME_IMAGE = require('../../assets/images/robot.png');

export default function Home() {

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{marginTop: hp(1)}} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={ WELCOME_IMAGE }
                contentFit="cover"
                transition={1000}
            />
            <Text style={styles.title}>Better method of creating & communicating</Text>
            
            { /* App Feature Component */ }
            <Feature/>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    image: {
        width: wp(50),
        height: hp(40)
    },
    title: {
        fontSize: wp(7),
        fontFamily: Font.medium,
        color: Color.black,
        textAlign: 'left'
    }
  })