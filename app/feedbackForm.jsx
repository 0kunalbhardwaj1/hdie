import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FeedbackForm = () => {
  const navigation = useNavigation();

  // State variables for feedback form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  // Handle form submission
  const handleSubmit = () => {
    if (!name || !email || !feedback) {
      // Show an alert if any field is empty
      Alert.alert('Error', 'Please fill all the fields');
    } else {
      // Handle feedback submission (e.g., send data to backend or show confirmation)
      Alert.alert('Feedback Submitted', 'Thank you for your valuable feedback.');

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

      <Text style={styles.header}>Feedback Form</Text>

      {/* Feedback Form */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Name"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Enter Your Feedback"
          placeholderTextColor="#aaa"
          value={feedback}
          onChangeText={setFeedback}
          multiline
          numberOfLines={4}
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Feedback</Text>
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
  textarea: {
    height: 100, // Increased height for textarea
    textAlignVertical: 'top', // Ensures text starts at the top of the textarea
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

export default FeedbackForm;