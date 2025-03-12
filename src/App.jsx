import Button from './components/Button'
import { useState, useEffect } from 'react'
import Todo from './components/Todo'
import Test from './components/Test'

export default function App () {
  const [data, setData] = useState(null)

  useEffect(() => {
    getInfo()
  }, [])

  async function getInfo () {
    const response = await fetch('https://dummyjson.com/todos')
    const data = await response.json()
    setData(data)
  }

  return (
    <>
      <div className='container'>
        <p>HelloWorld</p>
        <Button />

        <div className='container-todos'>
          {
                    data && data.todos.map((todo) => <Todo key={todo.id} info={todo} />)
          }
        </div>
        <button disabled>delete</button>
        <p>delete</p>
      </div>
    </>
  )
}
