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
import { postCompanies } from '../../redux/actions/companies'
import BusinessIcon from '@material-ui/icons/Business';




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

export default function CreateCompanyForm(props) {
    const dispatch = useDispatch();
    const companies = useSelector(state => state.companies.companies)
    const employees = useSelector(state => state.employees.employees)

    const messages = useSelector(state => state.messages.putEmployee)
    const [company_name, setCompanyName ] = React.useState('');
    const [ceoname, setCEOName ] = React.useState('');
    const [companyaddress, setCompanyAddress ] = React.useState('');


    const companyChange = (event) => {
      setCompanyName(event.target.value)
    };

    const ceoChange = (event) => {
        setCEOName(event.target.value)
    };

    const addressChange = (event) => {
        setCompanyAddress(event.target.value)
    };

    
    const handleSubmit = event => {
        console.log('form submitted')
        event.preventDefault();
        const data = new FormData() 

        data.append('company_name', company_name)
        data.append('company_ceo', ceoname)
        data.append('company_address', companyaddress)
      
        dispatch(postCompanies(data));
        
        
    }
    
  const classes = useStyles();

  return (
    <Fragment>
      
       
   
         
       
     <form onSubmit={handleSubmit}>
      <div className={classes.root}>
       <Grid container spacing={3}>
      
       <Grid item xs={6}>
         
        <TextField
          id="outlined-full-width"
          label="Company Name"
          defaultValue={company_name}
          style={{ margin: 8 }}
          helperText="Please enter companyname"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={companyChange}
        />
        <TextField
        
        label="CEO Name"
        select
        style={{ margin: 8 }}
        fullWidth
        value={ceoname}
        helperText="Please select CEO"
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
          defaultValue={companyaddress}
          style={{ margin: 8 }}
          helperText="Enter the company address."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={addressChange}
        />
  
          </Grid> 
          <Grid item xs={6}>
          <div className={classes.boxdiv}>
          <BusinessIcon style={{width: 200, height: 200, color: '#9ACFDD',}}/>
          
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
