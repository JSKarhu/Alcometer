


import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button } from 'react-native';
import { useDarkMode } from 'react-native-dark-mode';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function BloodAlcoholLevelCalculator() {
  const [weight, setWeight] = useState(0);
  const [beer, setBeer] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [bloodAlcoholLevel, setBloodAlcoholLevel] = useState(0);
  //const isDarkMode = useDarkMode();
  //const theme = isDarkMode ? 'dark' : 'light';

  function calculateBloodAlcoholLevel() {
    let r = 0.68;
    if (gender === 'female') {
      r = 0.55;
    }
    const bac = (beer * 12 * 0.05) / (weight * r);
    const soberTime = (bac * 60) / 0.015;
    setBloodAlcoholLevel(bac);
    setSoberTime(soberTime);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{color: theme === 'dark' ? 'white' : 'black'}}>Blood Alcohol Level Calculator</Text>
    <TextInput
    style={{color: theme === 'dark' ? 'white' : 'black'}}
      keyboardType='numeric'
      placeholder='Weight (lbs)'
      onChangeText={text => setWeight(text)}
    />
    <TextInput
    style={{color: theme === 'dark' ? 'white' : 'black'}}
      keyboardType='numeric'
      placeholder='Number of beer bottles'
      onChangeText={text => setBeer(text)}
    />
    <TextInput
    style={{color: theme === 'dark' ? 'white' : 'black'}}
      keyboardType='numeric'
      placeholder='Time since last beer (hours)'
      onChangeText={text => setTime(text)}
    />
    <Picker
    style={{color: theme === 'dark' ? 'white' : 'black'}}
      selectedValue={gender}
      onValueChange={itemValue => setGender(itemValue)}>
      <Picker.Item label='Male' value='male' />
      <Picker.Item label='Female' value='female' />
    </Picker>
    <Button title='Calculate' onPress={calculateBloodAlcoholLevel} />
    <Text style={{color: theme}}/>
    </View>
);
}