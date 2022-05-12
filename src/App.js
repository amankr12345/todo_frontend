import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Modify from './ModifyTodo/modifyTodo'
import HomePage from './pages/HomePage'

function App(){
  return(
  <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='modify/:_id' element={<Modify/>}/>
      
    </Routes>
  </>
  )

}
export default App