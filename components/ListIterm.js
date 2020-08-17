import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function ListIterm({item}) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        Alert.alert('Clicked');
      }}>
      <View style={styles.container}>
        <Image source={{uri: item.url}} style={styles.image} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 5,
  },
  container: {
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  title: {
    color: '#999999',
  },
});
