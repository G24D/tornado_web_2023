import { useState } from 'react'
import Ex01 from '../components/Ex01'
import Ex02 from '../components/Ex02'
import Ex05 from '../components/Ex05'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ex01 />
      <Ex02 />
      <Ex05 />
    </>
  )
}

export default App
