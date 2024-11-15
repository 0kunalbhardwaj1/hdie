import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Notifications = () => {
  const navigation = useNavigation();

  // Sample notifications data
  const [notifications, setNotifications] = useState([
    { id: '1', title: 'Appointment Reminder', content: 'You have an appointment tomorrow at 10:00 AM.' },
    { id: '2', title: 'Hydrotest Expiry', content: 'Your CNG hydrotest is due for renewal next week.' },
    { id: '3', title: 'Health Tip', content: 'Remember to stay hydrated and take breaks during work.' },
    { id: '4', title: 'Feedback Received', content: 'Thank you for providing feedback! Your suggestions have been noted.' },
  ]);

  // Function to render each notification
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.notificationItem} onPress={() => alert(item.content)}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationContent}>{item.content}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Notifications</Text>

      {/* List of Notifications */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
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
    marginBottom: 20,
  },
  notificationItem: {
    backgroundColor: '#232F3E',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  notificationContent: {
    fontSize: 16,
    color: '#ddd',
    marginTop: 5,
  },
});

export default Notifications;
