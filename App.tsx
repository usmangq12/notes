import { StyleSheet, View } from "react-native";
import { Appbar, List } from "./components";
import { Box, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    minHight: "100%",
  },
  floatinBtn: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Box pt={30}>
        <Appbar />
        <List />
        <FAB
          style={styles.floatinBtn}
          icon={(props) => <Icon name="plus" {...props} />}
        />
      </Box>
    </View>
  );
}
