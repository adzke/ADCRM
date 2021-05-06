import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 20,
    padding: 5,
  },
  carddisplay: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  icondetail: {
    width: 50, 
    height: 50, 
    color:'#404040'
  },
});

export default function TotalContacts(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {props.title}
        </Typography>
        <div className={classes.carddisplay}>
            <div>
                <Typography variant="h3" component="h2">
                {props.value}
                </Typography>
            </div>
            <div >
                
            {<props.displayicon className={classes.icondetail}/> }
            </div>
        </div>
      </CardContent>
      <CardActions>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
      {props.secondarytext}
        </Typography>
      </CardActions>
    </Card>
  );
}