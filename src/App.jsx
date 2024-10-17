import React, { useState } from 'react'
import "./App.css"

export const App = () => {

  const [Username, setUsername] = useState("")
  const SubmitHandling = (e) => {
    e.preventDefault()
    console.log(Username);
  }

  return (
    <>
      <form onSubmit={(e) => {
        SubmitHandling(e)
      }} >
        <input
        value={Username}
        onChange={(e)=>{
          setUsername(e.target.value)

        }}

          type="text"
          className='px-4  py-2 my-2 mx-4 rounded-md shadow-lg shadow-blue-500/50'
          placeholder='hello' />
        <button className='bg-white p-2 rounded-md m-6'>submit</button>
      </form>

    </>
  )
}
export default App
