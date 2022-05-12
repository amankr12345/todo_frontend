import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"
import axios from 'axios'

const AddTodo = () => {
    const [todo, setTodo] = useState({})

    const handleChange = (event) =>{
        const {name,value} = event.target
        setTodo({...todo,[name]:value})
    } 

    const handleSubmit = () => {
        axios.post('http://localhost:5050/app/add', todo)
        .then(response => console.log(response.data))
        alert("added successfully")
    }
    
    return(
        <>
            <Grid container spacing={2}>
                <Grid item lg={12} mx={24} >
                    <TextField 
                        name="item" 
                        label="Todo Name" 
                        variant="filled"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item lg={12} mx={24} >
                    <TextField 
                        name="description" 
                        label="Todo Description" 
                        variant="filled" 
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item lg={12} mx={29} >
                    <Button 
                        onClick = {handleSubmit}
                        variant="contained"
                    >Add Todo
                    </Button>
                </Grid>
            </Grid>
        
        </>
    )
}

export default AddTodo