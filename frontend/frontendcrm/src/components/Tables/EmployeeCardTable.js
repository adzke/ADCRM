import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CallIcon from '@material-ui/icons/Call';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


import { useSelector} from "react-redux"


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  gridContain: {
      
  }
});

export default function EmployeeCardTable() {
  const employees = useSelector(state => state.employees.employees)
  const classes = useStyles();


  return (
        <Container spacing={3}>
           
          {employees.map(employee => (
            
       
           
            <Grid item xs={12}>
        <Card className={classes.root} style={{borderRadius: 20,}}>
        <CardContent>

            
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            {employee.employee_name}
            </Typography>
            <Typography variant="h5" component="h2">
            {employee.company_name}
            </Typography>
            <List subheader={<ListSubheader></ListSubheader>} className={classes.root} >
            <ListItem>
            <ListItemIcon>
            <EmailIcon />
            </ListItemIcon>
            <ListItemText id="switch-list-label-wifi" primary="Email" />



            <ListItemSecondaryAction>
            <Typography className={classes.pos} color="textSecondary">
            {employee.employee_email}
            </Typography>
            </ListItemSecondaryAction>


            </ListItem>
            <Divider></Divider>
            <ListItem>
            <ListItemIcon>
            <PhoneAndroidIcon  />
            </ListItemIcon>
            <ListItemText id="switch-list-label-wifi" primary="Mobile" />



            <ListItemSecondaryAction>
            <Typography className={classes.pos} color="textSecondary">
            {employee.employee_mobile_number}
            </Typography>
            </ListItemSecondaryAction>


            </ListItem>
            <Divider></Divider>
            <ListItem>
            <ListItemIcon>
            <CallIcon  />
            </ListItemIcon>
            <ListItemText id="switch-list-label-wifi" primary="Work" />



            <ListItemSecondaryAction>
            <Typography className={classes.pos} color="textSecondary">
            {employee.employee_work_number}
            </Typography>
            </ListItemSecondaryAction>


            </ListItem>
            <Divider></Divider>

            </List>
            
            
            
        </CardContent>
        <CardActions>
            <Button size="small">Details</Button>
        </CardActions>
        </Card>
        
        </Grid> 
          
           
          ))}
    </Container>
  );
}