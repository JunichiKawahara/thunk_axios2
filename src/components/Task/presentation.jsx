import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

const Task = ({
    match,
    task,
    fetchTask
}) => {
    const id = match.params.id
    useEffect(() => {
        fetchTask(id)
    }, [])
    return (
        <div>
            <h2>Task</h2>
            <div>id = {id}</div>
            <p>{JSON.stringify(task)}</p>
            <p>id: {JSON.stringify(task.item.id)}</p>
            <p>title: {JSON.stringify(task.item.title)}</p>
            <p>description: {JSON.stringify(task.item.description)}</p>
            <hr />
            <Link to="/">Home</Link>
        </div>
    )
}

export default Task;