import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PieChart from '../Charts/PieChart'

import Typography from '@material-ui/core/Typography';

const employeecount = 15
const targetvalue = 25


function ContactGoal() {
    return (
        <div>
              <Card style={{borderRadius: 20,}}>
                <CardContent >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h5" gutterBottom>
                        Contact Goal
                    </Typography>
                    <MoreVertIcon font='large'/>
                    </div>
                    <Divider/>
                    <Typography variant="subtitle1" gutterBottom>
                     Contacts {employeecount}/{targetvalue}
                    </Typography>

                    
                   
                    <PieChart employeecount={employeecount} targetvalue={targetvalue}/>
                    
                </CardContent>
                <Divider/>
                <CardContent>
                <Typography variant="h5" gutterBottom>
                        Detail Breakdown
                    </Typography>

                    
                    <Typography variant="subtitle1" gutterBottom>
                     Apple Currently has the highest number of contacts.
                    </Typography>

                </CardContent>
                </Card>
        </div>
    )
}

export default ContactGoal
