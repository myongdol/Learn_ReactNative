import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(itemDataProp) {
 return (
  <Pressable onPress={itemDataProp.onDelete.bind(this, itemDataProp.id)}>
    <View style={styles.goalItem}>
        <Text style={styles.textColor}>{itemDataProp.text}</Text>
    </View>
  </Pressable>
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