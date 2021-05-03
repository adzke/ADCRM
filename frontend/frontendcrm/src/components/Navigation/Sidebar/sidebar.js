import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useSelector } from 'react-redux'
import SettingsPop from '../../Popover/SettingsPop'
import PeopleIcon from '@material-ui/icons/People';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Avatar from '@material-ui/core/Avatar';
import BusinessIcon from '@material-ui/icons/Business';

import { Link } from 'react-router-dom'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#313B2F',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#313B2F',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  linkstyles: {
    color: '#FFFFFF',
    textDecoration: 'none'
  },
  linkicons: {
    color: '#FFFFFF',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const username = useSelector(state => state.auth.user.username)
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
   
   
  }


  const openpop = Boolean(anchorEl);
  const id = openpop ? 'simple-popover' : undefined;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon  />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            AD CRM
          </Typography>
        
          <IconButton >
         <Avatar onClick={handleClick} aria-describedby={id}>{username.toUpperCase().slice(0,1)}</Avatar>
         <SettingsPop id={id} open={openpop} anchorEl={anchorEl} handleClose={handlePopClose} title={`Username: ${username}`}/>
        </IconButton>
       
        </Toolbar>
        
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          
            <Link className={classes.linkstyles}to='/'><ListItem button onClick={handleDrawerClose}>
              <ListItemIcon><DashboardIcon className={classes.linkicons}/></ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItem></Link>
          
        </List>
        <Divider />
        <List>
          
          <Link className={classes.linkstyles}to='/contacts'><ListItem button onClick={handleDrawerClose}>
            <ListItemIcon><PeopleIcon className={classes.linkicons}/></ListItemIcon>
            <ListItemText>Contacts</ListItemText>
          </ListItem></Link>
        
      </List>
        <Divider />
        <List>
          
          <Link className={classes.linkstyles}to='/companies'><ListItem button onClick={handleDrawerClose}>
            <ListItemIcon><BusinessIcon className={classes.linkicons}/></ListItemIcon>
            <ListItemText>Companies</ListItemText>
          </ListItem></Link>
        
      </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {<props.componentview/>}
      </main>
    </div>
  );
}