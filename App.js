import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import TagName from './Components/ToDoList/TagName'
import SearchFilter from './Components/ToDoList/SearchFilter'

export default function App() {
    return (
      <View style={styles.base}>
        <TagName />
        <SearchFilter />
      </View>
    )
}

const styles = StyleSheet.create({
  base: {
    padding: '7%',
    paddingTop: '17%',
    backgroundColor: '#f6fafb',
    height: '100%',
  },
  text: {
    color: 'white'
  }
})