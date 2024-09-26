import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './screens/Splash';
import AuthHome from './screens/AuthHome';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import OnboardingScreen from './screens/OnboardingScreen';
import {AuthContext, AuthProvider} from './context/AuthContext';

const stack = createStackNavigator();

const AuthStack = () => {
  return (
    <stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <stack.Screen name="Splash" component={Splash} />
      <stack.Screen name="Onboarding" component={OnboardingScreen} />
      <stack.Screen name="AuthHome" component={AuthHome} />
      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="Signup" component={SignUp} />
    </stack.Navigator>
  );
};

const AppNav = () => {
  const {userToken} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {userToken ? <Text>Not Null</Text> : <AuthStack />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;
