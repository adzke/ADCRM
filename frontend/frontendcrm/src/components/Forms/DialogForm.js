import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import ContactFormPut from './ContactFormPut'
import Divider from '@material-ui/core/Divider';
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import { deleteEmployee, employeeDeleteOpen } from '../../redux/actions/employees'

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

export default function MaxWidthDialog(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const employees = useSelector(state => state.employees.employees)
  const employeesid = useSelector(state => state.employees.id)

  const employeefiltered = employees.filter(employee => employee.id === employeesid)
  const deleteopen = useSelector(state => state.employees.deleteopen)

  const handleDeleteClose = () => {
    dispatch(employeeDeleteOpen(false))
  }

  const handleDeleteOpen = () => {
    dispatch(employeeDeleteOpen(true))
  }

  const FinalDelete = () => {
    dispatch(deleteEmployee(employeesid))
  }
  return (
    <React.Fragment>
      <Dialog
      open={deleteopen}
      onClose={handleDeleteClose}
      
      
      >
      <DialogTitle><Typography variant="h6" gutterBottom>
        Confirm Delete
      </Typography></DialogTitle>
      <DialogContent  style={{margin: 10}}>
      <Typography variant="body2" gutterBottom>
      You are about to delete the following contact.
     
      {employeefiltered.map((row) => (
        
           <Typography variant="body1" gutterBottom>
              <br></br>
       {`Name: ${row.employee_name}`}
       <br></br>
       {`Company: ${row.company_name}`}
       <br></br>
       {`Employee Email: ${row.employee_email}`}
       <Divider/>
      </Typography> 
        ))}

        Once you have confirmed delete, this cannot be recovered - it will be deleted permanently.

        <Typography variant="body2" gutterBottom> Do you want to Proceed? </Typography>
      </Typography>
      </DialogContent>
      <DialogActions>
          <Button onClick={handleDeleteClose} color="primary">
            Close
          </Button>
          <Button
            onClick={FinalDelete}
            style={{margin: 5, backgroundColor: '#F2784B', borderColor: '#F2784B',}}
            variant="contained"
            className={classes.submit}
          >
            Confirm Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={props.stateopen}
        onClose={props.closeLoginDialog}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
        
        <Typography variant="h6" gutterBottom>
        Contact Details
      </Typography>
      <Typography variant="body2" gutterBottom>
      To edit a contact, change the fields required - and hit the save button. 
      </Typography>
      <Divider/>
        </DialogTitle>
        
        <DialogContent  style={{margin: 10}}>
          <DialogContentText>
            
          </DialogContentText>
          
          <ContactFormPut employeefiltered={employeefiltered}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeLoginDialog} color="primary">
            Close
          </Button>
          <Button
            onClick={handleDeleteOpen}
            style={{margin: 5, backgroundColor: '#F2784B', borderColor: '#F2784B',}}
            variant="contained"
            className={classes.submit}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}