import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(itemDataProp) {
 return (
    <View style={styles.goalItem}>
        <Pressable 
          android_ripple={{color: '#210644'}}
          onPress={itemDataProp.onDelete.bind(this, itemDataProp.id)}
          style={({pressed})=> pressed && styles.pressedItem}
        >
          <Text style={styles.textColor}>{itemDataProp.text}</Text>
        </Pressable>
    </View>

 )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 4,
        borderRadius: 15,
        backgroundColor: '#437299',
      },
      textColor: {
        color: 'white',
        padding: 10,
      },
      pressedItem: {
        opacity: 1,
      } 
})