import React, { useContext } from 'react';
import { Grid , Typography, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SocketContext} from '../SocketContext';

const useStyles = makeStyles((theme) => ({
    
  video: {
      width: '400px',
      [theme.breakpoints.down('xs')]: {
        hight: '200px',
      },
    },
    gridContainer: {
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    paper: {
      borderRadius: 10,
      margin: '20px',
      padding: '5px',
    },
    
  }));

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    const classes = useStyles();
    
    return(
        <Grid container className ={classes.gridContainer}>
            {/* Our own video */}
            {stream && (
                <Paper Paper elevation={10} className={classes.paper} style={{ background: "linear-gradient(to right, #DADDFC , #F0D9FF)"}} >
                  <Grid item xs={12} md={12}>
                  <Typography variant="h6" style={{color:"black", textAlign:"left", margin: "10px"}} gutterBottom>{name || 'Name'}</Typography>
                   <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                   </Grid>
                </Paper>
              )}
              {/* User's video */}
              {callAccepted && !callEnded && (
                <Paper Paper elevation={10} className={classes.paper} style={{ background: "linear-gradient(to right, #F0D9FF , #FBCAFF)"}}>
                  <Grid item xs={12} md={12}>
                    <Typography variant="h6" style={{color:"black", textAlign:"left", margin: "10px"}} gutterBottom>{call.name || 'User A'}</Typography>
                    <video playsInline ref={userVideo} autoPlay className={classes.video}/>
                  </Grid>
                </Paper>
                )}
          </Grid>
    );
};

export default VideoPlayer;