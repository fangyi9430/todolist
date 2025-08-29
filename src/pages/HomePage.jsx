import { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function HomePage({ tasks, addTask, updateTask, deleteTask }) {
  const [showForm, setShowForm] = useState(false);

  const handleAddTask = (newTask) => {
    addTask(newTask);
    setShowForm(false);
  };

  const handleToggleStatus = (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      updateTask({
        ...task,
        status: task.status === 'completed' ? 'pending' : 'completed'
      });
    }
  };

  return (
    <div className="home-page">
      <div className="page-header">
        <h2>My Tasks</h2>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="btn-primary"
        >
          {showForm ? 'Cancel' : 'Add New Task'}
        </button>
      </div>

      {showForm && (
        <div className="form-container">
          <TaskForm onSubmit={handleAddTask} />
        </div>
      )}

      <TaskList 
        tasks={tasks} 
        onToggleStatus={handleToggleStatus}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default HomePage;