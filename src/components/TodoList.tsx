import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/userTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {
    const {page, loading, todos, error, limit} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]
    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    console.log("todos", todos)
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div style={{width: '100%'}}>
            {todos.map(todo =>
                <div>{todo.id} - {todo.title}</div>
            )}

            <div style={{display: "flex", width: '100%'}}>
                {pages.map(p =>
                    <span
                        onClick={() => setTodoPage(p)}
                        style={{
                            padding: '10px 15px',
                            borderRadius: 30,
                            cursor: "pointer",
                            border: p === page ? '4px solid green' : '1px solid green'

                        }}
                    >
                    {p}
                        </span>
                )}
            </div>

        </div>
    );
};

export default TodoList;