import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {signOut} from 'firebase/auth'
import {auth} from '../config/firbase'
import { themeColors } from '../theme'


export default function WelcomeScreen() {

    const handleLogout=async ()=>{
      await signOut(auth);
    }
  return (
    <SafeAreaView className="flex-1 flex-row justify-center items-center "style={{backgroundColor: themeColors.bg}}>
      <Text className="text-lg">Welcome Page -</Text>
      <TouchableOpacity  onPress={handleLogout} className="p-1 bg-red-400 rounded-lg">
        <Text className="text-white text-lg font-bold">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}