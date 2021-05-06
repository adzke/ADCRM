import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { useDispatch, useSelector } from 'react-redux'
import { putCompany } from '../../redux/actions/companies'


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
    const employees = useSelector(state => state.employees.employees)
    const checkboxpopped = (props.employeefiltered.map((row) => (
      row.employee_active
  )))
    const gameover = checkboxpopped[0]

  
    const [company_name, setCompanyName ] = React.useState(props.employeefiltered.map((row) => (
        row.company_name
    )));
    const [company_ceo, setCEO] = React.useState(props.employeefiltered.map((row) => (
        row.company_ceo
    )));
    const [company_address, SetAddress ] = React.useState(props.employeefiltered.map((row) => (
        row.company_address
    )));


    
    const ceoChange = (event) => {
        setCEO(event.target.value)
    };

    const companyChange = (event) => {
      setCompanyName(event.target.value)
    };

    const AddressChange = (event) => {
        SetAddress(event.target.value)
    };

  
    const handleSubmit = event => {
      event.preventDefault();
      const data = new FormData() 
      data.append('company_name', company_name)
      data.append('company_ceo', company_ceo)
      data.append('company_address', company_address)
      

      const id = props.employeefiltered.map((row) => (
        row.id
    ))
      dispatch(putCompany(id,data));

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
          label="Company Name"
          style={{ margin: 8 }}
          defaultValue={props.employeefiltered.map((row) => (
              row.company_name
          ))}
          helperText="Please enter company name."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={companyChange}
        />

        <TextField
        
        label="Company CEO"
        select
        defaultValue={props.employeefiltered.map((row) => (
          row.company_ceo
        ))}
        style={{ margin: 8 }}
        fullWidth
        value={company_ceo}
        helperText="Please select Company"
        variant="outlined"
        onChange={ceoChange}
        >
      {employees.map((employee) => (
       <MenuItem key={employee.id} value={employee.employee_name}>{employee.employee_name}</MenuItem>
       ))}
                
       </TextField>
        
        <TextField
          id="outlined-full-width"
          label="Company Address"
          style={{ margin: 8 }}
          defaultValue={props.employeefiltered.map((row) => (
            row.company_address
        ))}
          helperText="Enter the company address."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={AddressChange}
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
          </Grid>
        </Grid>
          </div>

      </form>
     
     
      
     
      </Fragment>
  );
}