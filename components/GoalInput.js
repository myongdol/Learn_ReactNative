import { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal, Image } from "react-native";

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
         <Image style={styles.image} source={require('../assets/images/moko.png')}
            fadeDuration={500}
         />
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
               onPress={props.onCancel}
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
        padding: 16,
        backgroundColor: '#efefef',
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
      },
      image: {
         width: 100,
         height: 100,
         margin: 20,
      }
 })