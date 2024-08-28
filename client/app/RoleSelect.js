import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RoleSelect = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Role Select</Text>
      <View style={styles.buttonContainer}>
        <Button title='Admin' onPress={() => navigation.navigate('AdminLogin')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Inovetor' onPress={() => navigation.navigate('InovetorLogin')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Investor' onPress={() => navigation.navigate('InvestorLogin')} />
      </View>
    </View>
  )
}

export default RoleSelect

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // justifyContent: 'center',  
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '100%', 
  },
})
