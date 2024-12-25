import React, { useState } from 'react';

const FormComponent = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setErrorMessage('Task title cannot be empty!');
      return;
    }

    setErrorMessage('');
    onAddTodo(title, isUrgent);
    setTitle('');
    setIsUrgent(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: '20px',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Type Todo here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: '10px',
            marginBottom: '5px',
            width: '90%',
            fontSize: '18px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        />
        {errorMessage && (
          <span style={{ color: 'red', display: 'block', marginTop: '10px' }}>
            {errorMessage}
          </span>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          padding:'20px 20px'
        }}
      >
         <button
          type="submit"
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            width:'50%',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          Add Todo
        </button>
        <label style={{ fontSize: '18px', display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={isUrgent}
            onChange={(e) => setIsUrgent(e.target.checked)}
            style={{ marginRight: '10px' }}
          />
          Urgent
        </label>
      
      </div>
    </form>
  );
};

export default FormComponent;
