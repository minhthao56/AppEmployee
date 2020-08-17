import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import ListIterm from './components/ListIterm';

const App = () => {
  const DATA = [
    {
      id: 1,
      name: 'First Item',
      title: 'Web Derveloper',
      url: 'http://kundenarea.at/app-assets/images/user/12.jpg',
    },
    {
      id: 2,
      name: 'Second Item',
      title: 'Front End Derveloper',
      url: 'http://kundenarea.at/app-assets/images/user/12.jpg',
    },
    {
      id: 3,
      name: 'Three Item',
      title: 'Back End Derveloper',
      url: 'http://kundenarea.at/app-assets/images/user/12.jpg',
    },
    {
      id: 4,
      name: 'Four Item',
      title: 'Full stack Derveloper',
      url: 'http://kundenarea.at/app-assets/images/user/12.jpg',
    },
    {
      id: 5,
      name: 'Five Item',
      title: 'MERN Stack Derveloper',
      url: 'http://kundenarea.at/app-assets/images/user/12.jpg',
    },
    {
      id: 6,
      name: 'Five Item',
      title: 'MERN Stack Derveloper',
      url: 'http://kundenarea.at/app-assets/images/user/12.jpg',
    },
    {
      id: 7,
      name: 'Five Item',
      title: 'MERN Stack Derveloper',
      url: 'http://kundenarea.at/app-assets/images/user/12.jpg',
    },
    {
      id: 8,
      name: 'Five Item',
      title: 'MERN Stack Derveloper',
      url: 'http://kundenarea.at/app-assets/images/user/12.jpg',
    },
    {
      id: 9,
      name: 'Five Item',
      title: 'MERN Stack Derveloper',
      url: 'http://kundenarea.at/app-assets/images/user/12.jpg',
    },
    {
      id: 10,
      name: 'Five Item',
      title: 'MERN Stack Derveloper',
      url: 'http://kundenarea.at/app-assets/images/user/12.jpg',
    },
  ];

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <ListIterm item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{paddingLeft: 8, paddingRight: 8}}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#dddddd',
  },
});

export default App;