import {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AuthContext = createContext();

export const AuthProvider=({children})=>{

    const [userToken,setUserToken]=useState(null);

    const checkToken=async ()=>{
        try {
            const token=await AsyncStorage.getItem("userToken");
            setUserToken(token);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        checkToken();
    },[userToken])

    return (
        <AuthContext.Provider value={{userToken}}>
            {children}
        </AuthContext.Provider>
    )
}