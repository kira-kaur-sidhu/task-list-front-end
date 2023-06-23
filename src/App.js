import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import {useState, useEffect} from 'react';
import axios from "axios";
import NewTaskForm from './components/NewTaskForm.js';

// const TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];

const App = () => {
  
  const [tasks, setTasks] = useState([]);
  const API = 'https://task-list-api-c17.onrender.com/tasks';

  const getData = () => {
    axios
    .get(API)
    .then((result) => {
      setTasks(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const changeComplete = (id, isComplete) => {
    const completeStatus = isComplete ? 'mark_incomplete' : 'mark_complete';
    axios
      .patch(`${API}/${id}/${completeStatus}`)
      .then((result) => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTask = (id) => {
    axios
      .delete(`${API}/${id}`)
      .then((result) => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postTask = (newTaskData) => {
    axios
    .post(API, newTaskData)
    .then((result) => {
      console.log(result.data);
      getData();
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={tasks} changeComplete={changeComplete} deleteTask={deleteTask}/></div>
        <div><NewTaskForm addTask={postTask}/></div>
      </main>
    </div>
  );
};

export default App;
