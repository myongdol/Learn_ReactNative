import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); 

  function startAddGoalHandler() {
    setModalVisible(true);
  };

  function endAddGoalHandler() {
    setModalVisible(false)
  };

  function addGoalHandler(enteredGoal) { 
    setGoals((currentGoals) => [
      ...currentGoals,
      {text: enteredGoal, id: Math.random().toString()}
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    })
  };
 
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='추가' color="#a065ec" onPress={startAddGoalHandler}/>
        <GoalInput 
          visible={modalVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
      <View style={styles.listContainer}>
        <FlatList 
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem 
               text={itemData.item.text}
               id={itemData.item.id}
               onDelete={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }} 
        /> 
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
   flex: 1,
   padding: 50,
   paddingHorizontal: 16,
  },
  listContainer: {
    flex: 6
  },
});
