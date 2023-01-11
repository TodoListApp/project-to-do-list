
import React, { useState } from 'react'

function CreateTask() {
  const [data, setData] = useState({"text":"", "check":false});
  const handleChange = (event)=>{
  console.log(event)
  }
  return (
    <div>
      <button>
        +
      </button>
    <input type='text' name='text' value={data.text} onChange={handleChange}>
  </input> 
        
    </div>
  )
}

export default CreateTask