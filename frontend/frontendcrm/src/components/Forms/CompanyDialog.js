import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CreateCompanyForm from './CreateCompanyForm'
import Divider from '@material-ui/core/Divider';
import { useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography';


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

export default function CompanyDialog(props) {
  const classes = useStyles();
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const employees = useSelector(state => state.employees.employees)
  const [submitform, setSubmitForm] = React.useState(false)

  const SubmitForm = () => {
    setSubmitForm(true);
  };



  return (
    <React.Fragment>
     
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={props.stateopen}
        onClose={props.closeLoginDialog}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
        <Typography variant="h6" gutterBottom>
        New Company Details
      </Typography>
      <Typography variant="body2" gutterBottom>
      To add a company, change the fields required - and hit the save button. 
      </Typography>
      <Divider/>
        </DialogTitle>
        
        <DialogContent  style={{margin: 10}}>
          <DialogContentText>
            
          </DialogContentText>
          
          
          <CreateCompanyForm/>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeLoginDialog} color="primary">
            Close
          </Button>
           
       
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}