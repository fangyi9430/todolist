import { Link } from 'react-router-dom';
import TaskForm from './TaskForm';

function TaskList({ tasks, onToggleStatus, onDelete, onUpdate, editingTaskId, onEditStart, onEditCancel }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks yet. Add your first task!</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className={`task-item ${task.status}`}>
            {editingTaskId === task.id ? (
              <div className="task-edit-form">
                <TaskForm 
                  initialTask={task} 
                  onSubmit={(updatedTask) => onUpdate({...updatedTask, id: task.id})}
                />
                <button onClick={onEditCancel} className="btn-cancel">
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <div className="task-header">
                  <div className="task-info">
                    <h3>
                      <Link to={`/task/${task.id}`}>{task.title}</Link>
                    </h3>
                    <p>{task.description}</p>
                  </div>
                  <span className="task-status">{task.status}</span>
                </div>
                <div className="task-actions">
                  <button 
                    onClick={() => onEditStart(task.id)}
                    className="btn-edit"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => onToggleStatus(task.id)}
                    className="btn-toggle"
                  >
                    {task.status === 'completed' ? 'Mark Pending' : 'Mark Complete'}
                  </button>
                  <button 
                    onClick={() => onDelete(task.id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;