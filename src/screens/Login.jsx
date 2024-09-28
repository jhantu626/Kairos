import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./../../assets/images/signin_avatar.png')} style={styles.imageView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'black'
  },
  imageView:{
 
  }
});

export default Login;
