import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';  // Import Link component
import AdminLoginModal from '../components/adminLoginModal'; // Import AdminLoginModal

const Index = () => {
  const [modalVisible, setModalVisible] = useState(false); // State to manage modal visibility

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Health Data Insight Engine</Text>
      <View style={styles.buttonContainer}>
        {/* Login Button with Link to login page */}
        <Link href="/login">
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Link>

        {/* Sign Up Button with Link to signUp page */}
        <Link href="/signUp">
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Admin Login Button */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.adminLink}>Admin Sign-In</Text>
      </TouchableOpacity>

      {/* Admin Login Modal */}
      <AdminLoginModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)} // Close the modal
        onSubmit={(password) => {
          console.log("Admin Password: ", password); // You can handle admin password submission here
          setModalVisible(false); // Close modal after successful submission
        }}
      />
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
    marginBottom: 30,
  },
  buttonContainer: {
    gap: 20,
  },
  button: {
    backgroundColor: '#4D62E5',
    padding: 12,
    borderRadius: 8,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  adminLink: {
    marginTop: 30,
    color: '#CDCECF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default Index;
