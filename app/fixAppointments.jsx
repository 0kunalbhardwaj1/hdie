import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FixAppointment = () => {
  const navigation = useNavigation();
  
  // State variables for appointment details
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = () => {
    if (!date || !time || !description) {
      // Show an alert if any field is empty
      Alert.alert('Error', 'Please fill all the fields');
    } else {
      // Handle appointment submission (e.g., send data to backend or show confirmation)
      Alert.alert('Appointment Fixed', `Your appointment is fixed on ${date} at ${time}.`);
      
      // Optionally navigate to a different screen (e.g., Dashboard)
      navigation.navigate('UserDashboard');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Fix an Appointment</Text>

      {/* Appointment Form */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter Appointment Date"
          placeholderTextColor="#aaa"
          value={date}
          onChangeText={setDate}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Appointment Time"
          placeholderTextColor="#aaa"
          value={time}
          onChangeText={setTime}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Description"
          placeholderTextColor="#aaa"
          value={description}
          onChangeText={setDescription}
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Appointment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131619',
    padding: 20,
  },
  backButton: {
    backgroundColor: '#4D62E5',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    width: 100,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  form: {
    width: '100%',
  },
  input: {
    backgroundColor: '#232F3E',
    color: '#fff',
    fontSize: 16,
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#4D62E5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FixAppointment;
