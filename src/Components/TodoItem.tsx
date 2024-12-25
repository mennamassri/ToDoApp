import React from 'react';

const TodoItem = ({
  todo,
  onToggleComplete,
}) => {
  return (
    <div
      style={{
        padding: '15px',
        marginBottom: '15px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        backgroundColor: todo.isUrgent ? '#ffeeba' : '#f8f9fa',
        textDecoration: todo.isCompleted ? 'line-through' : 'none',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '16px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => onToggleComplete(todo.id)}
          style={{
            marginRight: '15px',
            width: '18px',
            height: '18px',
            cursor: 'pointer',
          }}
        />
        <span>{todo.title}</span>
      </div>
      <span
        style={{
          fontSize: '14px',
          color: todo.isUrgent ? '#dc3545' : '#6c757d',
          fontWeight: 'bold',
        }}
      >
        {todo.isUrgent ? 'Urgent' : ''}
      </span>
    </div>
  );
};

export default TodoItem;

