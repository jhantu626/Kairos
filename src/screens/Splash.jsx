import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Splash = () => {
  return (
    <LinearGradient
      className="flex-1 justify-center items-center"
      colors={['#B0E0E6', '#E6E6FA']}>
      <Text>Splash</Text>
    </LinearGradient>
  );
};

export default Splash;

const styles = StyleSheet.create({});
