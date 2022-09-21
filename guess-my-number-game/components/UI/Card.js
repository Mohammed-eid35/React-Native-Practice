import { StyleSheet, View } from "react-native"
import COLORS from "../../constants/colors";

export default function Card({ children }) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: COLORS.primary800,
    borderRadius: 8,
    elevation: 4, // android shadow
    shadowColor: 'black', // IOS shadow
    shadowOffset: { width: 0, height: 2 }, // IOS shadow
    shadowRadius: 6, // IOS shadow
    shadowOpacity: 0.25 // IOS shadow
  }
});