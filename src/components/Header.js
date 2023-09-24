import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { Color, Font } from '../constants';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}><Entypo name="dot-single" size={wp(7)} color="green" /> Online</Text>
      <FontAwesome5 name="brain" size={wp(9)} color={Color.button} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: wp(2)
    },
    text: {
        fontSize: wp(7),
        fontFamily: Font.medium,
        color: Color.button,
        borderWidth: 0.5,
        padding: 1,
        borderRadius: wp(2)
    }
})