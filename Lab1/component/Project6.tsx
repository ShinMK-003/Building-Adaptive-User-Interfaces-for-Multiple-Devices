import React from 'react';
import { View, Button, TextInput, StyleSheet, useWindowDimensions, Platform } from 'react-native';

export const Bai6 = () => {
 
  const { width, height } = useWindowDimensions();
  
  
  const isPortrait = height > width;

  return (
    <View style={isPortrait ? styles.portraitContainer : styles.landscapeContainer}>
      <Button title="Button 1" onPress={() => {}} />
      <Button title="Button 2" onPress={() => {}} />
      <Button title="Button 3" onPress={() => {}} />

      <TextInput
        style={styles.input}
        placeholder="Enter text"
        keyboardType="default"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  portraitContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', 
    padding: Platform.select({
      ios: 20,
      android: 10,
    }),
  },
  landscapeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',  
    padding: Platform.select({
      ios: 15,
      android: 8,
    }),
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    width: '80%',
    fontSize: Platform.select({
      ios: 18,
      android: 16,
    }),
  },
});


