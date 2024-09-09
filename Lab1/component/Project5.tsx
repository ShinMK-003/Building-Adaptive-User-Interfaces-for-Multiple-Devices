import React from 'react';
import { View, Button, TextInput, StyleSheet, Image, KeyboardAvoidingView, useWindowDimensions, Platform } from 'react-native';

export const Bai5 = () => {
  const { width, height } = useWindowDimensions(); 


  const isPortrait = height > width;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <View style={isPortrait ? styles.portraitContainer : styles.landscapeContainer}>
       
        <Image
          source={{ uri: 'https://ichef.bbci.co.uk/images/ic/480xn/p0jkct29.jpg.webp' }} 
          style={isPortrait ? styles.portraitImage : styles.landscapeImage}
        />
        <View style={styles.buttonContainer}>
          <Button title="Button 1" onPress={() => {}} />
          <Button title="Button 2" onPress={() => {}} />
          <Button title="Button 3" onPress={() => {}} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter text"
          keyboardType="default"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  portraitContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  landscapeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  portraitImage: {
    width: '80%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  landscapeImage: {
    width: '50%',
    height: 150,
    resizeMode: 'contain',
    marginRight: 20,
  },
  buttonContainer: {
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});


