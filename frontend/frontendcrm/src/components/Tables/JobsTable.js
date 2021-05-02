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
import InputBase from '@material-ui/core/InputBase';

import { formEmployeeUpdate } from '../../redux/actions/employees'

import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';import {
  Link
} from "react-router-dom";

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
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    padding: 10,
    outlineWidth: 10,
    outlineColor: '#FF0005',
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  searchField: {
    borderRadius: 20,
    margin: 10,
    borderColor: '#FF0005',
    marginTop: 20,
  }

}));




export default function JobsTable() {



  const classes = useStyles();
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.employees)
  const jobs = useSelector(state => state.jobs.jobs)
  const formstatus = useSelector(state => state.employees.open)
  const [value, setValue] = React.useState(0);
  const [compact, setCompact] = React.useState(false);
  const messages = useSelector(state => state.messages.postEmployees)
  const [page, setPage] = React.useState(0);
  const [searchresults, setSearchResults] = React.useState('');
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, employees.length - page * rowsPerPage);

  const handleFormSetup = (event) => {
    dispatch(formEmployeeUpdate(true))
    
  }

  const handleFormSetupFalse = (event) => {
    dispatch(formEmployeeUpdate(false))
    
  }
  const handleCompact = (event) => {
    setCompact(!compact)
    
  }


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
    
  const searchResultsChange = (event) => {
    setSearchResults(event.target.value.toLowerCase())
   
  }
  
  

  return (
    <Fragment>
       
             
                     
           
        
                <TableContainer component={Paper} className={classes.tablecontainerspace}>

                <Toolbar>
                    <Paper className={classes.searchField}>
                    <IconButton className={classes.iconButton} aria-label="menu">
                      <SearchIcon/>
                    </IconButton>

                    <InputBase
                      className={classes.input}
                      placeholder="Search contacts"
                      inputProps={{ 'aria-label': 'search google maps' }}
                      onChange={searchResultsChange}
                    />
                    </Paper>
                    
                
      
                </Toolbar>
                
               
                <Table className={classes.table} aria-label="simple table">
                    
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Company</TableCell>
                        <TableCell align="right">Value</TableCell>
                        <TableCell align="right">Due Date</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                      
                        
                    {jobs
                    .filter(row => row.job_status.toLowerCase() != 'completed')
                    .filter(row => row.job_name.toLowerCase().includes(searchresults))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                    
                        
                        <TableRow key={row.job_name}>
        
                        <TableCell component="th" scope="row">
                        <Box display="flex" flexDirection="row">
                                <Box p={1} >
                                <Avatar className={classes.orange}>{row.employee_name.slice(0,1)}</Avatar>
                                </Box>
                            
                                <Box p={1} >
                                <Typography className={classes.title} color="inherit" variant="h6" component="div"> {row.job_name}</Typography>
                                <Typography className={classes.title} color="inherit" variant="body2" component="div">
                                        {row.employee_name}
                                        </Typography>
                                </Box>
                                
                            </Box>
                        
                            
                        
                            
                        </TableCell>
                        
                        <TableCell align="right">{row.company_name}</TableCell>
                        <TableCell align="right">{row.job_value.toFixed(2)}</TableCell>
                        <TableCell align="right">{row.job_due_date}</TableCell>
                        <TableCell align="right">{row.job_status}</TableCell>
                        
                        <TableCell align="right"><Link to={`/contacts/${row.id}`}><Button><EditIcon  className={classes.editicon} /></Button></Link></TableCell>
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