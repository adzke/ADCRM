import React, { Fragment, useEffect } from 'react'
import EmployeeTable from '../Tables/EmployeeTable'
import GridContainer from '../Grid/GridContainer'
import GridItem from '../Grid/GridItem'
import { useSelector} from "react-redux"
import DialogForm from '../Forms/DialogForm'
// Redux
import { loadUser } from '../../redux/actions/auth'
import { useDispatch } from 'react-redux'
import { getEmployees } from '../../redux/actions/employees'

function Contacts() {

    const employees = useSelector(state => state.employees.employees)
    const employeecount = employees.length
    const targetvalue = 25
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(loadUser())
      dispatch(getEmployees())
    }, []);  
    
    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
        
      };
    
    return (
        
       <Fragment>
           
        <GridContainer>
        <DialogForm 
         closeLoginDialog={handleClose}
         stateopen={open}
         />
        <GridItem xs={12} sm={12} md={12}>
                <EmployeeTable employeesfiltered={employees} 
                closeLoginDialog={handleClose}
                stateopen={open}/>
            </GridItem>
          
            
            
            
            
            
            
        </GridContainer>
       </Fragment>
    )
}

export default Contacts
