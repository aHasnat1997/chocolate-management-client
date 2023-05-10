import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-center border border-3 mt-2 mb-5 py-4'>Chocolate Management System</h1>
      <Outlet />
    </>
  )
}

export default App
