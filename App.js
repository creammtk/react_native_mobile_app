import { StyleSheet, Text, View } from "react-native";
import React, { Component, useEffect, useRef, useState } from "react";
import TagName from "./Components/ToDoList/TagName";
import SearchFilter from "./Components/ToDoList/SearchFilter";
import ToDoList from "./Components/ToDoList/ToDoList";
import todos from "./constants/todos";
import fetcher from "./constants/fetcher";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});



export default function App() {
  const [toDoList, setToDoList] = useState([]);
  const [filteredList, setFilteredList] = useState(todos);
  const [filter, setFilter] = useState("");
  const todosLength = useRef(0)
  
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const fetchData = async () => {
    const response = await fetcher.get("todos");
    const { data } = response.data;
    setToDoList(data);
    if (data.length != todosLength.current ) {
      console.log('hi')
      const payload = {
        content: {
          title: "New message from your baby! 📬",
          body: data[data.length - 1].title,
          data: { data: data[data.length - 1] },
        },
        trigger: { seconds: 1 },
      }
      await schedulePushNotification(payload)
    }
    todosLength.current = data.length
  };

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 1000);
    return () => clearInterval(interval)
  }, []);

  useEffect(() => {
    setFilteredList(
      toDoList
        .filter(
          (todo) =>
            todo.title.toLowerCase().includes(filter.toLowerCase()) ||
            todo.detail.toLowerCase().includes(filter.toLowerCase())
        )
        .reverse()
    );
  }, [filter, toDoList]);

  return (
    <View style={styles.base}>
      <TagName pendingTaskNo={filteredList.length} />
      <SearchFilter
        filter={filter}
        setFilter={setFilter}
        setFilteredList={setFilteredList}
        toDoList={toDoList}
      />
      <ToDoList toDoList={filteredList} setToDoList={setToDoList} />
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    padding: "7%",
    paddingTop: "17%",
    backgroundColor: "#f6fafb",
    height: "100%",
  },
  text: {
    color: "white",
  },
});


async function schedulePushNotification(payload) {
  await Notifications.scheduleNotificationAsync(payload);
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}