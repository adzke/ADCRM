// React 
import React, {Fragment, useEffect } from 'react';

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
import { companiesCreateOpen, companyID, companyDetailOpen } from '../../redux/actions/companies'
import TablePagination from '@material-ui/core/TablePagination';
import './Search.css'
import Search from '../Search/Search'
import AddIcon from '@material-ui/icons/Add';
import CompanyDialog from '../Forms/CompanyDialog';
import CompanyDetailDialog from '../Forms/CompanyDetailDialog';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
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




export default function JobsTable(props) {



  const classes = useStyles();
  const dispatch = useDispatch();
  const projects = useSelector(state => state.jobs.jobs)
  const formstatus = useSelector(state => state.companies.detailopen)
  const createopen = useSelector(state => state.companies.createopen)
  const [page, setPage] = React.useState(0);
  const [searchresults, setSearchResults] = React.useState('');
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, projects.length - page * rowsPerPage);

  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  const handleClickOpen = () => {
    dispatch(companiesCreateOpen(true))
    };

  const handleOpen = () => {
    dispatch(companyDetailOpen(true))

    };
  
  const handleClose = () => {
      dispatch(companiesCreateOpen(false))
      
    };
  const handleDialogClose = () => {
    dispatch(companyDetailOpen(false))
   
      
    };

  
  const detailViewOpen = (id) => {
    dispatch(companyID(id))
    handleOpen();

  }

  const searchResultsChange = (event) => {
    setSearchResults(event.target.value.toLowerCase())
   
  }





  

  return (
    <Fragment>
      <CompanyDetailDialog
      closeLoginDialog={handleDialogClose}
      stateopen={formstatus}
      />
      <CompanyDialog
      closeLoginDialog={handleClose}
      stateopen={createopen}/>

      
     
             
                     
           
               
                <TableContainer component={Paper} className={classes.tablecontainerspace}>

          
                     
                   <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                   
                   <Search searchresults={searchResultsChange} value={searchresults} title={"Search Companies..."}/>
                   <div style={{flex: 'flex-end', marginLeft: 50}}>
                   <IconButton className={classes.iconButton}><AddIcon fontSize='large' onClick={handleClickOpen}/></IconButton>
                    
                    </div>
                   </Toolbar>
               
                
               
                <Table className={classes.table} aria-label="simple table">
                    
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Value</TableCell>
                        <TableCell align="right">Employee</TableCell>
                        <TableCell align="right">Status</TableCell>

                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                      
                        
                    {projects
                    .filter(company => company.company_name.toLowerCase().includes(searchresults))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                    
                        
                        <TableRow key={row.id}>
        
                        <TableCell component="th" scope="row">
                          
                        <Box display="flex" flexDirection="row">
                                <Box p={1} >
                                <Avatar className={classes.orange}>{row.job_name.slice(0,1)}</Avatar>
                                </Box>
                            
                                <Box p={1} >
                                  
                                <Typography className={classes.title} color="inherit" variant="h6" component="div"> {row.job_name}</Typography>
                                <Typography className={classes.title} color="inherit" variant="body2" component="div" >
                                        {row.company_name}
                                        </Typography>
                                </Box>
                                
                            </Box>
                        
                            
                        
                            
                        </TableCell>
                        
                        <TableCell align="right">{row.job_value}</TableCell>
                        <TableCell align="right">{row.employee_name}</TableCell>

                        <TableCell align="right" style={{color: "black" }}><span style={{borderRadius: 20, backgroundColor: (row.job_status == "In Progress") ? "#F51400" : (row.job_status == "Completed") ? "#00F56D" : '#F5E600', padding: 15}} >{row.job_status}</span></TableCell>
                        
                        
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
                          count={projects.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onChangePage={handleChangePage}
                          onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                </TableContainer>
              
                
    
        
       </Fragment>
   
  );
}