import React from 'react'

type pageProps = {
    params : {
        todoid : string
    }

}

function TodoPage({params : {todoid}} : pageProps) {
  return (
    <div>TodoPage:{todoid} </div>
  )
}

export default TodoPage