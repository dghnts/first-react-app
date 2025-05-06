import React from 'react';

import './TodoItem.css';

function TodoItem(props) {
    return (
        <li>
            {props.title}
        </li>
    );
}

export default TodoItem;