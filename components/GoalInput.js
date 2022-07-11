import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'

export default function GoalInput(props) {
    const [goalInput, setGoalInput] = useState('')
    function addGoal(){
        props.onAddGoal(goalInput);
        setGoalInput('');
    }
    function closeAddGoal(){
        props.closeAddGoal();
    }
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
      >
        <View style={styles.section1}>
            <Image source={require('../assets/goal.png')} style={styles.goalIcon} />
            <TextInput 
            style={styles.textInput} 
            placeholder='Enter goal here'
            onChangeText={setGoalInput}
            value={goalInput}
            />
            <View style={{flexDirection: 'row',marginTop:10}}>
                <View style={styles.button}>
                    <Button title='Add Goal' onPress={addGoal}/>
                </View>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={closeAddGoal} />
                </View>
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    section1: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 25,
        paddingHorizontal:10,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        backgroundColor: '#288ba8',
      },
      textInput: {
        padding:10,
        borderRadius: 10,
        backgroundColor: '#C7E1E8',
        width: '70%',
        marginRight: 10,
      },
      button:{
        width: 100,
        marginHorizontal: 30,
      },
      goalIcon: {
        width: 200,
        height: 200,
      },
})