import {useEffect,useState } from 'react'
//import logo from './logo.svg'
import './App.css'
//import { useEffect } from 'react';



function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
  
    fetch("http://localhost:8080/todos")
    .then((d) =>d.json())
      .then((data) => {
      setTodos(data)
    });
  }, []);
    return <div className='App'>
      {todos.map((todo) => (
        <h1>{todo.title}</h1>
    
      ))}
      </div>
}



  

export default App;
