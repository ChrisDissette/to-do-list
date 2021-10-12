import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import {useState} from 'react'




const useStyles = makeStyles({
    field: {
        margin: 20,
        display: 'block',
        height: 60
    },
    button: {
        height:40,
    },
    errorMessage: {
        fontColor: 'white'
    },
})


const theme = createTheme({
    palette: {
        primary: {
            main: '#902bf5',
        },
        secondary: {
            main: '#fc7b54',
        },
        error: {
            main: '#6c6c6c'
        },
        text: {
            primary: "#fefefe",
            secondary: "#fefefe"
        } 
    },
})



const Form = (props) => {
    
    
    const {handleNewToDoSubmit, setNewToDo, newToDo, setToDoError, toDoError} = props
    const classes = useStyles()
    
    const errorText = []
    let helperMessage = ""
    
    if (newToDo.length>80) {
        errorText.push('error-message')
        helperMessage="Try entering fewer characters"
    }
    return (
        <ThemeProvider theme={theme} >
            <div>
                    <form noValidate autoComplete="off" onSubmit={(event) =>{
                        handleNewToDoSubmit(event)
                    }}> 
                        <TextField
                            variant='standard'
                            className={classes.field}
                            // color='text.primary'
                            // sx={{color: 'text.secondary'}}
                            color='primary'
                            required
                            error={toDoError}
                            id="outlined-required"
                            helperText={helperMessage}
                            label="What do you have to do today?"
                            value={newToDo}
                            fullWidth
                            onChange={(event) => {
                                setNewToDo(event.target.value)
                            }}
                        />
                        <Typography variant="caption" display="block" textAlign='right'>
                        <span style={{color:'#fefefe'}}> <span className={errorText}>{newToDo.length}</span>/80</span>
                        </Typography>
                        <Button className={classes.button} fullWidth type='input' variant='contained' sx={{marginTop:5}} >Add</Button>
                    </form>
            </div>
        </ThemeProvider>
        
    )
}

export default Form
