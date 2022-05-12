import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import AddTodo from '../addTodo/addTodo'
import DisplayTodo from '../DisplayTodo/displayTodo'

function HomePage(){
  return(
    <>
      <Container fixed>
          <Box sx={{bgcolor:'#cfe8fc',height:'100vh'}}>
            <h1
              style ={{textAlign:'center'}}>TODO APP
            </h1>
            <Grid lg={6}>
              <h2 style={{textAlign:'center'}}>ADD TODO</h2>
              <AddTodo/>
            </Grid>
            <Grid lg={6}>
              <h2 style={{textAlign:'center'}}>Display TODO</h2>
              <DisplayTodo/>
            </Grid>
          </Box>
      </Container>
    </>
  )
}
export default HomePage