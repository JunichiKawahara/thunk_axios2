import React from 'react'
import { Link } from 'react-router-dom'

const TasksList = ({
    tasks,
    fetch
}) => {
    return (
        <div>
            <h2>tasks</h2>
            <div>{JSON.stringify(tasks)}</div>
            <button onClick={() => fetch()}>fetch</button>
            <hr />
            <ul>
                {tasks.items.map((item) => (
                    <li key={item.id}>
                        <Link to={`/sub/${item.id}`}>
                            {item.title}
                        </Link>
                        &nbsp;-&nbsp;
                        <Link to={`/task/${item.id}`}>
                            {item.description}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TasksList