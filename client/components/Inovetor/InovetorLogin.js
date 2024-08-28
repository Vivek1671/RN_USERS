import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import BASE_URL from '../../config';

const InovetorLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/api/InoLogin`, {
        email,
        password,
      });
      const { token } = response.data;

      // Save token in AsyncStorage or some state management
      Alert.alert('Success', 'Login Successful');
      alert('Success', 'Login Successful');
      navigation.navigate('InovetorHome'); // Navigate to the dashboard or any other screen
    } catch (error) {
      Alert.alert('Error', error.response ? error.response.data.Error : 'An error occurred');
      alert('Error', error.response ? error.response.data.Error : 'An error occurred');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Login to Your Account</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Login" onPress={handleLogin} color="#007BFF" />
          
<TouchableOpacity onPress={() => navigation.navigate('InovetorRegister')}>
        <Text style={styles.link}>Don't have an account? Register</Text>
      </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    padding: 24,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  link: {
    marginTop: 20,
    color: '#007bff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default InovetorLogin;
