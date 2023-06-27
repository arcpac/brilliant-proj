import { Dimensions, StyleSheet, Text, View } from "react-native";

function Title({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}
export default Title;
const styles = StyleSheet.create({
  container: {
    borderColor: "#f3f6f4",
    borderWidth: 2,
    textAlign: "center",
    marginHorizontal: 24,
    maxWidth: "80%",
    width: 500,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f3f6f4",
    textAlign: "center",
    padding: 20,
  },
});
