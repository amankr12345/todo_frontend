import { Grid, List } from "@mui/material"
import TodoItem from '../listItem/listItem'
import axios from 'axios'
import {useEffect,useState} from "react"
const DisplayTodo = () => {
    const [TodoList,setTodoList]=useState([])
    useEffect(() => {
      axios.get('http://localhost:5050/app/get')
      .then(response => setTodoList(response.data))
    })
    return(
        <>
            <Grid container>
                <List >
                    {
                        TodoList.map(
                            todo =><TodoItem 
                                        key={todo._id}
                                        todo={todo}
                                    />
                        )
                    }
                </List>
            </Grid>
        </>
    )
}

export default  DisplayTodo