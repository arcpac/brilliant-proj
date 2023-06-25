import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewBase,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Title from "../components/Title";

function StartGame({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

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
  return (
    <>
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
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </>
  );
}

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 50,
    marginHorizontal: 24,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
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
