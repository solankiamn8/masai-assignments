import { Box, Button, Flex, Text } from "@chakra-ui/react";

const TodoItem = ({ todo, onToggle, onDelete }) => (
  <Flex
    justifyContent="space-between"
    alignItems="center"
    p={2}
    bg={todo.status ? "green.100" : "gray.100"}
    borderRadius="md"
    mb={2}
  >
    <Text as={todo.status ? "s" : undefined}>{todo.title}</Text>
    <Flex gap={2}>
      <Button size="sm" onClick={() => onToggle(todo.id)} colorScheme="yellow">
        Toggle
      </Button>
      <Button size="sm" onClick={() => onDelete(todo.id)} colorScheme="red">
        Delete
      </Button>
    </Flex>
  </Flex>
);

export default TodoItem;
