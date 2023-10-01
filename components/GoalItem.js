import { StyleSheet, View, Text } from "react-native";

function GoalItem(itemDataProp) {
 return (
    <View style={styles.goalItem}>
        <Text style={styles.textColor}>{itemDataProp.text}</Text>
    </View>
 )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 4,
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#437299',
      },
      textColor: {
        color: 'white',
      } 
})