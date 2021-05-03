// React 
import React, {Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch} from "react-redux"
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import ContactForm from '../Forms/ContactForm'
import { formEmployeeUpdate, employeeID, employeeDetailOpen, employeeCreateOpen } from '../../redux/actions/employees'
import EmployeeCardTable from './EmployeeCardTable'
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import './Search.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Search from '../Search/Search'
import AddIcon from '@material-ui/icons/Add';
import CreateDialog from '../Forms/CreateDialog'
import DialogForm from '../Forms/DialogForm'
;const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  title: {
    flex: '1 1 100%',
  },
  tablecontainerspace: {
      marginRight: 100,
      borderRadius: 20,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    
  },

  editicon: {
      color: '#58555A',
  },
  root: {
    marginTop: 10,
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    borderRadius: 20,
  },
  input: {
    padding: 10,
    marginLeft: theme.spacing(1),
    flex: 1,
    
    
  },
  
  divider: {
    height: 28,
    margin: 4,
  },
  searchField: {
    borderColor: '#FF0005',
    backgroundColour: '#FF0005',
    margin: 5,
    borderRadius: 20,
    marginTop: 20,
    
  }

}));




export default function EmployeeTable(props) {



  const classes = useStyles();
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.employees)
  const formstatus = useSelector(state => state.employees.detailopen)
  const createopen = useSelector(state => state.employees.createopen)
  const [compact, setCompact] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [searchresults, setSearchResults] = React.useState('');
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, employees.length - page * rowsPerPage);

  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



    
  const handleClickOpen = () => {
    dispatch(employeeCreateOpen(true))
    };

  const handleOpen = () => {
    dispatch(employeeDetailOpen(true))

    };
  
  const handleClose = () => {
      dispatch(employeeCreateOpen(false))
      
    };
  const handleDialogClose = () => {
    dispatch(employeeDetailOpen(false))
   
      
    };

  
  const detailViewOpen = (id) => {
    dispatch(employeeID(id))
    handleOpen();

  }

  const searchResultsChange = (event) => {
    setSearchResults(event.target.value.toLowerCase())
   
  }
  

  return (
    <Fragment>
      <DialogForm
      closeLoginDialog={handleDialogClose}
      stateopen={formstatus}
      />
      <CreateDialog
      closeLoginDialog={handleClose}
      stateopen={createopen}/>

      
     
             
                     
           
        
                <TableContainer component={Paper} className={classes.tablecontainerspace}>
                
          
                     
                   <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                   
                   <Search searchresults={searchResultsChange} value={searchresults} title={"Search Contacts..."}/>
                   <div style={{flex: 'flex-end', marginLeft: 50}}>
                   <IconButton className={classes.iconButton}><AddIcon fontSize='large' onClick={handleClickOpen}/></IconButton>
                    
                    </div>
                   </Toolbar>
               
                
                <Table className={classes.table} aria-label="simple table">
                    
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Company</TableCell>
                        <TableCell align="right">Position</TableCell>
                        <TableCell align="right">Mobile</TableCell>
                        <TableCell align="right">Work</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                      
                        
                    {employees
                    .filter(employee => employee.employee_name.toLowerCase().includes(searchresults))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                    
                        
                        <TableRow key={row.employee_name}>
        
                        <TableCell component="th" scope="row">
                          
                        <Box display="flex" flexDirection="row">
                                <Box p={1} >
                                <Avatar className={classes.orange}>{row.employee_name.slice(0,1)}</Avatar>
                                </Box>
                            
                                <Box p={1} >
                                  
                                <Typography className={classes.title} color="inherit" variant="h6" component="div"> {row.employee_name}</Typography>
                                <Typography className={classes.title} color="inherit" variant="body2" component="div">
                                        {row.employee_email}
                                        </Typography>
                                </Box>
                                
                            </Box>
                        
                            
                        
                            
                        </TableCell>
                        
                        <TableCell align="right">{row.company_name}</TableCell>
                        <TableCell align="right">{row.employee_job_position}</TableCell>
                        <TableCell align="right">{row.employee_mobile_number}</TableCell>
                        <TableCell align="right">{row.employee_work_number}</TableCell>
                        
                        <TableCell align="right"><Button onClick={() => detailViewOpen(row.id)}><EditIcon  className={classes.editicon} /></Button></TableCell>
                        </TableRow>
                       
                       
                        
                    ))}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 101 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                              
                    </TableBody>
                </Table>
                

                        <TablePagination
                          rowsPerPageOptions={[5, 10, 25]}
                          component="div"
                          count={employees.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onChangePage={handleChangePage}
                          onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                </TableContainer>
              
                
    
        
       </Fragment>
   
  );
}