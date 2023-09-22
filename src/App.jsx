import { useState } from 'react'
import AddTodo from './components/AddTodo'
import './App.css'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h6 className='text-white m-auto text-center' >Redux toolkit</h6>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
