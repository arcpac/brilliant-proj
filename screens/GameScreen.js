import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Title from "../components/Title";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/ui/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import LogItem from "../components/game/ui/LogItem";

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
  const [logs, setLogs] = useState([{ number: initialGuess, direction: "" }]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setLogs((prevGuessRounds) => [
      { number: newRandomNumber, direction: direction },
      ...prevGuessRounds,
    ]);
  }
  console.log(width)
  let content = (
    <>
      <View style={styles.contentContainer}>
        <NumberContainer myStyle={myStyle}>{currentGuess}</NumberContainer>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <AntDesign name="downsquare" size={24} color="white" />
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            <AntDesign name="upsquare" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>
    </>
  );
  if (width > 395) {
    content = (
      <>
        <View style={styles.landscapeContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <AntDesign name="downsquare" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View>
            <NumberContainer myStyle={myStyle}>{currentGuess}</NumberContainer>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <AntDesign name="upsquare" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      {content}
      {}
      <View style={styles.logsContainer}>
        <FlatList
          data={logs}
          renderItem={(itemData) => {
            console.log(itemData);
            return <LogItem data={itemData} />;
          }}
          keyExtractor={(item) => item.number}
        />
      </View>
      {/* <View style={styles.footerContainer}>
        <PrimaryButton onPress={onGameOver}>Quit</PrimaryButton>
      </View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
    flex: 1,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    padding: 10,
    marginHorizontal: 24,
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
  logsContainer: {
    flex: 1,
    padding: 16,
  },
  landscapeContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
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
