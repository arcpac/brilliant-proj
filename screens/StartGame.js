import {
  Alert,
  Button,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewBase,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Title from "../components/Title";

function StartGame({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
      // alert
      Alert.alert("Invalid number", "Enter a valid number (1 - 99)", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
    }
    onPickNumber(chosenNumber);
  }
  console.log(height);
  const marginTop = height < 395 ? 20 : 100;
  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.container, { marginTop: marginTop }]}>
          <Title>Number Game</Title>
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.instructionText}>Enter a number</Text>
            </View>
            <TextInput
              style={styles.inputNumber}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGame;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 20,
    marginHorizontal: 24,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    elevation: 8,

    justifyContent: "center",
    alignItems: "center",
    //shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
    maxWidth: "80%",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    fontSize: 20,
    color: "#3287da",
  },
  inputNumber: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#3287da",
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
