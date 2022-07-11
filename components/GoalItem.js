import { View, Text, StyleSheet, Pressable, Animated } from 'react-native'
import React from 'react'

export default function GoalItem(props) {
    const animated = new Animated.Value(1);
    const fadeIn = () => {
        Animated.timing(animated, {
            toValue: 0.7,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };
    const fadeOut = () => {
        Animated.timing(animated, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };
  return (
    <Pressable onPressIn={fadeIn} onPressOut={fadeOut} onPress={props.onDeleteItem.bind(this, props.id)}>
        <Animated.View style={ [styles.goalItem, { opacity: animated }] }>
                <Text style={{color: 'white',padding: 10,}}>{props.text}</Text>
        </Animated.View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    goalItem: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#206F86',
      },
      pressedItem:{
        backgroundColor: '#dddddd',
      }
})