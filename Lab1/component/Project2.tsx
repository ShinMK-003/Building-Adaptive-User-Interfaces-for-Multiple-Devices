import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Dimensions, Image } from 'react-native';

export const Bai2 = () => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreenWidth(window.width);
    });

    return () => subscription?.remove();
  }, []);

  const imageWidth = screenWidth * 0.8;

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer, { width: screenWidth / 2 }]}>
        <Button title="Button 1" onPress={() => {}} />
      </View>
      <View style={[styles.buttonContainer, { width: screenWidth / 2 }]}>
        <Button title="Button 2" onPress={() => {}} />
      </View>

      
      <Image
        source={{ uri: 'https://ichef.bbci.co.uk/images/ic/480xn/p0jkct29.jpg.webp' }} 
        style={[styles.image, { width: imageWidth, height: imageWidth * 0.5 }]} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  buttonContainer: {
    height: 50,
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    marginTop: 20,
  },
});


