import React, { useEffect } from 'react';


import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ContactGoal from '../Data/ContactGoal';
import TotalContacts from '../Data/TotalContacts';
import PeopleIcon from '@material-ui/icons/People';
import BusinessIcon from '@material-ui/icons/Business';
// Redux
import { loadUser } from '../../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { getJobs } from '../../redux/actions/jobs'
import { getEmployees } from '../../redux/actions/employees'
import { getCompanies } from '../../redux/actions/companies'
import { getGender } from '../../redux/actions/gender'
import { getRealtionshiphealth } from '../../redux/actions/realtionshiphealth'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderRadius: 20,
    },
  }));

function Dashboard() {
    const classes = useStyles();
    const employeecount = 15


  const username = useSelector(state => state.auth.user.username)
  const employees = useSelector(state => state.employees.employees)
  const contactcount = employees.length
  const employeecompanies = employees.map((row) => (
    row.company_name
  ));
  const [goaltitle, setGoalTitle] = React.useState('Expanding Contacts');
  const [subtitle, setGoalSubTitle] = React.useState('Contacts');
  const [targetvalue, setTargetValue] = React.useState(50);
  const targetpercent = contactcount / targetvalue * 100

    const HandleSortCompany = (arr) => {
      return arr.sort((a,b) =>
      arr.filter(v => v===a).length
    - arr.filter(v => v===b).length
    ).pop();

    }
  const companywithmostjobs = HandleSortCompany(employeecompanies)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
    dispatch(getJobs())
    dispatch(getEmployees())
    dispatch(getCompanies())
    dispatch(getGender())
    dispatch(getRealtionshiphealth())
  }, []);  

    
    return (
        <div className={classes.root}>
          
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                    Good Morning, {username}
                    </Typography>
                   
                    
                    
                    <Typography variant="subtitle1" gutterBottom>
                    Here's what's happening with your projects today
                    </Typography>
                    </Grid>
                   
                    <Grid item xs={12} md={3}>
                        <TotalContacts title={"Contacts"} value={contactcount} secondarytext={"Returns a count of contacts in database."} displayicon={PeopleIcon}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TotalContacts title={"Company with most contacts"} value={companywithmostjobs} secondarytext={"Returns list of company with the most contacts."} displayicon={BusinessIcon}/>
                    </Grid>
                   </Grid> 
                    
                    
                  <Grid container spacing={3}>
                  <Grid item xs={12}>
                  <Typography variant="h5" gutterBottom>
                    Current Targets
                    </Typography>
                  
                    </Grid>
                  <Grid item xs={12} md={3}>
                 
                  <ContactGoal SetTargetValue={setTargetValue} goaltitle={goaltitle} subtitle={subtitle} targetvalue={targetvalue} currentvalue={contactcount} breakdown={targetpercent} buttontitle={"The current goal is to acheive 50 contacts."}/>
                    </Grid>

                    </Grid>

        </div>
    )
}

export default Dashboard
