import React from 'react';
import { useTodosDispatch, Todo } from '../contexts/TodosContext';
import styled from '@emotion/styled';

const List = styled.li<TodoItemProps>`
  color: ${props => (props.todo.done ? '#999999' : '')};
  text-decoration: ${props => (props.todo.done ? 'line-through' : '')};
`;

const Text = styled.span`
  cursor: pointer;
`;

const Remove = styled.span`
  color: red;
  margin-left: 4px;
  cursor: pointer;
`;

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();

  function onToggle() {
    dispatch({
      type: 'TOGGLE',
      id: todo.id
    });
  }

  function onRemove() {
    dispatch({
      type: 'REMOVE',
      id: todo.id
    });
  }

  return (
    <List todo={todo}>
      <Text onClick={onToggle}>{todo.text}</Text>
      <Remove onClick={onRemove}>(X)</Remove>
    </List>
  );
}

export default TodoItem;