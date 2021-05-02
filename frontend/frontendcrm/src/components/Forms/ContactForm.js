import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';


import { useDispatch, useSelector } from 'react-redux'
import { postEmployees } from '../../redux/actions/employees'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    
  },
}));

export default function ContactForm(props) {
    const dispatch = useDispatch();
    const companies = useSelector(state => state.companies.companies)
    const [employee_name, setEmployeeName] = React.useState('');
    const [company_name, setCompanyName ] = React.useState('');
    const [position, setPositionName ] = React.useState('');
    const [email, setEmailName ] = React.useState('');
    const [mobile, setMobile ] = React.useState('');
    const [work, setWork ] = React.useState('');
    const [notes, setNotes ] = React.useState('');
    const [isactive, setActive] = React.useState('');
    const [relationshipstatus, setRelationshipStatus] = React.useState('');
    const [gender, setGender] = React.useState('');
   

  
    const employeeChange = (event) => {
      setEmployeeName(event.target.value)
    };

    const companyChange = (event) => {
      setCompanyName(event.target.value)
    };

    const positionChange = (event) => {
      setPositionName(event.target.value)
    };

    const emailChange = (event) => {
      setEmailName(event.target.value)
    };

    const mobileChange = (event) => {
      setMobile(event.target.value)
    };

    const workChange = (event) => {
      setWork(event.target.value)
    };

    const genderChange = (event) => {
      setGender(event.target.value)
    }
    const relationshipChange = (event) => {
      setRelationshipStatus(event.target.value)
    }
    const activeChange = (event) => {
      setActive(event.target.value)
    }
    const notesChange = (event) => {
      setNotes(event.target.value)
    }

    const handleSubmit = event => {
      event.preventDefault();
      const data = new FormData() 
      data.append('employee_name', employee_name)
      data.append('company_name', company_name)
      data.append('employee_job_position', position)
      data.append('employee_email', email)
      data.append('employee_mobile_number', mobile)
      data.append('employee_work_number', work)
      data.append('employee_notes', notes)
   
      dispatch(postEmployees(data));
      
      
  }
    
  const classes = useStyles();

  return (
    <Fragment>
      
       <Container component={Paper} style={{borderRadius: 20,}} spacing={3}>
       <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
     
        <Grid item xs={12}>
        
        <TextField
          id="outlined-full-width"
          label="Employee Name"
          style={{ margin: 8 }}
          helperText="Please enter employee first and last name."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={employeeChange}
        />
        </Grid>
        <Grid item xs={6}>
            <FormControl className={classes.formControl} fullWidth variant='outlined'>
                <InputLabel id="demo-simple-select-label">Company</InputLabel>
                <Select
                
                labelId="demo-simple-select-label"
                id="full-width"
                value={company_name}
                onChange={companyChange}
                >
                  {companies.map((company) => (

                    <MenuItem key={company.id} value={company.company_name}>{company.company_name}</MenuItem>

                  ))}
                
               
            </Select>
        </FormControl>
        </Grid>
        <Grid item xs={6}>
        <TextField
          id="outlined-full-width"
          label="Company Position"
          style={{ margin: 8 }}
          
          helperText="Enter the company job position."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={positionChange}
        />
         
        </Grid>
       <Grid item xs={12}>
       <Divider />
       </Grid>
        <Grid item xs={6}>
        <TextField
          id="outlined-full-width"
          label="Email"
          style={{ margin: 8 }}
          
          helperText="Enter email address."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={emailChange}
        />
        </Grid>
        <Grid item xs={3}>
        <TextField
          id="outlined-full-width"
          label="Mobile"
          style={{ margin: 8 }}
          
          helperText="Enter mobile phone number."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={mobileChange}
         
        />
        </Grid>
        <Grid item xs={3}>
        <TextField
          id="outlined-full-width"
          label="Work"
          style={{ margin: 8 }}
          
          helperText="Enter work phone number."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={workChange}
        />
        </Grid>
        <Grid item xs={12}>
       <Divider />
       </Grid>
       <Grid item xs={12}>
        <TextField
          id="outlined-full-width"
          label="Notes"
          style={{ margin: 8 }}
          
          helperText="Employee notes, enter relevant information."
          fullWidth
          rows='10'
          multiline
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={notesChange}
        />
        </Grid>
        <Grid item xs={12}>
       <Divider />
       </Grid>
       <Grid item xs={4}>
       <FormControl className={classes.formControl} fullWidth variant='outlined'>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                
                labelId="demo-simple-select-label"
                id="gender"
                value={gender}
                onChange={genderChange}
                >
                
            </Select>
        </FormControl>
        </Grid>
        <Grid item xs={4}>
        <FormControl className={classes.formControl} fullWidth variant='outlined'>
                <InputLabel id="demo-simple-select-label">Relationship Status</InputLabel>
                <Select
                
                labelId="demo-simple-select-label"
                id="realtionshipstatus"
                value={relationshipstatus}
                onChange={relationshipChange}
                >
               
            </Select>
        </FormControl>
        </Grid>
        <Grid item xs={4}>
        <FormControl className={classes.formControl} fullWidth variant='outlined'>
                <InputLabel id="demo-simple-select-label">Is Active</InputLabel>
                <Select
                
                labelId="demo-simple-select-label"
                id="isactive"
                value={isactive}
                onChange={activeChange}
                >
                
                
            </Select>
            
        </FormControl>
        
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </Grid>
        
      </Grid>
      </form>
      </Container>
      
      
      </Fragment>
  );
}