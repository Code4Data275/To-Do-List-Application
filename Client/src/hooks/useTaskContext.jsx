import React, { useContext } from 'react'
import { TaskContext } from '../Context/TaskContext'

export const useTaskContext = ()=>{
    const context = useContext(TaskContext);

    if(!context){
        throw Error('useTaskContext must be used inside a Task Context Provider');
    }
    return context;
}