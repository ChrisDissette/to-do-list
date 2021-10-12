import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { green, purple, blue } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles({

})

const ToDo = (props) => {

    const {toDo, handleToDoDelete, handleToggleComplete, i} = props
    
    const toDoClasses = []

    if (toDo.complete) {
        toDoClasses.push('line-through')
    }

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
                secondary: "#fefefe"
            } 
            
        },
    })



    const classes = useStyles()

    return (
        <div>
            <ThemeProvider theme={theme}>
                <List>
                    <ListItem
                        secondaryAction={
                            <IconButton edge='end' sx={{color: 'text.secondary'}} >
                                <DeleteIcon onClick={(event) => {
                                    handleToDoDelete(i)
                                }}/>
                            </IconButton>
                        }
                    >
                        <ListItemButton role={undefined} dense>
                            <ListItemIcon>
                                <Checkbox 
                                    edge='start'
                                    checked={toDo.complete}
                                    disableRipple
                                    onChange={(event) => {
                                        handleToggleComplete(i)
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText sx={{color: 'text.secondary'}} primary={toDo.text} className={toDoClasses.join(' ')} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </ThemeProvider>
        </div>
    )
}

export default ToDo
