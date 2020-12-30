import {ADD, DELETE} from './action-type';

export const addTodo=()=>{
    return {
        type: ADD
    }
}

export const deleteTodo = () =>{
    return {
        type: DELETE
    }
}