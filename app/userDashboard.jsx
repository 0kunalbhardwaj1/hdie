import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import patientForm from './patientForm';

const UserDashboard = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // State to manage dropdown visibility
  const navigation = useNavigation(); // Get the navigation object using the hook

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Handle Profile navigation
  const handleProfile = () => {
    navigation.navigate('Profile'); // Replace with the actual route name for Profile
  };

  // Handle Logout
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logging out');
    navigation.navigate('Home'); // Redirect to Home after logout, adjust as needed
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Welcome to Your Dashboard</Text>

      <View style={styles.navbar}>
        {/* Home Button */}
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('userDashboard')}>
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>

        {/* Community Forums Button */}
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('communityForums')}>
          <Text style={styles.navButtonText}>Community Forums</Text>
        </TouchableOpacity>

        {/* Notifications Button */}
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('notifications')}>
          <Text style={styles.navButtonText}>Notifications</Text>
        </TouchableOpacity>

        {/* Appointments Button */}
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('patientForm')}>
          <Text style={styles.navButtonText}>Appointments</Text>
        </TouchableOpacity>

        {/* Feedback Form Button */}
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('feedbackForm')}>
          <Text style={styles.navButtonText}>Feedback</Text>
        </TouchableOpacity>

        {/* FYP News Button */}
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('fypNews')}>
          <Text style={styles.navButtonText}>FYP News</Text>
        </TouchableOpacity>

        {/* Settings Button with Dropdown */}
        <View style={styles.navButton}>
          <TouchableOpacity onPress={toggleDropdown}>
            <Text style={styles.navButtonText}>Settings</Text>
          </TouchableOpacity>

          {isDropdownVisible && (
            <View style={styles.dropdown}>
              <TouchableOpacity style={styles.dropdownItem} onPress={handleProfile}>
                <Text style={styles.dropdownText}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem} onPress={handleLogout}>
                <Text style={styles.dropdownText}>Logout</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#131619',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#232F3E', // Dark navbar background color (similar to Amazon)
    borderRadius: 8,
    marginBottom: 20,
  },
  navButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dropdown: {
    position: 'absolute',
    top: 30,
    right: 0,
    backgroundColor: '#4D62E5',
    borderRadius: 8,
    padding: 10,
    zIndex: 100,
  },
  dropdownItem: {
    paddingVertical: 10,
  },
  dropdownText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default UserDashboard;
