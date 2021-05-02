import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Footer() {
    return (
        <AppBar position="static" styles={{backgroundColor: '#58595B' }}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                 AD © 2021
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}