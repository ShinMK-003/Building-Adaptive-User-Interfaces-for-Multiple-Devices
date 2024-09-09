import React from 'react';
import { View, Button, TextInput, StyleSheet, KeyboardAvoidingView, useWindowDimensions, Platform } from 'react-native';

export const Bai4  = () => {
  
  const { width, height } = useWindowDimensions();
  
  
  const isPortrait = height > width;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}  
    >
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    width: '80%',  
  },
});


