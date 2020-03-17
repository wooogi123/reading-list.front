import React from 'react';

import { useTodosDispatch, Todo } from '../contexts/TodosContext';

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
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className="text" onClick={onToggle}>{todo.text}</span>
      <span className="remove" onClick={onRemove}>(x)</span>
    </li>
  )
}