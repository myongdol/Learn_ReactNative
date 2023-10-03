import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(enteredGoal) { 
    setGoals((currentGoals) => [
      ...currentGoals,
      {text: enteredGoal, id: Math.random().toString()}
    ]);
  };

  function deleteGoalHandler(id) {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    })
  };
 
  return (
    <View style={styles.appContainer}>
        <GoalInput 
          onAddGoal={addGoalHandler}
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
  );
}

const styles = StyleSheet.create({
  appContainer: {
   flex: 1,
   padding: 50,
   paddingHorizontal: 16
  },
  listContainer: {
    flex: 6
  },
});
