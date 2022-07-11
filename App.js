import { useState } from 'react';
import { StyleSheet, Text, Button, View, FlatList, Alert, StatusBar  } from 'react-native';
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'
export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);
  function addGoalHandler(newGoal){
    if(newGoal !== ""){
      setCourseGoals([
        ...courseGoals, 
        {text: newGoal, id: Math.random().toString()},
      ]);
      setModalVisible(!setModalVisible);
    }else{
      Alert.alert(
        "Error",
        "You can't add an empty goal",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
  }
  function deleteGoal(id){
    setCourseGoals(prevCourseGoals => {
      return prevCourseGoals.filter((goal) => goal.id !== id);
    })
  }
  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button title='Add Goal' onPress={setModalVisible.bind(this, true)}/>
      <GoalInput onAddGoal={addGoalHandler} closeAddGoal={setModalVisible.bind(this, false)} visible={modalVisible}/>
      <View style={styles.section2}>
        <FlatList extraData={courseGoals} data={courseGoals} renderItem={(goal) => {
          return(
            <GoalItem text={goal.item.text} id={goal.item.id} onDeleteItem={deleteGoal} />
          );
        }} >
        </FlatList>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex:1,
  },
  section2:{
    flex:6,
  },
  
});
