import './App.css';
import DimsForm from './components/dims_form';
import CrateOutput from './components/crate_output';
import { Grid, Container } from '@mui/material';
import { useState } from 'react';

function App() {
  const [dims, setDims] = useState({
    lm: 0,
    lt: 0,
    lb: 0,
    wm: 0,
    wt: 0,
    wb: 0,
    hm: 0,
    ht: 0,
    hb: 0,
    weight: false
  });

  return (
    <div className="App">
      <Container>
        This is the Crate Builder!
        <Grid container spacing={2} align="">
          <Grid item xs={12}>
            <DimsForm dims={dims} setDims={setDims} />
          </Grid>
          <Grid item xs={12}>
            <CrateOutput dims={dims} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
