import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CompanyFormPut from './CompanyFormPut'
import Divider from '@material-ui/core/Divider';
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import { deleteCompany, companyDeleteOpen } from '../../redux/actions/companies'

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

export default function CompanyDetailDialog(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const companies = useSelector(state => state.companies.companies)
  const companyid = useSelector(state => state.companies.id)

  const companiesfiltered = companies.filter(company => company.id === companyid)
  const deleteopen = useSelector(state => state.companies.deleteopen)

  const handleDeleteClose = () => {
    dispatch(companyDeleteOpen(false))
  }

  const handleDeleteOpen = () => {
    dispatch(companyDeleteOpen(true))
  }

  const FinalDelete = () => {
    dispatch(deleteCompany(companyid))
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
     
      {companiesfiltered.map((row) => (
        
           <Typography variant="body1" gutterBottom>
              <br></br>
       {`Name: ${row.company_name}`}
       <br></br>
       {`Company: ${row.company_ceo}`}
       <br></br>
       {`Employee Email: ${row.company_address}`}
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
        Company Details
      </Typography>
      <Typography variant="body2" gutterBottom>
      To edit a company, change the fields required - and hit the save button. 
      </Typography>
      <Divider/>
        </DialogTitle>
        
        <DialogContent  style={{margin: 10}}>
          <DialogContentText>
            
          </DialogContentText>
          
          <CompanyFormPut employeefiltered={companiesfiltered}/>
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