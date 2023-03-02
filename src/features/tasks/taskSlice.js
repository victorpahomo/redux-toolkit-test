import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Description 1',
    completed: false
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Description 2',
    completed: false
  },
]

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(state, action);
      state.push(action.payload)
    },
    deleteTask: (state, action) => {
      const taskFound = state.find(task => task.id === action.payload)
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1)
      }
    },
    editTask:(state,action) => {
      const {id,title,description} = action.payload
      const foundTask = state.find(task => task.id === id)
      if(foundTask){
        foundTask.title = title
        foundTask.description = description
      }

    }
  },
});

export const { addTask, deleteTask,editTask } = taskSlice.actions

export default taskSlice.reducer