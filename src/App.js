import './App.css';
import { Grid, Container } from '@mui/material';
import DimsForm from './components/dims_form';
import CrateOutput from './components/crate_output';
import { useState } from 'react';
import TwoByFoursForm from './components/two_by_fours_form';

function App() {

  const [crate, setCrate] = useState(null);

  return (
    <div className="App">
      <Container>
        CrateBuilder v1
        <Grid container spacing={2}>
          <Grid item xs={23}>
            To input a measurement use the following format:
          </Grid>
          <Grid item xs={12}>
            (whole number).(numerator)/(denominator)
          </Grid>
          <Grid item xs={12}>
            EX: 34 1/4 inches becomes 34.1/4 | 15 3/16 inches becomes 15.3/16
          </Grid>
          <Grid item xs={12}>
            For whole numbers just input the number EX: 35 inches becomes 35
          </Grid>
          <Grid item xs={12}>
            <DimsForm setCrate={setCrate} />
          </Grid>
          {crate ? <Grid item xs={12}>
            <CrateOutput crate={crate} />
          </Grid> : null}
          {crate ? <Grid item xs={12}>
            <TwoByFoursForm crate={crate} setCrate={setCrate} />
          </Grid> : null}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
