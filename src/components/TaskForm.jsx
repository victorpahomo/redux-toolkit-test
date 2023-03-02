import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask,editTask } from '../features/tasks/taskSlice'
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: ""
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector(state => state.tasks)


  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (params.id) {
      dispatch(editTask(task))
    }else{
      dispatch(addTask({
        ...task,
        id: uuid(),
      }))
    }


    navigate("/")
  }

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find(task => task.id === params.id))
        
    }
  },[])
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Title"
        onChange={handleChange}
        value={task.title}
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={task.description}
      ></textarea>
      <button>Save</button>
    </form>
  );
}

export default TaskForm