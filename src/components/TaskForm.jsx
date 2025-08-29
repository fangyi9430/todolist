import { useState } from "react"

function TaskForm({initialTask = null,  onSubmit }) {
    const [task, setTask] = useState(initialTask || {
        title:'',
        description:'',
        status:'pending'
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setTask({...task, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(task);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type = "text" name = "title" value = {task.title} onChange = {handleChange} placeholder="title" required/>
            <textarea name = "description" value = {task.description} onChange = {handleChange} placeholder="description" />
            {initialTask && (
                <select name = "status" value={task.status} onChange={handleChange}>
                    <option value="pending">pending</option>
                    <option value="completed">completed</option>
                </select>
            )}
            <button type = "submit">
                {initialTask ? 'Update Task' : 'Add Task'}
            </button>
            
        </form>
    );
}

export default TaskForm;