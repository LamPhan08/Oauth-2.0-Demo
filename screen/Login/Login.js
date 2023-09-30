import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, } from 'react-native';
import google from '../../assets/images/google.png'
import facebook from '../../assets/images/facebook.png'

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.welcome}>Welcome Back!</Text>

        <Text style={styles.login}>Please Login</Text>
      </View>

      <View style={styles.otherLoginSection}>
        <TouchableOpacity style={styles.otherLoginBtn} onPress={() => navigation.navigate('Home')}>
          <Image source={google} style={styles.otherLoginIcon} />

          <Text style={styles.btnText}>Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.otherLoginBtn} onPress={() => navigation.navigate('Home')}>
          <Image source={facebook} style={styles.otherLoginIcon}/>

          <Text style={styles.btnText}>Sign in with Facebook</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    titleSection: {
      alignItems: 'center'
    },
  
    welcome: {
      fontSize: 20,
      color: '#000',
      paddingVertical: 4,
      fontWeight: '500'
    },
  
    login: {
      fontSize: 20,
      color: '#000',
      fontWeight: '500',
    },
  
    otherLoginSection: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: 30,
      marginTop: 50,
      width: '100%',
      // backgroundColor: 'red'
    },
  
    otherLoginBtn: {
      borderRadius: 14,
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderColor: '#DDDADA',
      borderWidth: 1,
      width: '90%',
      flexDirection: 'row',
      gap: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    btnText: {
      fontSize: 15
    },
  
    otherLoginIcon: {
      height: 30,
      width: 30
    },
  });
