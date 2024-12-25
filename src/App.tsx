import React, { useState } from 'react';
import FormComponent from './components/Form';
import TodoDataComponent from './components/ToDo';
import AllTodosComponent from './components/AllToDos';

const App = () => {
  const [todos, setTodos] = useState<Array<{ id: number; title: string; isUrgent: boolean; isCompleted: boolean }>>([]);
  const [taskCount, setTaskCount] = useState({
    created: 0,
    completed: 0,
    urgent: 0,
  });

  const addTodo = (title: string, isUrgent: boolean) => {
    if (!title.trim()) {
      return;
    }

    const newTodo = { id: Date.now(), title, isUrgent, isCompleted: false };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTaskCount((prevCount) => ({
      created: prevCount.created + 1,
      completed: prevCount.completed,
      urgent: isUrgent ? prevCount.urgent + 1 : prevCount.urgent,
    }));
  };

  const toggleComplete = (id: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });

      const completedCount = updatedTodos.filter((todo) => todo.isCompleted).length;

      setTaskCount((prevCount) => ({
        ...prevCount,
        completed: completedCount,
      }));

      return updatedTodos;
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <FormComponent onAddTodo={addTodo} />
      <TodoDataComponent taskCount={taskCount} />
      <AllTodosComponent todos={todos} onToggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
