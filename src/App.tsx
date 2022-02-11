// core
import React, {FC} from 'react';

// components
import TableMain from './components/TableMain'

// ui
import {makeStyles, createStyles} from "@mui/styles";


const useStyles = makeStyles(() =>
    createStyles({
        appContainer: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }
    })
)

const App:FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.appContainer}>
            <TableMain />
        </div>
    )
}

export default App;
