import { Button, Grid, TextField ,Box,Modal,Typography} from "@mui/material"
import axios from 'axios'
import {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const Modify=()=>{
    const params=useParams()
    const Navigate=useNavigate()
    const [update,setUpdate]=useState({})
    const [open, setOpen] = useState(false);
    const handleChange = (event) =>{
        const {name,value} = event.target
        setUpdate({...update,[name]:value})
    }
    
  const handleOpen =async () => {
    await axios.put(`http://localhost:5050/app/update/${params._id}`,update)
    .then(res=>console.log(res))
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    Navigate('/')
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
                <Button onClick={handleOpen}>Update</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        aler!!!!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Updated items successfully
                    </Typography>
                    </Box>
                </Modal>
            </Grid>
        
        </>
    )
}

export default Modify