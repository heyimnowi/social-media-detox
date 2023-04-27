import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import CountUp from "./components/CountUp";

export default function App() {
  const [initialTime, setInitialTime] = useState<number>(
    new Date("2023-04-15T00:00:00").getTime()
  );

  const resetTimer = () => {
    const now = new Date().getTime();
    setInitialTime(now);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/image.svg")} />

      <CountUp initialDate={initialTime} />
      <Text style={styles.title}>Wow, looks like you survived the social media apocalypse!</Text>
      <TouchableOpacity style={styles.button} onPress={resetTimer}>
        <Text style={styles.buttonText}>RESET</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B76FF",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  button: {
    backgroundColor: "#FC4F00",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
  image: {
    width: 350,
    height: 350,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
