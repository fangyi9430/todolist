import { Link } from 'react-router-dom';

function TaskList({ tasks, onToggleStatus, onDelete }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks yet. Add your first task!</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className={`task-item ${task.status}`}>
            <div className="task-content">
              <h3>
                <Link to={`/task/${task.id}`}>{task.title}</Link>
              </h3>
              <p>{task.description}</p>
              <span className="task-status">{task.status}</span>
            </div>
            <div className="task-actions">
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
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;