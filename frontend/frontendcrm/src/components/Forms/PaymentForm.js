import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="Mobile Number" label="Mobile Number" fullWidth autoComplete="Mobile Number" />
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField required id="Work Number" label="Work Number" fullWidth autoComplete="Work Number" />
        </Grid>
        <Grid item xs={12} md={6}>
        <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        />
         <Typography variant="body" gutterBottom>
        is Active?
      </Typography>
        </Grid>
      
      </Grid>
    </React.Fragment>
  );
}