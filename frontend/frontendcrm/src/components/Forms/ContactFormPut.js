import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux'
import { putEmployee, checkboxChange } from '../../redux/actions/employees'
import { Redirect } from 'react-router-dom';


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
  buttonitem: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttondiv: {
    
    marginLeft: "auto",
    marginRight: "auto",
    width: 200,
    height: 50,

    borderRadius: 20,
  },


}));

export default function ContactFormPut(props) {
    const dispatch = useDispatch();
    const relationshiphealth = useSelector(state => state.realtionshiphealth.realtionshiphealth)
    const gendername = useSelector(state => state.gender.gender)
    const companies = useSelector(state => state.companies.companies)
    const messages = useSelector(state => state.messages.putEmployee)
    const checkboxpopped = (props.employeefiltered.map((row) => (
      row.employee_active
  )))
    const gameover = checkboxpopped[0]

    const [employee_name, setEmployeeName] = React.useState(props.employeefiltered.map((row) => (
        row.employee_name
    )));
    const [company_name, setCompanyName ] = React.useState(props.employeefiltered.map((row) => (
        row.company_name
    )));
    const [position, setPositionName ] = React.useState(props.employeefiltered.map((row) => (
        row.employee_job_position
    )));
    const [email, setEmailName ] = React.useState(props.employeefiltered.map((row) => (
        row.employee_email
    )));
    const [mobile, setMobile ] = React.useState(props.employeefiltered.map((row) => (
        row.employee_mobile_number
    )));
    const [work, setWork ] = React.useState(props.employeefiltered.map((row) => (
        row.employee_work_number
    )));
    const [notes, setNotes ] = React.useState(props.employeefiltered.map((row) => (
        row.employee_notes
    )));
    const [checkbox, setCheckbox ] = React.useState(gameover);
  
    const [relationshipstatus, setRelationshipStatus ] = React.useState(props.employeefiltered.map((row) => (
      row.relationshiphealth
    )));
    const [gender, setGender ] = React.useState(props.employeefiltered.map((row) => (
      row.gender
    )));
    

    
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
      setCheckbox(!checkbox)
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
      data.append('employee_active', checkbox)
      data.append('relationshiphealth', relationshipstatus)
      data.append('gender', gender)

      const id = props.employeefiltered.map((row) => (
        row.id
    ))
      dispatch(putEmployee(id,data));

  }


    
  const classes = useStyles();

  return (
    <Fragment>
      {console.log(gameover)}
     
       <form onSubmit={handleSubmit}>
        
       
      <div className={classes.root}>
       <Grid container spacing={3}>
      
       <Grid item xs={6}>
         
        <TextField
          id="outlined-full-width"
          label="Employee Name"
          style={{ margin: 8 }}
          defaultValue={props.employeefiltered.map((row) => (
              row.employee_name
          ))}
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
        defaultValue={props.employeefiltered.map((row) => (
          row.company_name
        ))}
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
          style={{ margin: 8 }}
          defaultValue={props.employeefiltered.map((row) => (
            row.employee_job_position
        ))}
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
        defaultValue={props.employeefiltered.map((row) => (
          row.gender
        ))}
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
        defaultValue={props.employeefiltered.map((row) => (
          row.relationshiphealth
        ))}
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
        control={<Checkbox 
        checked={checkbox}
        value={checkbox}
        onChange={activeChange} 
        name="Is Employee Active?" 
        />}
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
          style={{ margin: 8 }}
          defaultValue={props.employeefiltered.map((row) => (
            row.employee_email
        ))}
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
          defaultValue={props.employeefiltered.map((row) => (
            row.employee_mobile_number
        ))}
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
          defaultValue={props.employeefiltered.map((row) => (
            row.employee_work_number
        ))}
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
          defaultValue={props.employeefiltered.map((row) => (
            row.employee_notes
        ))}
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