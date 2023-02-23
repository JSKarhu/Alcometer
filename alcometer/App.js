import { useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { Button, RadioButton, Switch, useTheme } from 'react-native-paper';
import styles from './styles/styles';

const radioStyle = { flexDirection: 'row', alignItems: 'center' };

export default function App() {
  const sex = [
    { sex: 'Male', weight: 0.7 },
    { sex: 'Female', weight: 0.6 },
  ];

  const [weight, setWeight] = useState(0);
  const [beer, setBeer] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('');
  const [soberTime, setSoberTime] = useState(0);
  const [bloodAlcoholLevel, setBloodAlcoholLevel] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = useTheme();

  function calculateBloodAlcoholLevel() {
    let r = 0.7;
    if (gender === 'Female') {
      r = 0.6;
    }
    const bac = (beer * 12 * 0.05) / (weight * r);
    const soberTime = ((bac * 60) / 0.015) / 60;

    setBloodAlcoholLevel(bac);
    setSoberTime(soberTime);
  }

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? 'grey' : 'white' }]}>
      <SafeAreaView>
        <View style={styles.switchRow}>
          <Text>Light/Dark</Text>
          <Switch value={isDarkTheme} onValueChange={toggleTheme} style={styles.switch} />
        </View>
        <Text style={styles.header}>Alcometer</Text>
        <Text>Weight</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          placeholder="Weight (lbs)"
          onChangeText={(text) => setWeight(text)}
        />
        <Text>Bottles</Text>
        <NumericInput onChange={(b) => setBeer(b)} />
        <Text>Hours</Text>
        <NumericInput onChange={(t) => setTime(t)} />
        <RadioButton.Group selectedValue={gender} onValueChange={(itemValue) => setGender(itemValue)}>
          {sex.map((gender) => (
            <View style={radioStyle} key={gender.sex}>
              <RadioButton value={gender.sex} />
              <Text>{gender.sex}</Text>
            </View>
          ))}
        </RadioButton.Group>
        <Button style={styles.button} onPress={calculateBloodAlcoholLevel}>
          Calculate
        </Button>
        <Text>Blood Alcohol Level: {bloodAlcoholLevel.toFixed(2)}</Text>
        <Text>Sober Time: {soberTime.toFixed(0)} hours</Text>
      </SafeAreaView>
    </View>
  );
}
