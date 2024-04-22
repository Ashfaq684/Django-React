import React from 'react'
import { MdOutlineDeleteOutline, MdEditNote, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'

function Table({todos, setTodos, isLoading}) {
  return (
    <div className='py-2'>
      <table className='w-11/12 max-w-4xl'>
        <thead className='border-b-2 border-black'>
          <tr>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Checkbox</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>To Do</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Data Created</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? <div>Is Loading</div> :
            <>
              {todos.map((todItem, index) => {
                return (
                  <tr key={todItem.id} className='border-b border-black'>
                    <td className='p-3'>
                      <span className='inline-block cursor-pointer'><MdOutlineCheckBox /></span>
                    </td>
                    <td className='p-3 text-sm'>{todItem.body}</td>
                    <td className='p-3 text-sm'>
                      <span className='p-1.5 text-xs font-medium tracking-wider rounded-md bg-green-300'>done</span>
                    </td>
                    <td className='p-3 text-sm'>22-04-24</td>
                    <td className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
                      <span className='text-xl cursor-pointer'><MdEditNote /></span>
                      <span className='text-xl cursor-pointer'><MdOutlineDeleteOutline /></span>
                    </td>
                  </tr>
                )
              })
              }
            </>
          }
        </tbody>
      </table>
    </div>
    
  )
}

export default Table