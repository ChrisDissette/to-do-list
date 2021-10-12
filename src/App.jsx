import {useState} from 'react'
import './App.css'
import ToDo from './components/ToDo'
import Form from './components/Form'
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const theme = createTheme({
  palette: {
      primary: {
          main: '#902bf5',
      },
      secondary: {
          main: '#fc7b54',
      },
      error: {
        main: '#31bacd'
      },
      text: {
        secondary: "#fefefe"
    } 
  },
})

const useStyles = makeStyles({
  button: {
    height:40,
}
})

function App() {

  const [newToDo, setNewToDo] = useState("")
  const [toDos, setToDos] = useState([])
  const [toDoError, setToDoError] = useState(false)

  const classes = useStyles()

  const handleNewToDoSubmit = (event) => {
    event.preventDefault()

    if (newToDo.length===0 || newToDo.length>80){
      setToDoError(true)
      return
    }

    const toDoItem = {
      text: newToDo,
      complete: false
    }

    setToDos([
      ...toDos,
      toDoItem
    ])
    setToDoError(false)
    setNewToDo("")
  }

  const handleToDoDelete = (delIdx) => {
    const filteredToDos = toDos.filter((toDo, i) => {
      return  i !== delIdx
    })

    setToDos(filteredToDos)
  }

  const handleToggleComplete = (idx) => {
    const updatedToDos = toDos.map((toDo, i) => {
      if(idx === i) {
        toDo.complete = !toDo.complete
      }
      return toDo
    })

    setToDos(updatedToDos)
  }

  const onDeleteHandler = event => {
    let newArr = []
    setToDos(newArr)
  }

  return (
        <ThemeProvider theme={theme}>
          <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' minHeight='100vh' bgcolor='secondary.main'>
            <Typography variant="h1" textAlign='center' width={{ xs: 300, sm: 500, md:600}} px={5} color='text.secondary' gutterBottom >
              To-Do List
              {/* To-Do List <CheckBoxIcon sx={{fontSize:"50px"}} /> */}
            </Typography>
              <Box width={{ xs: 350, sm:500, md:600}}>
                <Form handleNewToDoSubmit={handleNewToDoSubmit} setNewToDo={setNewToDo} newToDo={newToDo} toDoError={toDoError} setToDoError={setToDoError} />
                <Box className={classes.box} maxWidth={600} minHeight={{xs:100, sm:150, md:200}} bgcolor={'primary.light'} mt={2} borderRadius={3}>
                  {
                    toDos.map((toDo, i) => {
                      return (
                        <ToDo 
                          handleToDoDelete={handleToDoDelete} 
                          handleToggleComplete={handleToggleComplete} 
                          toDo={toDo} 
                          i={i} 
                        />
                      )
                    })
                  }
                </Box>
              <Button onClick={onDeleteHandler} className={classes.button} variant='contained' fullWidth sx={{backgroundColor: 'error.main', marginTop: 2}}>Clear</Button>
            </Box>
          </Box>
        </ThemeProvider>
  );
}

export default App;
