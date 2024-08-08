import { useReducer } from "react";
import "./App.css"
import AddTask from "./AddTask";
import TaskList from "./TaskList";

let nextId = 0;
const initialTasks = [
  
];

const tasksReducer=(tasks,action)=>{
   switch(action.type){
     case 'added':{
       return [...tasks,{
         id:action.id,
         text:action.text,
         done:false
       }]
     }
     case 'deleted':{
      return tasks.filter(t=>t.id !==action.id)
     }
     case 'changed':{
       return tasks.map(t=>{
         if(t.id===action.task.id){
           return action.task
         }else{
           return t;
         }
       })
     }
   }
}

const App=()=>{
  const [tasks,dispatch]=useReducer(tasksReducer,initialTasks);

  const handleAddTask =(text)=>{
    dispatch({
      type:'added',
      id:nextId++,
      text:text
    })
  }
  const handleDelteTask =(taskId)=>{
    dispatch({
      type:'deleted',
      id:taskId,
    })
  }
  const handleChangeTask=(task)=>{
     dispatch({
       type:'changed',
       task:task
     })
  }
  return (
    <>
     <h1 style={{marginLeft:100}}>TODO APP</h1>
     <AddTask onAddTask={handleAddTask}/>
     <TaskList tasks={tasks} 
      onDeleteTask={handleDelteTask}
      onChangeTask={handleChangeTask}
     />
    </>
  );
}
export default App;