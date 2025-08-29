import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TaskDetailPage from './pages/TaskDetailPage';
import { mockTasks } from './data/mockTasks';

function App() {
  // 初始化状态，优先使用localStorage
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('tasks');
      return saved ? JSON.parse(saved) : mockTasks;
    } catch {
      return mockTasks;
    }
  });

  // 当任务改变时保存到localStorage
  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('data saving failed:', error); 
    }
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), status: 'pending' }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <HomePage 
              tasks={tasks} 
              addTask={addTask} 
              updateTask={updateTask} 
              deleteTask={deleteTask} 
            />
          } />
          <Route path="task/:taskId" element={
            <TaskDetailPage 
              tasks={tasks} 
              updateTask={updateTask} 
            />
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;