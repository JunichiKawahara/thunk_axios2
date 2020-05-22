import React from 'react'
import { Link } from 'react-router-dom'

function SubPage({
    match
}) {
    const id = match.params.id;
    return (
        <div>
            <h2>Hello React</h2>
            <div>{id}</div>
            <hr />
            <Link to="/">Home</Link>
        </div>
    )
}

export default SubPage;