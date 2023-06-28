import { View, Text } from 'react-native'
import React from 'react'
import ChatListScreen from '../screens/ChatListScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



import ChatSettingsScreen from '../screens/ChatSettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/SettingsScreen';
import Location from '../screens/Location';
import Camera from '../screens/Camera';
import Friends from '../screens/Friends';
import Spotlight from '../screens/Spotlight';
import ChatScreen from '../screens/ChatScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const TabNavigator = (props) => {
    return (
        <Tab.Navigator
            screenOptions={{ headerTitle: "" }}>

            <Tab.Screen name="chat" component={ChatListScreen} options={{
                tabBarLabel: 'chat',
                tabBarIcon: () => <Ionicons name="md-chatbox" size={25} color="black" />
            }} />

            <Tab.Screen name="Location" component={Location} options={{
                tabBarLabel: 'Location',
                tabBarIcon: () => <Ionicons name="location" size={25} color="black" />

            }} />

            <Tab.Screen name="Camera" component={Camera} options={{
                tabBarLabel: 'Camera',
                tabBarIcon: () => <Ionicons name="camera" size={24} color="black" />
            }} />

            <Tab.Screen name="Friends" component={Friends} options={{
                tabBarLabel: 'Friends',
                tabBarIcon: () => <FontAwesome5 name="user-friends" size={24} color="black" />
            }} />

            <Tab.Screen name="Spotlight" component={Spotlight} options={{
                tabBarLabel: 'Spotlight',
                tabBarIcon: () => <AntDesign name="caretright" size={24} color="black" />
            }} />


        </Tab.Navigator>
    );
}



const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={TabNavigator} options={{ headerTitle: "" }} />
            <Stack.Screen name="ChatSettings" component={ChatSettingsScreen}
                options={{
                    headerShown: "false",
                    headerBackTitle: "Back",
                    headerTitle: "Settings"
                }} />

            <Stack.Screen name="Chat" component={ChatScreen}
                options={{
                    headerBackTitle: "Back",
                    headerTitle: "Chat"
                }} />

        </Stack.Navigator>
    )
}

export default MainNavigator