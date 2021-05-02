import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PieChart from '../Charts/PieChart'

import Typography from '@material-ui/core/Typography';


function ContactGoal(props) {
    return (
        <div>
              <Card style={{borderRadius: 20,}}>
                <CardContent >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h5" gutterBottom>
                       {props.goaltitle}
                    </Typography>
                    <MoreVertIcon font='large'/>
                    </div>
                    <Divider/>
                    <Typography variant="subtitle1" gutterBottom>
                    {props.subtitle} {props.currentvalue}/{props.targetvalue}
                    </Typography>

                    
                   <div>
                    <PieChart employeecount={props.currentvalue} targetvalue={props.targetvalue}/>
                    
                    </div>
                </CardContent>
                <Divider/>
                <CardContent>
                <Typography variant="h5" gutterBottom>
                       {props.breakdown}
                    </Typography>

                    
                    <Typography variant="subtitle1" gutterBottom>
                    {props.buttontitle}
                    </Typography>

                </CardContent>
                </Card>
        </div>
    )
}

export default ContactGoal
