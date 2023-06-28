import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ChatSettingsScreen = () => {
  return (
    <View styles={styles.container}  >
      <Text>ChatSettingsScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    alingItems: "center",
    justifyContent: "center"
  }

})



export default ChatSettingsScreen 