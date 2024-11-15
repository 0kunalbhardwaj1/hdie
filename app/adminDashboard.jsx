import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdminDashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Admin Dashboard</Text>
      {/* Add any additional content for the admin dashboard */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1D21',
    padding: 16,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AdminDashboard;
