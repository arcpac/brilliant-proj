import { Alert, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/ui/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

function generateRandomBetween(max, min, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(max, min, exclude);
  } else {
    return randomNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(100, 1, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Invalid selection", "You lied!", [
        { text: "Exit", style: "desctructive", onPress: onGameOver },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(
      maxBoundary,
      minBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <View style={styles.contentContainer}>
        <NumberContainer myStyle={myStyle}>{currentGuess}</NumberContainer>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="remove" />
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            <Ionicons name="add-circle" />
          </PrimaryButton>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <PrimaryButton onPress={onGameOver}>Quit</PrimaryButton>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
  contentContainer: {
    // backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    padding: 10,
    marginHorizontal: 24,
    // flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    margin: 20,
  },
  buttonContainer: {
    flex: 1,
  },
  number: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
    // fontSize: 36,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    borderColor: "#f3f6f4",
    borderWidth: 2,
    color: "#f3f6f4",
    padding: 20,
  },
  footerContainer: {
    borderRadius: 8,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
    flex: 3,
  },
});

const myStyle = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#444444",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  numberText: {
    color: "black",
    fontSize: 36,
  },
});
