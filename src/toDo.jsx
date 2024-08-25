

// export default function ToDo({task}){
//   return (
//     <li>Task: {task}</li>
//   )
// }

// ----------- conditional rendering option 1

// export default function ToDo({task, isDone}){
//   if(isDone === true){
//     return <li>Task: {task} is completed</li>
//   }
//   else{
//     return <li>Task: {task} is incomplete</li>
//   }
// }

//------------ conditional rendering option 2

// export default function ToDo({task, isDone}){
//   if(isDone === true){
//     return <li>Task: {task} is completed</li>
//   }
//   return <li>Task: {task} is incomplete</li>
// }


// -----------conditional rendering option 3 (ternery operator)-----

// export default function ToDo({task, isDone}){
//   return (
//     <li>Task: {task} is { isDone ? 'completed' : 'incomplete' } </li>
//   )
// }

//------------ conditional rendering option 4 &&

// export default function ToDo({task, isDone}){
//   return (
//     <li>{task} { isDone && 'completed'} </li>
//   )
// }


//------------ conditional rendering option 5 ||

export default function ToDo({task, isDone}){
  return (
    <li>{task} { isDone || 'incomplete'} </li>
  )
}

