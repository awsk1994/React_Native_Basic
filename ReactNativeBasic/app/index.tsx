import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
 import { Link } from 'expo-router'; 
import React, {useState} from 'react';

export default function Index() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    if (username && password) {
      Alert.alert('Login Successful', `Welcome, ${username}!`);
    } else {
      Alert.alert('Error', 'Please enter both username and password.');
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <TextInput
      style={styles.input}
      placeholder="Username"
      value={username}
      onChangeText={setUsername}
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      secureTextEntry
      value={password}
      onChangeText={setPassword}
    />
    <Button title="Login" onPress={handleLogin} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});