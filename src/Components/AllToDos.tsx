import React from 'react';

const AllTodosComponent = ({ todos, onToggleComplete }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '15px',
            marginBottom: '15px',
            backgroundColor: todo.isCompleted ? '#d4edda' : '#f8d7da',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h3
              style={{
                margin: 0,
                fontSize: '18px',
                color: todo.isCompleted ? '#155724' : '#721c24',
                textDecoration: todo.isCompleted ? 'line-through' : 'none',
              }}
            >
              {todo.title}
            </h3>
            <p
              style={{
                margin: '5px 0',
                fontSize: '14px',
                color: '#6c757d',
              }}
            >
              {todo.isUrgent ? '🚨 Urgent' : 'Not Urgent'}
            </p>
          </div>
          <button
            onClick={() => onToggleComplete(todo.id)}
            style={{
              padding: '10px 15px',
              backgroundColor: todo.isCompleted ? '#ffc107' : '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'background-color 0.3s ease',
            }}
          >
            {todo.isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllTodosComponent;
