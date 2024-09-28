import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {fonts} from '../utils/fonts';
import {useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';

const Splash = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0.2);
  useEffect(() => {
    setProgress(prev => 1.0);
    setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000);
  }, []);

  return (
    <LinearGradient
      className="flex-1 justify-center items-center"
      colors={['#B0E0E6', '#E6E6FA']}>
      {/* <Image
        source={require('./../../assets/images/splash.png')}
        style={{width: 200, height: 200}}
      /> */}
      <Text className="text-6xl" style={styles.kairosText}>
        Kairos
      </Text>
      <Progress.Bar
        progress={progress}
        animated={true}
        width={200}
        color="#22577A"
        borderRadius={2}
        indeterminate={true}
        indeterminateAnimationDuration={3000}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  kairosText: {
    fontFamily: fonts.medium,
  },
});

export default Splash;
