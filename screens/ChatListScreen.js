
import { View, Text } from 'react-native'
import React from 'react'
import { Button, StyleSheet } from 'react-native'

const ChatListScreen = (props) => {
    return (
        <View style={styles.container} >
            <Button title="go to chat" onPress={() => props.navigation.navigate("Chat")} />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

})

export default ChatListScreen