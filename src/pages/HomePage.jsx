import { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function HomePage({ tasks, addTask, updateTask, deleteTask }) {
  const [showForm, setShowForm] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);

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

  const handleEditTask = (updatedTask) => {
    updateTask(updatedTask);
    setEditingTaskId(null);
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
        onUpdate={handleEditTask}
        editingTaskId={editingTaskId}
        onEditStart={setEditingTaskId}
        onEditCancel={() => setEditingTaskId(null)}
      />
    </div>
  );
}

export default HomePage;