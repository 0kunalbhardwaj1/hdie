import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Health Data Integration Engine</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
  },
  headerText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "700",
  },
});

export default Header;