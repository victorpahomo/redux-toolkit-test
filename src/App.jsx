import { useDispatch,useSelector } from "react-redux"

function App() {
  const tasksState = useSelector(state => state.tasks)
  console.log(tasksState);
  return (
    <div className="App">
      <h1>Hola</h1>
    </div>
  )
}

export default App
