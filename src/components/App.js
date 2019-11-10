import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
      <div className='container'>
          <div className='row'>
              <div className='col-10 mx-auto col-md-8 mt-4'>
                  <h3 className='text-capitalize text-center'>todo's </h3>
                  <AddTodo />
                  <VisibleTodoList />
                   <Footer />
              </div>
          </div>
      </div>
    
  
)

export default App