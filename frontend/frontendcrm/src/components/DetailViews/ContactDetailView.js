import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import { useSelector } from 'react-redux'
import ContactFormPut from '../Forms/ContactFormPut'
import {
useParams
} from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  
function ContactDetailView( {  }) {
    const [open, setOpen] = React.useState(true);
    const employees = useSelector(state => state.employees.employees)
    const { id } = useParams();
    const employeeid = id
    const employeefilter = employees.filter((employee) => {
        if(employee.id == employeeid)
        return employee
      })

    
    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
      };
    return (
        <div>
           
     
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        
        <DialogContent>
        <ContactFormPut employeefiltered={employeefilter}/>
        </DialogContent>
        
        
      </Dialog>
    </div>
            
           
   
    )
}

export default ContactDetailView
