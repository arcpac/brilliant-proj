import { StyleSheet, Text, View } from "react-native";

function NumberContainer({ children, myStyle }) {
  return (
    <View style={myStyle.container}>
      <Text style={myStyle.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;
