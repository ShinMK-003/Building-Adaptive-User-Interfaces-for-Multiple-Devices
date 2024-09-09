import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Dimensions, Image } from 'react-native';

export const Bai3 = () => {
  const [orientation, setOrientation] = useState('portrait'); 

  useEffect(() => {
    
    const checkOrientation = () => {
      const { width, height } = Dimensions.get('window');
      if (width > height) {
        setOrientation('landscape'); 
        setOrientation('portrait'); 
      }
    };

    
    checkOrientation();

    
    const subscription = Dimensions.addEventListener('change', checkOrientation);

    
    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <View style={orientation === 'portrait' ? styles.portraitContainer : styles.landscapeContainer}>
      <Button title="Button 1" onPress={() => {}} />
      <Button title="Button 2" onPress={() => {}} />
      <Button title="Button 3" onPress={() => {}} />
    </View>
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
});

