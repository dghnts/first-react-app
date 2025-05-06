import React, { Component } from 'react';
import TodoItem from './TodoItem';

import './TodoList.css';

class TodoList extends Component {
    render() {
        const list = this.props.tasks.map(todo => {
            return <TodoItem {...todo} key={todo.id} />;
        });
        return (
            <div className="TodoList">
                <h2>TODOリスト</h2>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
};

export default TodoList;