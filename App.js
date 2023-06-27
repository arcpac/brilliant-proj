import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import StartGame from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    // mainMenu();
    setGameIsOver(true);
  }

  function startNewGameHandler() {
    setUserNumber(null);
  }

  let screen = <StartGame onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOver onGameOver={startNewGameHandler} userNumber={userNumber} />;
  }

  return (
    <LinearGradient colors={["#3287da", "#ffffff"]} style={styles.container}>
      {screen}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
