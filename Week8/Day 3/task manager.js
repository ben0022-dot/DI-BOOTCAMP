import React, { createContext, useContext, useReducer } from 'react';

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state.tasks, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TASK':
      return state.tasks.map(task => 
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case 'DELETE_TASK':
      return state.tasks.filter(task => task.id !== action.payload);
    case 'EDIT_TASK':
      return state.tasks.map(task => 
        task.id === action.payload.id ? { ...task, text: action.payload.text } : task
      );
    case 'FILTER_TASKS':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, { tasks: [], filter: 'all' });

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);

//app.js
import React from 'react';
import { TaskProvider, useTasks } from './TaskContext';
import TaskList from './TaskList';
import TaskInput from './TaskInput';
import './App.css';

const AppContent = () => {
  const { state } = useTasks();

  const filteredTasks = state.filter === 'all' 
    ? state.tasks 
    : state.filter === 'completed' 
      ? state.tasks.filter(t => t.completed)
      : state.tasks.filter(t => !t.completed);

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskInput />
      <div className="filters">
        <button onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'all' })}>All</button>
        <button onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'active' })}>Active</button>
        <button onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'completed' })}>Completed</button>
      </div>
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

function App() {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  );
}

export default App;

//task list.js
// TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => (
  <ul>
    {tasks.map(task => <TaskItem key={task.id} task={task} />)}
  </ul>
);

export default TaskList;

//task item.js
// TaskItem.js
import React, { useState, useRef } from 'react';
import { useTasks } from './TaskContext';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);
  const { dispatch } = useTasks();

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleSave = () => {
    if (inputRef.current.value.trim()) {
      dispatch({ type: 'EDIT_TASK', payload: { id: task.id, text: inputRef.current.value } });
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') setIsEditing(false);
  };

  return (
    <li className={task.completed ? 'completed' : ''}>
      {isEditing ? (
        <input
          ref={inputRef}
          defaultValue={task.text}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <>
          <span onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}>
            {task.text}
          </span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;

//task input.js
import React, { useState } from 'react';
import { useTasks } from './TaskContext';

const TaskInput = () => {
  const [text, setText] = useState('');
  const { dispatch } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: 'ADD_TASK', payload: text });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskInput;

//