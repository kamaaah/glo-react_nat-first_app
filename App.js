import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { StyleSheet, View, FlatList, Button } from "react-native";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import "react-native-get-random-values";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addTodo = (inputValue) => {
    if (inputValue === "") return;
    setTodos([...todos, { id: uuidv4(), value: inputValue }]);
    // setInputValue("");
  };

  const renderItem = (item) => {
    return <TodoItem item={item} onDelete={deleteItem} />;
  };

  const deleteItem = (item) => {
    const newList = todos.filter((todo) => todo.id !== item.id);
    setTodos(newList);
  };

  const activateModal = () => {
    setModalVisible(true);
  };

  const CloseModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Button title="Ajouter un todo" onPress={activateModal} />
      <TodoInput
        addTodo={addTodo}
        modalVisible={modalVisible}
        CloseModal={CloseModal}
      />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      {/* <ScrollView>
        {todos.map((todo, index) => {
          return (
            <View key={todo + index} style={styles.todoItem}>
              <Text>{todo}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});

/*  **** >Début du projet : 1er version  */
/*  App.js   */
//const renderItem = (item) =>
//     console.log(item);
//     return(
//       <View style={styles.todoItem}>
// 		  <Text>{item.item.value}</Text>
// 	  </View>
//     );
//   };
// 	return (
// 		<View style={styles.container}>
// 			<View style={styles.secondContainer}>
// 				<TextInput
// 					style={styles.input}
// 					placeholder="todo"
// 					value={inputValue}
// 					onChangeText={handleOnChangeInput}
// 				/>
// 				<Button title="Ajouter" onPress={addTodo} />
// 			</View>
// 			<FlatList
// 				data={todos}
// 				renderItem={renderItem}
// 				keyExtractor={(item) => item.id}
// 			></FlatList>
// 			{/* <ScrollView>
// 				{todos.map((todo, index) => {
// 					return (
// 						<View key={todo + index} style={styles.todoItem}>
// 							<Text>{todo}</Text>
// 						</View>
// 					);
// 				})}
// 			</ScrollView> */}
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		padding: 30
// 	},
// 	secondContainer: {
// 		flexDirection: "row",
// 		justifyContent: "center",
// 		alignItems: "center"
// 	},
// 	input: {
// 		width: "50%",
// 		borderColor: "black",
// 		borderWidth: 1,
// 		margin: 30
// 	},
// 	todoItem: {
// 		padding: 30,
// 		backgroundColor: "#ccc",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		borderWidth: 3,
// 		borderColor: "black",
// 		marginVertical: 20
// 	}
