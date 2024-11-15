import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const RadioButton = ({ label, selected, onSelect, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabledContainer]}
      onPress={!disabled ? onSelect : null}
      disabled={disabled}
      accessibilityLabel={label}
      accessibilityRole="radio"
    >
      <View style={[styles.radio, selected && styles.radioSelected, disabled && styles.radioDisabled]}>
        {selected && <View style={styles.radioInner} />}
      </View>
      <Text style={[styles.label, disabled && styles.labelDisabled]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#363A3D',
    borderStyle: 'dashed',
    borderRadius: 8,
  },
  disabledContainer: {
    opacity: 0.5,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#363A3D',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    borderColor: '#4D62E5',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4D62E5',
  },
  radioDisabled: {
    borderColor: '#B0B0B0',
  },
  label: {
    color: '#CDCECF',
    fontSize: 16,
  },
  labelDisabled: {
    color: '#B0B0B0',
  },
});

export default RadioButton;
