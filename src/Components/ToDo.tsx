import React from 'react';

const TodoDataComponent: React.FC<{ taskCount: { created: number; completed: number; urgent: number } }> = ({
  taskCount,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '15px',
        marginBottom: '20px',
        borderRadius: '10px',
        backgroundColor: '#f8f9fa',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginTop:'20px'
      }}
    >
      <div
        style={{
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#007bff',
        }}
      >
        Created tasks:
        <div style={{ fontSize: '18px', color: '#343a40' }}>{taskCount.created}</div>
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#28a745',
        }}
      >
        Completed tasks:
        <div style={{ fontSize: '18px', color: '#343a40' }}>{taskCount.completed}</div>
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#dc3545',
        }}
      >
        Urgent tasks:
        <div style={{ fontSize: '18px', color: '#343a40' }}>{taskCount.urgent}</div>
      </div>
    </div>
  );
};

export default TodoDataComponent;
