import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTask} from '../features/tasks/taskSlice'
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [task, settask] = useState(
    {
      title: "",
      description: ""
    }
  )

  const handleChange = (e) => {
    settask({
      ...task,
      [e.target.name]: e.target.value,
    })
    console.log(e.target.name, e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTask({
      ...task,
      id: uuid(),
    }))
    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit} >
      <input name="title" onChange={handleChange} type="text" placeholder="Title" />
      <textarea name="description" onChange={handleChange} type="text" placeholder="Description"></textarea>
      <button>Save</button>
    </form>
  )
}

export default TaskForm