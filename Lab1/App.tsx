import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View, Text, StyleSheet, Pressable } from 'react-native';
import Bai1 from './component/Project1';
import { Bai5 } from './component/Project5';
import { Bai7 } from './component/Project7';
import { Bai3 } from './component/Project3';
import { Bai2 } from './component/Project2';
import { Bai4 } from './component/Project4';
import { Bai6 } from './component/Project6';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }: {navigation: any}) {
  return (
    <View style ={styles.ViewStyle}>
      <Text >NguyenMinhKhoi</Text>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Project1')}
      >
      <Text style={styles.textStyle}>Go to Project1</Text>
      </Pressable>
      
      <Pressable
        style={styles.buttonStyle2}
        onPress={() => navigation.navigate('Project2')}
      >
      <Text style={styles.textStyle}>Go to Project2</Text>
      </Pressable>

      <Pressable
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Project3')}
      >
      <Text style={styles.textStyle}>Go to Project3</Text>
      </Pressable>

      <Pressable
        style={styles.buttonStyle2}
        onPress={() => navigation.navigate('Project4')}
      >
      <Text style={styles.textStyle}>Go to Project4</Text>
      </Pressable>
      

      <Pressable style={styles.buttonStyle}
      onPress={() => navigation.navigate('Project5')}>
       <Text style={styles.textStyle}>Go to Project5</Text>
      </Pressable>

      <Pressable style={styles.buttonStyle2}
      onPress={() => navigation.navigate('Project6')}>
       <Text style={styles.textStyle}>Go to Project6</Text>
      </Pressable>

      <Pressable style={styles.buttonStyle}
      onPress={() => navigation.navigate('Project7')}>
       <Text style={styles.textStyle}>Go to Project7</Text>
      </Pressable>

      
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Project1" component={Bai1} />
        <Stack.Screen name="Project2" component={Bai2} />
        <Stack.Screen name="Project3" component={Bai3} />
        <Stack.Screen name="Project4" component={Bai4} />
        <Stack.Screen name="Project5" component={Bai5} />
        <Stack.Screen name="Project6" component={Bai6} />
        <Stack.Screen name="Project7" component={Bai7} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  buttonStyle: 
  {
    backgroundColor: 'black',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 15
  },
  buttonStyle2: 
  {
    backgroundColor: '#DC3E37',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 15
  },
  ViewStyle:
  {
    alignItems: 'center'
  },
  textStyle:
  {
    alignItems: 'center',
    padding:7,
    color: '#fff',
   fontSize: 30
  }
}
);