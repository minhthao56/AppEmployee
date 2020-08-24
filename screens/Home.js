import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, FlatList} from 'react-native';
import {FAB} from 'react-native-paper';
import ListIterm from '../components/ListIterm';
import {DATA} from '../assets/data';

export default function Home({navigation}) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <ListIterm item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{paddingLeft: 8, paddingRight: 8}}
        />

        <FAB
          style={styles.fab}
          small={false}
          icon="plus"
          onPress={() => navigation.navigate('Create')}
        />
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#dddddd',
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
