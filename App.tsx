import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CountUp from './components/CountUp';

export default function App() {
  const [initialTime, setInitialTime] = useState<number>(new Date('2021-05-04T00:00:00').getTime());

  const resetTimer = () => {
    const now = new Date().getTime();
    setInitialTime(now);
  };

  return (
    <View style={styles.container}>
      <CountUp initialDate={initialTime} />
      <Text>Wow, looks like you survived the social media apocalypse!</Text>
      <Button title="Reset timer" onPress={resetTimer} />
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
