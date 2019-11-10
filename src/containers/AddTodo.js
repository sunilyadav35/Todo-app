import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import 'bootstrap/dist/css/bootstrap.min.css';
const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className='card card-body my-3'>
        <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <div className='input-group'>
            <div className='input-group-prepend'>
                <div className='input-group-text bg-primary text-white'>
                    <i className='fa fa-check'/>
                </div>
            </div>
            <input ref={node => input = node} className='form-control' placeholder='add a todo'/>
        </div>
        <button type="submit" className='btn btn-block btn-primary mt-3'>
          Add Todo
        </button>
        </form>
    </div>
  )
}

export default connect()(AddTodo)