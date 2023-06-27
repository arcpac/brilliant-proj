import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import NumberContainer from "../components/game/ui/NumberContainer";

function GameOver({ onGameOver, userNumber }) {
  const { width, height } = useWindowDimensions();
  let imageSize = 400;
  if (width > 395) {
    imageSize = 200;
  }
  const imageStyle = {
    height: imageSize,
    width: imageSize,
  }
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.imageContainer,imageStyle]}>
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
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    // dynamic h and w
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
    marginBottom: 10
  },
  numberText: {
    color: "green",
    fontSize: 26,
  },
});
