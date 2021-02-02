le 28 janvier 2021
 
## Installation de library:
 # INstall the command line tools
$ npm install --global expo-cli

# Create a new project 
$ expo init my-project

# générator ID unique
$npm install uuid
import { v4 as uuidv4 } from "uuid" ;
# dans pour certaine config matérielle
$ npm install --save react-native-get-random-values
$ npx pod-install
import "react-native-get-random-values";


## REACT NATIVE

Glorian Bikoumou 16 h 29
https://flexboxfroggy.com/#fr
flexboxfroggy.com
Flexbox Froggy
A game for learning CSS flexbox (261 ko)
https://flexboxfroggy.com/images/screenshot.png

Glorian Bikoumou 16 h 56

# Dans APP.JS

import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
const [inputValue, setInputValue] = useState("");
const [todos, setTodos] = useState([]);

const handleOnChangeInput = (enteredValue) => {
setInputValue(enteredValue);
};

const addTodo = () => {
setTodos([...todos, inputValue]);
setInputValue("");
};
return (
<View style={styles.container}>
<View style={styles.secondContainer}>
<TextInput
          style={styles.input}
          placeholder="todo"
          value={inputValue}
          onChangeText={handleOnChangeInput}
        />
<Button title="AJouter" onPress={addTodo} />
</View>
<View>
{todos.map((todo, index) => {
return <Text key={todo + index}>{todo}</Text>;
})}
</View>
</View>
);
}
const styles = StyleSheet.create({
container: {
padding: 30,
},
secondContainer: {
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
},
input: {
width: "50%",
borderColor: "black",
borderWidth: 1,
margin: 10,
},
});

## le 29 janvier suite l'application First App react native

a
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
StyleSheet,
Text,
View,
Button,
TextInput,
FlatList,
} from "react-native";

export default function App() {
const [inputValue, setInputValue] = useState("");
const [todos, setTodos] = useState([]);

const handleOnChangeInput = (enteredValue) => {
setInputValue(enteredValue);
};

const addTodo = () => {
if (inputValue === "") return;
setTodos([...todos, { id: uuidv4(), value: inputValue }]);
setInputValue("");
};
const renderItem = (item) => {
console.log(item);
return (
<View style={styles.todoItem}>
<Text>{item.item.value}</Text>
</View>
);
};
return (
<View style={styles.container}>
<View style={styles.secondContainer}>
<TextInput
          style={styles.input}
          placeholder="todo"
          value={inputValue}
          onChangeText={handleOnChangeInput}
        />
<Button title="AJouter" onPress={addTodo} />
</View>
<FlatList
data={todos}
keyExtractor={(item) => item.id}
renderItem={renderItem} ></FlatList>
{/_ <ScrollView>
{todos.map((todo, index) => {
return (
<View key={todo + index} style={styles.todoItem}>
<Text>{todo}</Text>
</View>
);
})}
</ScrollView> _/}
</View>
);
}
const styles = StyleSheet.create({
container: {
padding: 30,
},
secondContainer: {
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
},
input: {
width: "50%",
borderColor: "black",
borderWidth: 1,
margin: 10,
},
todoItem: {
padding: 10,
backgroundColor: "#ccc",
justifyContent: "center",
alignItems: "center",
borderWidth: 3,
borderColor: "black",
marginVertical: 10,
},
});
coche_blanche
yeux
alléluia

## AUTRE RELEASE DE FIRST APP

Glorian Bikoumou 12 h 30
# App.js
12 h 30
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { StyleSheet, View, FlatList } from "react-native";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
export default function App() {
const [todos, setTodos] = useState([]);
const addTodo = (inputValue) => {
if (inputValue === "") return;
setTodos([...todos, { id: uuidv4(), value: inputValue }]);
// setInputValue("");
};
const renderItem = (item) => {
return <TodoItem item={item} />;
};
return (
<View style={styles.container}>
<TodoInput addTodo={addTodo} />
<FlatList
data={todos}
keyExtractor={(item) => item.id}
renderItem={renderItem}
/>
{/_ <ScrollView>
{todos.map((todo, index) => {
return (
<View key={todo + index} style={styles.todoItem}>
<Text>{todo}</Text>
</View>
);
})}
</ScrollView> _/}
</View>
);
}
const styles = StyleSheet.create({
container: {
padding: 30,
},
});
12 h 30

## TodoInput.js

12 h 30
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
const TodoInput = (props) => {
const { addTodo } = props;
const [inputValue, setInputValue] = useState("");
const handleOnChangeInput = (enteredValue) => {
setInputValue(enteredValue);
};
const handleAddTodo = () => {
addTodo(inputValue);
setInputValue("");
};
return (
<View style={styles.inputContainer}>
<TextInput
        style={styles.input}
        placeholder="todo"
        value={inputValue}
        onChangeText={handleOnChangeInput}
      />
<Button title="Ajouter" onPress={handleAddTodo} />
</View>
);
};
const styles = StyleSheet.create({
inputContainer: {
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
},
input: {
width: "50%",
borderColor: "black",
borderWidth: 1,
margin: 10,
padding: 5,
},
});
export default TodoInput;

12 h 30

## TodoItem.js

12 h 30
import React from "react";
import { StyleSheet, View, Text } from "react-native";
const TodoItem = (props) => {
const { item } = props;
return (
<View style={styles.todoItem}>
<Text>{item.item.value}</Text>
</View>
);
};
const styles = StyleSheet.create({
todoItem: {
padding: 10,
backgroundColor: "#ccc",
justifyContent: "center",
alignItems: "center",
borderWidth: 3,
borderColor: "black",
marginVertical: 10,
},
});
export default TodoItem;
