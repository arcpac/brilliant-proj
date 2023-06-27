import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function LogItem(props) {
  return (
    <View style={styles.logItem}>
      <View>
        <Text style={styles.logtext}>{props.data.item.number}</Text>
      </View>
      {props.data.item.direction === "lower" ? (
        <View style={styles.logtext}>
          <AntDesign name="downcircleo" size={24} color="red" />
        </View>
      ) : (
        <View style={styles.logtext}>
          <AntDesign name="upcircleo" size={24} color="green" />
        </View>
      )}
    </View>
  );
}

export default LogItem;
const styles = StyleSheet.create({
  logItem: {
    margin: 8,
    padding: 20,
    borderRadius: 4,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
  },
  logtext: {
    color: "#444444",
    marginHorizontal: 5,
    fontSize: 20
  },
  logSymbol: {
    marginHorizontal: 5,
  },
});
