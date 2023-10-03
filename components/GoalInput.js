import { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal } from "react-native";

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
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput 
             style={styles.textInput}
             placeholder='목표를 입력 해주세요.'
             onChangeText={userInputHandler}
             value={enteredGoal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button 
               title='목표 추가'
               onPress={addGoalHandler}
            />
            </View>

            <View style={styles.button}>
            <Button 
               title="취소"
            />
            </View>
          </View>
       </View>
      </Modal>
    )
 };


 export default GoalInput;


 const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
      },
      buttonContainer: {
         flexDirection: 'row',
         marginTop: 16,
      },
      button: {
         width: 100,
         marginHorizontal: 8,
      }
 })