import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getAllNotes } from "../redux/actions/note-entry.actions";
import { getAllNotes } from "../../redux/actions/note-entry.actions";
import Alert from '@mui/material/Alert';
import { Container, CircularProgress, AppBar, Toolbar, createTheme, Typography, ThemeProvider, Grid, Box, List, ListItem } from '@mui/material';
import { } from '@mui/material';


const AppContainer = () => {

    let [loading, setLoading] = useState(false);
    let noteEntries = useSelector(state => state.noteEntry);
    let dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        dispatch(getAllNotes());
    }, []);

    const darkTheme = createTheme({ palette: { mode: 'dark' } });
    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <ThemeProvider theme={darkTheme}>

                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <Typography variant="h6" color="inherit" component="div">
                                My Notes
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    {!noteEntries.success &&
                        <Alert variant="filled" severity="error">
                            {noteEntries.errorMessage}
                        </Alert>
                    }
                    {noteEntries.loading ? <CircularProgress color="inherit" /> : <List mt={2}>
                        <Typography> {noteEntries.entries.map(entry => <ListItem disableGutters key={entry.id}>{entry.text} - {entry.description}</ListItem>)}

                        </Typography></List>}
                </ThemeProvider>
            </Grid>
        </Container >
    );

};

export default AppContainer;