import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { fonts } from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';

const DoneButtonComponent = ({ ...rest }) => {
  return (
    <TouchableOpacity {...rest} className="mr-4">
      <Text className="font-bold text-lg">Done</Text>
    </TouchableOpacity>
  );
};

const OnboardingScreen = () => {
  const navigation = useNavigation();
  return (
    <Onboarding
      DoneButtonComponent={DoneButtonComponent}
      pages={[
        {
          backgroundColor: '#F7DAD9',
          // backgroundColor: '#FFCDD2',
          image: (
            <Image
              source={require('./../../assets/images/onboarding1.png')}
              style={{ width: 250, height: 250 }}
            />
          ),
          title: 'Your Time, Your Choice',
          subtitle:
            'Explore a curated collection of premium watches just for you.',
        },

        {
          backgroundColor: '#A3D5FF',
          image: (
            <Image
              source={require('./../../assets/images/onboarding4.png')}
              style={styles.imageStyle}
              className="rounded-3xl"
            />
          ),
          title: 'Where Time Meets Luxury',
          subtitle:
            'Find the perfect watch to complement every moment of your life.',
        },
        {
          backgroundColor: '#B2DFDB',
          image: (
            <Image
              source={require('./../../assets/images/onboarding3.png')}
              style={{ width: 250, height: 250 }}
            />
          ),
          title: 'Timeless Elegance',
          subtitle:
            'iscover and shop exquisite timepieces tailored to your style.',
        },
      ]}
      titleStyles={styles.title}
      subTitleStyles={styles.subTitle}
      onDone={() => navigation.replace('Signup')}
      onSkip={() => navigation.replace('Login')}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.semiBold,
    color: '#333333',
    opacity: 0.5,
  },
  subTitle: {
    fontFamily: fonts.regular,
    opacity: 0.5,
  },
  imageStyle: {
    width: 250,
    height: 250,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000000',
    shadowOpacity: 5,
    elevation: 5
  }
});

export default OnboardingScreen;
