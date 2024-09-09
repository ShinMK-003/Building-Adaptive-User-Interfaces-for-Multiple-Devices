import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Dimensions } from 'react-native';

const Bai1 = () => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreenWidth(window.width);
    });

    
    return () => subscription?.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer, { width: screenWidth / 2 }]}>
        <Button title="Button 1" onPress={() => {}} />
      </View>
      <View style={[styles.buttonContainer, { width: screenWidth / 2 }]}>
        <Button title="Button 2" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  buttonContainer: {
    height: 50,
    justifyContent: 'center',
  },
});

export default Bai1;
