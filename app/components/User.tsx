import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { UserState } from '../providers/RevenueCatProvider';

interface UserProps {
  user: UserState;
}

// Display the user state based on entitlements (previous purchases)
const User = ({ user }: UserProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Cookies: {user.cookies}</Text>
      <Text style={styles.text}>
        Items: {user.items.length === 0 && 'No Items purchased yet!'} {user.items.join(', ')}
      </Text>
      <Text style={styles.text}>Pro Features: {user.pro ? 'True' : 'False'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#',
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontSize: 20,
    color: '#EA3C4A',
    paddingVertical: 6,
  },
});

export default User;
