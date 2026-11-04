
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainE from './components/Main/MainE'
import Layout from './components/Layuot/Layout'

function App() {
let x=createBrowserRouter([
  {path:"/",element:<Layout/> ,children:[
    {index:true, element:<MainE/> },
    
  ]}
])  
  return (
    <>
    <RouterProvider router={x}></RouterProvider>
     
    </>
  )
}

export default App
