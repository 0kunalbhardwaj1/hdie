import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CheckboxField from './checkboxField';

const ConsentAndPrivacy = ({ onConsentChange }) => {
  const consentItems = [
    'I consent to receive treatment for my health condition.',
    'I consent to the use and disclosure of my health information for treatment purposes.',
    'I acknowledge that I have reviewed and agree to the privacy policy',
  ];

  const [consents, setConsents] = useState(consentItems.map(() => false)); // More intuitive state initialization

  const handleCheckboxToggle = (index) => {
    const updatedConsents = [...consents];
    updatedConsents[index] = !updatedConsents[index];
    setConsents(updatedConsents);
    if (onConsentChange) {
      onConsentChange(updatedConsents.every(Boolean)); // Notify parent if all consents are checked
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Consent and Privacy</Text>
      <View style={styles.checkboxContainer}>
        {consentItems.map((item, index) => (
          <CheckboxField
            key={index}
            label={item}
            checked={consents[index]}
            onToggle={() => handleCheckboxToggle(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
  },
  sectionTitle: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: '700',
    marginBottom: 36,
  },
  checkboxContainer: {
    gap: 24,
  },
});

export default ConsentAndPrivacy;
