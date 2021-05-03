import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PieChart from '../Charts/PieChart'
import SettingsPop from '../Popover/SettingsPop'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

function ContactGoal(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleChange = (event, newValue) => {
    props.SetTargetValue(newValue)
    console.log(props.targetvalue)
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
    return (
        <div>
              <Card style={{borderRadius: 20,}}>
                <CardContent >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h5" gutterBottom>
                       {props.goaltitle}
                    </Typography>
                    <IconButton aria-describedby={id} variant="contained" color="primary" onClick={handleClick}><MoreVertIcon font='large'/></IconButton>
                    </div>
                    <Divider/>
                    <Typography variant="subtitle1" gutterBottom>
                    {props.subtitle} {props.currentvalue}/{props.targetvalue}
                    </Typography>

                    
                   <div>
                    <PieChart employeecount={props.currentvalue} targetvalue={props.targetvalue}/>
                    <SettingsPop id={id} open={open} anchorEl={anchorEl} handleClose={handleClose} targetvalue={props.targetvalue} handleChange={handleChange}/>
                    
                    </div>
                </CardContent>
                <Divider/>
                <CardContent>
                <Typography variant="h5" gutterBottom>
                       {props.breakdown.toFixed(0)}%
                    </Typography>

                    
                    <Typography variant="subtitle1" gutterBottom>
                    {props.buttontitle}
                    </Typography>

                </CardContent>
                </Card>
        </div>
    )
}

export default ContactGoal
