import React from 'react';
import { View, Button, TextInput, StyleSheet, StatusBar, useWindowDimensions, Platform, StatusBarStyle } from 'react-native';

export const Bai7 = () => {
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;
  const statusBarStyle = Platform.select({
    ios: isPortrait ? 'dark-content' : 'light-content',   
    android: isPortrait ? 'light-content' : 'dark-content', 
  });

  const statusBarBackgroundColor = Platform.select({
    ios: isPortrait ? '#ffffff' : '#000000',  
    android: isPortrait ? '#000000' : '#ffffff',
  });

  return (
    <View style={isPortrait ? styles.portraitContainer : styles.landscapeContainer}>
     
      <StatusBar 
        
        backgroundColor={statusBarBackgroundColor} 
        translucent={false} 
      />

     
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


