import React, {useState} from 'react';
import {
  View,
  TextInput,
  Modal,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function CreateEmploye() {
  const [valueName, onChangeName] = useState('');
  const [valueEmail, onChangeEmail] = useState('');
  const [valuePhone, onChangePhone] = useState('');
  const [valueSalary, onChangeSalary] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={isShowModal}
        onRequestClose={() => Alert.alert('Close')}
        style={styles.modal}
        transparent={true}>
        <View style={styles.containerModal}>
          <View style={styles.mainMadal}>
            <Text>Ok nha</Text>
            <TouchableOpacity
              style={styles.containerLose}
              activeOpacity={0.5}
              onPress={() => setIsShowModal(!isShowModal)}>
              <Text style={styles.buttonLose}>LOSE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TextInput
        onChangeText={(text) => onChangeName(text)}
        style={styles.input}
        value={valueName}
        placeholder="Name"
        textContentType="name"
      />
      <TextInput
        onChangeText={(text) => onChangeEmail(text)}
        style={styles.input}
        value={valueEmail}
        placeholder="Email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        onChangeText={(text) => onChangePhone(text)}
        style={styles.input}
        value={valuePhone}
        placeholder="Phone"
        keyboardType="number-pad"
        textContentType="telephoneNumber"
      />
      <TextInput
        onChangeText={(text) => onChangeSalary(text)}
        style={styles.input}
        value={valueSalary}
        placeholder="Salary"
        keyboardType="number-pad"
      />
      <View style={styles.containerButton}>
        <Icon.Button
          name="up"
          size={30}
          color="white"
          backgroundColor="rgba(255, 0, 255, 0)"
          iconStyle={{marginLeft: 'auto', marginRight: 'auto'}}
          style={styles.buttonUp}
          onPress={() => setIsShowModal(!isShowModal)}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 8,
  },
  buttonUp: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 15,
  },
  containerButton: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonLose: {
    color: 'white',
  },
  containerLose: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 30,
    borderRadius: 50,
    backgroundColor: 'red',
  },
  containerModal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  mainMadal: {
    backgroundColor: 'white',
    padding: 32,
    paddingLeft: 64,
    paddingRight: 64,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 8,
  },
});
