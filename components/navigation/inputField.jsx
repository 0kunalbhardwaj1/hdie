import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

const InputField = ({ label, placeholder, iconSource, value }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <Image
          source={iconSource}
          style={styles.icon}
          resizeMode="contain"
        />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#FFF"
          value={value}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    color: "#ABB8C4",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#363A3D',
    backgroundColor: "#1A1D21",
    minHeight: 48,
    paddingHorizontal: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: "#FFF",
    fontSize: 16,
  },
});

export default InputField;