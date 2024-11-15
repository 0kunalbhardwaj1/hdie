import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter from expo-router

const AdminLoginModal = ({ visible, onClose, onSubmit }) => {
  const [password, setPassword] = useState('');
  const router = useRouter();  // Hook to access the router (used for navigation)

  const handleLogin = () => {
    if (password.trim() === 'admin123') { // Example password check
      onSubmit(password);  // Call onSubmit if password matches
      router.push('../adminDashboard'); // Navigate to the admin dashboard on successful login
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Admin Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Admin Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#1C1F24',
    padding: 20,
    borderRadius: 8,
    width: 300,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#333A40',
    backgroundColor: '#2A2E35',
    borderRadius: 8,
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4D62E5',
    padding: 12,
    borderRadius: 8,
    width: 200,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AdminLoginModal;
