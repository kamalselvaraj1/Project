import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

const useStyles = makeStyles((theme) => ({
    appBar: {
        
        borderRadius: 20,
        margin: '15px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '98%',
        height:'40px',
      
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    typography: {
        fontSize: '20px',
    },
}));

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
           <AppBar className={classes.appBar} position="static" style={{ background: "linear-gradient(to right, #FF5DA2 , #B983FF, #94DAFF, #94B3FD)"}} >
              <Typography className={classes.typography} variant="h2">Video Chat</Typography> 
            </AppBar> 
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    );
}

export default App