import { StyleSheet, Dimensions } from "react-native-web";
import { keys, colours } from "./Constants";

const screenWidth = Dimensions.get("window").width;
export const keyWidth = (screenWidth - 800) / keys[0].length;
const keyHeight = keyWidth * 0.8;

export default StyleSheet.create({
  keyboard: {
    alignSelf: "stretch",
    marginTop: "100px",
  },

  row: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
  },

  key: {
    width: keyWidth - 4,
    height: keyHeight - 4,
    margin: 2,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  keyText: {
    colour: colours.black,
    fontSize: 25,
  },
});
