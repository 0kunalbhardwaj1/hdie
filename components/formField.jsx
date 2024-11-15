import React from 'react';
import { View, StyleSheet, Text, TextInput, Image } from 'react-native';
import PropTypes from 'prop-types';  // Import PropTypes

const FormField = ({ label, placeholder, icon, value, avatarUri, multiline, onChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, multiline && styles.multilineContainer]}>
        {icon && <Image source={{ uri: icon }} style={styles.icon} />}
        {avatarUri && (
          <View style={styles.avatarContainer}>
            <Image source={{ uri: avatarUri }} style={styles.avatar} />
          </View>
        )}
        <TextInput
          style={[styles.input, multiline && styles.multilineInput]}
          placeholder={placeholder}
          placeholderTextColor="#76828D"
          value={value}
          multiline={multiline}
          onChangeText={onChange}
          accessibilityLabel={label} // Added accessibility label
        />
      </View>
    </View>
  );
};

// Prop validation for FormField component
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string.isRequired,
  avatarUri: PropTypes.string,
  multiline: PropTypes.bool,
  onChange: PropTypes.func.isRequired, // onChange is required as it handles text input change
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    color: '#ABB8C4',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#363A3D',
    backgroundColor: '#1A1D21',
    minHeight: 48,
    paddingHorizontal: 16,
  },
  multilineContainer: {
    minHeight: 96,
    paddingVertical: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },
  multilineInput: {
    height: 64,
    textAlignVertical: 'top',
  },
});

export default FormField;
