import './App.css';
import DimsForm from './components/dims_form';
import CrateOutput from './components/crate_output';
import { Grid, Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container>
        This is the Crate Builder!
        <Grid container spacing={2} align="">
          <Grid item xs={12}>
            <DimsForm />
          </Grid>
          <Grid item xs={12}>
            <CrateOutput />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
