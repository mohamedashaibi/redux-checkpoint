import {ADD, DELETE} from '../actions/action-type';

const initialeState={
    todos:[
        {
            title: "title",
            message: "message"
        }
    ]
}
export const todo=(state=initialeState,action)=>{
    var newTodo = {title: "ok", message:"message"};

const {type,payload}=action
    switch(type){
        case ADD:
            return {
                todos: state.todos.push(newTodo)
            }
        case DELETE:
            return{
                todos: state.todos.pop()
            }
       default:
           return state
        
    }
    
}