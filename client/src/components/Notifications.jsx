import React, {useContext} from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);
     
    return(
        <>
            {call.isReceivedCall && !callAccepted && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <h1  style={{ fontFamily:"arial",  }} >{call.name} is calling &nbsp; </h1>
                        <Button variant="contained" color="primary"  style={{ background: "#5C7AEA"}} onClick={answerCall}>
                            Answer
                        </Button>
                </div>   
            )} 
        </>
    )
}

export default Notifications