import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import NumberContainer from "../components/game/ui/NumberContainer";

function GameOver({ onGameOver, userNumber }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/game-over.png")}
        />
      </View>
      <NumberContainer myStyle={myStyle}>{userNumber}</NumberContainer>

      <View>
        <PrimaryButton onPress={onGameOver}>Main menu</PrimaryButton>
      </View>
    </View>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderRadius: 200,
    height: 400,
    width: 400,
    // borderWidth: 3,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "60%",
    height: "60%",
  },
});

const myStyle = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "green",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  numberText: {
    color: "green",
    fontSize: 26,
  },
});
