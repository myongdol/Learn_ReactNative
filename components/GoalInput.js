import { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

function GoalInput(props){
    const [enteredGoal, setEnteredGoal] = useState('');
    
    function userInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoal);
        setEnteredGoal(''); 
    }

    return (
        <View style={styles.inputContainer}>
          <TextInput 
             style={styles.textInput}
             placeholder='목표를 입력 해주세요.'
             onChangeText={userInputHandler}
             value={enteredGoal}
          />
          <Button 
             title='목표 추가'
             onPress={addGoalHandler}
          />
       </View>
    )
 };


 export default GoalInput;


 const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
      },
 })