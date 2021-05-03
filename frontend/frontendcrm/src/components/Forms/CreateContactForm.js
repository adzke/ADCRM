import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import { postEmployees } from '../../redux/actions/employees'
import FormControlLabel from '@material-ui/core/FormControlLabel';





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
  boxdiv: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 200,
    height: 200,
    backgroundColor: '#4D4D3D',
    borderRadius: 20,
  },

  buttondiv: {
    
    marginLeft: "auto",
    marginRight: "auto",
    width: 200,
    height: 50,

    borderRadius: 20,
  },

  buttonitem: {
    marginLeft: "auto",
    marginRight: "auto",

  }
}));

export default function CreateContactForm(props) {
    const dispatch = useDispatch();
    const companies = useSelector(state => state.companies.companies)
    const messages = useSelector(state => state.messages.putEmployee)
    const gendername = useSelector(state => state.gender.gender)
    const relationshiphealth = useSelector(state => state.realtionshiphealth.realtionshiphealth)
    const [employee_name, setEmployeeName] = React.useState('');
    const [company_name, setCompanyName ] = React.useState('');
    const [position, setPositionName ] = React.useState('');
    const [email, setEmailName ] = React.useState('');
    const [mobile, setMobile ] = React.useState('');
    const [work, setWork ] = React.useState('');
    const [notes, setNotes ] = React.useState('');
    const [isactive, setActive] = React.useState(true);
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
      setActive(!isactive)
    }
    const notesChange = (event) => {
      setNotes(event.target.value)
    }

    const handleSubmit = event => {
        console.log('form submitted')
        event.preventDefault();
        const data = new FormData() 
        data.append('employee_name', employee_name)
        data.append('company_name', company_name)
        data.append('employee_job_position', position)
        data.append('employee_email', email)
        data.append('employee_mobile_number', mobile)
        data.append('employee_work_number', work)
        data.append('employee_notes', notes)
        data.append('employee_active', isactive)
        data.append('relationshiphealth', relationshipstatus)
        data.append('gender', gender)
     
        dispatch(postEmployees(data));
        
        
    }
    
  const classes = useStyles();

  return (
    <Fragment>
      
       
     {(messages == 'Employee Updated') ? <Redirect to="/contacts/" /> : console.log("Message Not updated") }
         
       
     <form onSubmit={handleSubmit}>
      <div className={classes.root}>
       <Grid container spacing={3}>
      
       <Grid item xs={6}>
         
        <TextField
          id="outlined-full-width"
          label="Employee Name"
          defaultValue={employee_name}
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
        <TextField
        
        label="Company Name"
        select
        style={{ margin: 8 }}
        fullWidth
        value={company_name}
        helperText="Please select Company"
        variant="outlined"
        onChange={companyChange}
        >
      {companies.map((company) => (
       <MenuItem key={company.id} value={company.company_name}>{company.company_name}</MenuItem>
       ))}
                
       </TextField>
        
        <TextField
          id="outlined-full-width"
          label="Company Position"
          defaultValue={position}
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
        
     
          
      
        <Grid item xs={12}>
       
       </Grid>
       
        <Grid item xs={12}>
       
       </Grid>
       
    
        <TextField
        
        label="Gender"
        select
        style={{ margin: 8 }}
        fullWidth
        value={gender}
        helperText="Please select Gender"
        variant="outlined"
        onChange={genderChange}
        >
       {gendername.map((gender) => (
       <MenuItem key={gender.id} value={gender.gender}>{gender.gender}</MenuItem>
       ))}
       </TextField>

       
       <TextField
        
        label="Relationship Status"
        select
        style={{ margin: 8 }}
        fullWidth
        value={relationshipstatus}
        helperText="Please select Gender"
        variant="outlined"
        onChange={relationshipChange}
        >
       {relationshiphealth.map((relate) => (
       <MenuItem key={relate.id} value={relate.relationshiphealth}>{relate.relationshiphealth}</MenuItem>
       ))}
                
       </TextField>
       <FormControlLabel
        style={{ margin: 8 }}
        control={<Checkbox checked={isactive} onChange={activeChange} name="Is Employee Active?" />}
        label="Is employee active?"
      />
      
        
          </Grid> 
          <Grid item xs={6}>
          <div className={classes.boxdiv}>
          <PersonOutlineIcon style={{width: 200, height: 200, color: '#9ACFDD',}}/>
          
          </div>
          <div className={classes.buttondiv}>
          <Button
            
            style={{marginLeft: 50, marginTop: 10}}
            
            type="submit" 
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           Submit
          </Button>
          </div>
          <Divider style={{margin: 50}}/>


        
          

            
        <TextField
          id="outlined-full-width"
          label="Email"
          defaultValue={email}
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
      <Grid container spacing={3}>
        <Grid item xs={6}>
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
        
        <Grid item xs={6}>
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
          </Grid>



          </Grid>
          
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
          </div>

     
      </form>
     
     
      </Fragment>
  );
}
