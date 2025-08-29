import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';

function TaskDetailPage({ tasks, updateTask }) {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const foundTask = tasks.find(t => t.id === parseInt(taskId));
    if (foundTask) {
      setTask(foundTask);
    } else {
      navigate('/');
    }
  }, [taskId, tasks, navigate]);

  const handleUpdate = (updatedTask) => {
    updateTask({ ...updatedTask, id: task.id });
    setIsEditing(false);
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div className="task-detail-page">
      <button onClick={() => navigate('/')} className="btn-back">
        ← Back to List
      </button>

      {isEditing ? (
        <div>
          <h2>Edit Task</h2>
          <TaskForm initialTask={task} onSubmit={handleUpdate} />
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="task-detail">
          <h2>{task.title}</h2>
          <p className="task-description">{task.description}</p>
          <p className="task-status">Status: {task.status}</p>
          <button 
            onClick={() => setIsEditing(true)}
            className="btn-edit"
          >
            Edit Task
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskDetailPage;