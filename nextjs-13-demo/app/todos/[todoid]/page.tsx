import React from 'react'
import { Todo } from '../../../typings'
import todos from '../page'


type pageProps = {
    params : {
        todoid : string
    }

}

const fetchTodo= async (todoid: string ) =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoid}`,{next : {revalidate:60}});
    const todo = await response.json();
    return todo
}


async function TodoPage({params : {todoid}} : pageProps) {
    const todo : Todo  = await fetchTodo(todoid)


  return (
    <div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg'> 
        <p>
            #{todo.id} : {todo.title}
        </p>
        <p > Completed: {todo.completed ? "Yes" : "No"} </p>
        <p className='border-t border-black mt-5 text-right' >By User : {todo.userId} </p>
         </div>
  )
}

export default TodoPage

export async function generateStaticParams() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos: Todo[] = await response.json();

    const trimmedTodos = todos.splice(0,10)

return trimmedTodos.map((todo) => ({
    todoid : todo.id.toString(),
}))


    }

