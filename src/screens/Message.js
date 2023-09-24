import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { Header } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GiftedChat } from 'react-native-gifted-chat'
import { Color } from '../constants'
import { chatgptApiCall } from '../api/ApiConfig'

export default function Message() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          image: '',
          video: '',
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://picsum.photos/seed/696/3000/2000',
          },
        },
      ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages) )
    
    //console.log(messages[0].text)
    sendApiRequest("/completions", messages[0].text);
  }, [])

  const sendApiRequest = async(uri, text) => {
    let message = [{"role": "system", "content": "You are a helpful assistant." }, {"role": "user", "content": text }]
    const res = await chatgptApiCall(uri, message);
    console.log(res)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
            _id: 1,
        }}
        alwaysShowSend={true}
        messagesContainerStyle={{backgroundColor: '#e2e8f0'}}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})