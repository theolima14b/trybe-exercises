import React from 'react';

const tasksToDo = ['Limpar a casa', 'Cuidar das crianças', 'Cuidar dos gatos'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Lista de coisas a fazer:</h1>
      <ol>{ tasksToDo.map(tarefa => Task(tarefa))} </ol>
    </div>
  );
}

export default App;
