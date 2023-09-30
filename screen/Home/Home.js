import React from 'react'
import {TouchableOpacity, Text, StyleSheet, SafeAreaView, Image} from 'react-native'
import profile from '../../assets/images/profile.jpg'

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={style.container}>
      <Image source={profile} style={style.avatar}/>

      <Text style={style.name}>Name</Text>

      <TouchableOpacity style={style.logoutBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={style.btnText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  avatar: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ddd'
  },

  name: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold'
  },

  logoutBtn:{
    marginTop: 40,
    backgroundColor: '#4C4C4C',
    paddingVertical: 15,
    width: '70%',
    alignItems: 'center',
    borderRadius: 8
  },

  btnText:{
    color: '#fff',
    fontWeight: '500'
  }
})
