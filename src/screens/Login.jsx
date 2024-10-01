import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {fonts} from '../utils/fonts';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';

const Login = () => {
  const [isPassword, setIsPassword] = useState(true);
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
        source={require('./../../assets/images/bg_login.png')}
        style={styles.bgImage}
      />
      <View
        style={styles.headerCOntainer}
        className="justify-evenly space-y-20">
        <View className="flex-row items-center">
          <Image
            source={require('./../../assets/images/logo.png')}
            style={{width: 92, height: 92}}
          />
          <View className="items-center" style={{marginLeft: -12}}>
            <Text style={styles.title}>The Kairos</Text>
            <Text style={styles.subTitle}>Moments. Choices. Destiny.</Text>
          </View>
        </View>
        <Text style={styles.loginTxt}>Login</Text>
      </View>

      <View style={styles.inputCOntainer} className="space-y-7">
        <View className="flex-row items-center" style={styles.inputBox}>
          <MaterialCommunityIcons name="email" size={22} />
          <TextInput
            placeholder="Enter your email"
            className="flex-1 ml-1 w-full"
            style={styles.inputText}
          />
        </View>
        <View className="flex-row items-center" style={styles.inputBox}>
          <Octicons name="key" size={22} />
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={isPassword}
            className="flex-1 ml-1 w-full"
            style={styles.inputText}
          />
          <TouchableOpacity onPress={() => setIsPassword(prev => !prev)}>
            <Ionicons name={isPassword ? 'eye-off' : 'eye'} size={22} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="items-end -mt-32">
          <Text
            className="underline -mt-6"
            style={{fontFamily: fonts.semiBold}}>
            Forgot?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={{alignSelf: 'center', fontFamily: fonts.light}}>
        Or continue with
      </Text>
      <View style={styles.loginWithContainer}>
        <TouchableOpacity style={styles.loginWithGoogle} className="space-x-2">
          <AntDesign name="googleplus" size={30} color="#87CEEB" />
          <Text style={styles.textGF}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginWithGoogle} className="space-x-2">
          <MaterialCommunityIcons name="facebook" size={30} color="blue" />
          <Text style={styles.textGF}>Facebook</Text>
        </TouchableOpacity>
      </View>
      <View className="self-center flex-row" style={{marginBottom: 20}}>
        <Text style={{fontFamily: fonts.light}}>Don't have account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text
            style={{
              fontFamily: fonts.semiBold,
              textDecorationLine: 'underline',
            }}>
            Create now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bgImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(55),
    marginTop: -80,
  },
  headerCOntainer: {
    position: 'absolute',
    width: responsiveWidth(100),
    height: responsiveHeight(40),
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 22,
  },
  subTitle: {
    fontFamily: fonts.medium,
    fontSize: 12,
    marginTop: -10,
  },
  loginTxt: {
    fontFamily: fonts.bold,
    fontSize: 28,
    marginBottom: -30,
  },
  inputCOntainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  inputBox: {
    height: 50,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    // borderRadius: 12,
  },
  inputText: {
    fontFamily: fonts.regular,
    fontSize: 16,
  },
  loginBtn: {
    height: 50,
    backgroundColor: '#000000',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtnText: {
    color: '#FFFFFF',
    fontFamily: fonts.medium,
    fontSize: 18,
  },
  forget: {},
  loginWithContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginWithGoogle: {
    width: responsiveWidth(40),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
  },
  textGF: {
    fontFamily: fonts.semiBold,
    fonts: 20,
  },
});

export default Login;
