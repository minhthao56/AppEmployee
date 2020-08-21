import React from 'react'
import { View, Text } from 'react-native'

export default function Profile({route}) {
    const {id}  = route.params
    
    return (
        <View>
            <Text>{id}</Text>
        </View>
    )
}
