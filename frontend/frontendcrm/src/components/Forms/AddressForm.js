import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 255,
    
  },
  selectEmpty: {
   
  },
}));


export default function AddressForm() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Employee
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
        <TextField
            required
            id="Name"
            name="Name"
            label="Name"
            fullWidth
            autoComplete="given-name"
          />
          </Grid>
          <Grid item xs={12} sm={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Company</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Apple</MenuItem>
            <MenuItem value={20}>Microsoft</MenuItem>
            <MenuItem value={30}>JanCorp</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={6}>
        <TextField
            id="address2"
            name="address2"
            label="Position"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}