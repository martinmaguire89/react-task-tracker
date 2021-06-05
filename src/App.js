import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: '5th Feb at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'take the dog for a Walk',
      day: '7th Feb at 9:30am',
      reminder: true,
    },
    {
      id: 3,
      text: 'food shopping',
      day: '5th Feb at 11:30pm',
      reminder: false,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
