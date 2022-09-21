import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/UI/Title";
import PrimaryButton from "../components/UI/PrimaryButton";
import COLORS from "../constants/colors";

export default function GameOverScreen (props) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!!</Title>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../images/success.png')} 
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed
        <Text style={styles.highlight}> {props.roundsNumber} </Text>
        rounds to guess the number
        <Text style={styles.highlight}> {props.userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={props.onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: COLORS.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 24
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: COLORS.primary500
  }
});