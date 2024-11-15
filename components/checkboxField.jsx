import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const CheckboxField = ({ label, checked = false, onToggle }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onToggle}
      accessibilityRole="checkbox"
      accessibilityLabel={label}
      accessibilityState={{ checked }}
    >
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <View style={styles.innerCheckbox} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#363A3D',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    borderColor: '#4D62E5',
    backgroundColor: '#4D62E5',
  },
  innerCheckbox: {
    width: 12,
    height: 12,
    backgroundColor: '#FFF',
  },
  label: {
    color: '#CDCECF',
    fontSize: 16,
  },
});

export default CheckboxField;
