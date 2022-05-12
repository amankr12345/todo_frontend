import { Divider, ListItem, ListItemText} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate} from 'react-router-dom';
import axios from'axios'

const TodoItem = ({todo:{id,item,description,_id}}) => {
    const navigate=useNavigate()
    const handleOnDelete=async () => {
       await  axios.delete(`http://localhost:5050/app/delete/${_id}`)
        .then((response) => console.log(response))
    }
    return(
        <>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={item}
                    secondary={description}
                />
                <EditIcon onClick={()=>navigate(`modify/${_id}`)}/>
                <DeleteIcon onClick={handleOnDelete}/>
                <Divider variant="inset" component="li" />
            </ListItem>
            
        </>
    )
}

export default TodoItem