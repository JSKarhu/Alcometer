import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { RadioButton, SegmentedButtons } from 'react-native-paper';

const sex = [
  {genre: 'Male', weight: 0.7},
  {genre: 'Female', weight: 0.6}
];

const radioStyle= {flexDirection: 'row', alignItems: 'center'};

export default function App() {

  const [bottles, setBottles] = useState();
  const [hours, setHours] = useState();
  const [genre, setGenre] = useState();

  return (
    <View style={styles.container}>
      <Text>Alcometer</Text>
      <Text>Weight</Text>
      <TextInput>Weight</TextInput>
      <Text>Bottles</Text>
      <NumericInput onChange={b => setBottles(b)}></NumericInput>
      <Text>Hours</Text>
      <NumericInput onChange={h => setHours(h)}></NumericInput>
      <RadioButton.Group onValueChange={newValue => setGenre(sex.find(sex => sex.genre === newValue).weight)}>
        {sex.map(sex =>
          <View style={radioStyle} key={sex.genre} >
            <RadioButton value={sex.genre}/>
            <Text>{sex.genre}</Text>
          </View>
          )}
      </RadioButton.Group>
      <TouchableOpacity>
          <Text>Calculate</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
