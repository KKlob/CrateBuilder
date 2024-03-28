import './App.css';
import { Grid, Container } from '@mui/material';
import DimsForm from './components/dims_form';

function App() {



  return (
    <div className="App">
      <Container>
        This is the Crate Builder!
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} align="center">
            <DimsForm />
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
