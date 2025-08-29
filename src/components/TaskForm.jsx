import { useState } from "react"

function TaskForm({ onSubmit }) {
    const [task, setTask] = useState({
        title: '',
        description: '',
        status: 'pending'
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setTask({...task, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(task);
        // 清空表单
        setTask({
            title: '',
            description: '',
            status: 'pending'
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                value={task.title} 
                onChange={handleChange} 
                placeholder="Task title" 
                required
            />
            <textarea 
                name="description" 
                value={task.description} 
                onChange={handleChange} 
                placeholder="Task description" 
            />
            <button type="submit">
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;