import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, toggleTodo, deleteTodo } from "./redux/actions";
import TodoItem from "./components/TodoItem";

function App() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAdd = () => {
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  return (
    <Container maxW="md" mt={10}>
      <Heading mb={6} textAlign="center">
        Redux Todo App
      </Heading>
      <VStack spacing={4}>
        <Input
          placeholder="Enter todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleAdd}>
          Add Todo
        </Button>
        <Box w="100%">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => dispatch(toggleTodo(todo.id))}
              onDelete={() => dispatch(deleteTodo(todo.id))}
            />
          ))}
        </Box>
      </VStack>
    </Container>
  );
}

export default App;
