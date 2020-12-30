import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
const Todos = () => {
   const todos = useSelector(state=>state.todo.todos);
  const dispatch= useDispatch()
    return (
        <div>
            {console.log(todos)}
            <button onClick={()=>dispatch({type:'add'})}>+</button>
           <h1>todos :{todos.map(function(item){
               return <div>
                   {item.title}
                   {item.message}
               </div>;
           })} </h1> 
           <button onClick={()=> dispatch({type:'delete'})}>-</button>

        </div>
    )
}

export default Todos
