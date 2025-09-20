import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({})

  const handleclick = () =>{
    alert("hey i am clicked")
  }

  const handleclick2 = () =>{
    alert("why you click me")
  }
  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
    <div className="button">
      <button onClick={handleclick}>Click me</button>
    </div>
    <div className="button2">
      <button onClick={handleclick2}>don't click me</button>
    </div>


      <input type="text" name='email' value={form.email?form.email:"" } onChange={handleChange} />
      <input type="text" name='phone' value={form.phone?form.phone:"" } onChange={handleChange} />
    </>

  )
}

export default App
