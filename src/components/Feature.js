import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { welcomeData } from '../dummy/Data';
import { Font, Color } from '../constants';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';

export default function Features({ key, color }) {

    const navigation = useNavigation();

    return (
        <>
        {
            welcomeData.map((val, index) => {
                return (
                    <View key={index} style={[styles.container, { backgroundColor: val.bgColor }]}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                                style={styles.image}
                                source={ val.image }
                                contentFit="cover"
                                transition={500}
                            />
                            <Text style={styles.title}> {val.title}</Text>
                        </View>
                        <Text style={styles.desc}> {val.content}</Text>
                    </View>
                )
            })
        }
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("home")}>
                <Text style={styles.buttonText}>Ready !</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: wp(1),
        padding: wp(1),
        borderWidth: 0.5,
        borderRadius: 10,
        width: wp(95)
    },
    title: {
        fontSize: wp(6),
        fontFamily: Font.medium,
        color: Color.black,
        textAlign: 'left'
    },
    image: {
        width: wp(10),
        height: wp(10)
    },
    desc: {
        fontSize: wp(4),
        fontFamily: Font.regular,
        color: Color.black,
    },
    button: {
        width: wp(50),
        height: hp(7),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: Color.bg,
        borderWidth: 1,
    },
    buttonText: {
        fontSize: wp(6),
        fontFamily: Font.medium,
        color: Color.black,
        textAlign: 'center'
    },
})