import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function Profile({route}) {
    const {id}  = route.params
    
    return (
        <View>
           <Image source = {{uri: "https://picsum.photos/200/300"}} style = {{height: 50, width: 50, borderRadius: 50}}/>
           <View>
               <View>
               <Icon name="user" size={30} color="#000000" style = {styles.iconName} />
               </View>
           <Text>Frist user</Text>
           </View>
        </View>
    )
}
const styles = StyleSheet.create({
    iconName: {
        fontSize: 20
    }
})