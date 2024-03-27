import './App.css';
import DimsForm from './components/dims_form';
import CrateOutput from './components/crate_output';
import { Grid, Container } from '@mui/material';
import { useState } from 'react';
import AddTwoByFoursForm from './components/add_two_by_fours';

function App() {
  const [dims, setDims] = useState({
    lm: 35,
    lt: 1,
    lb: 4,
    wm: 20,
    wt: 3,
    wb: 8,
    hm: 15,
    ht: 3,
    hb: 16,
    weight: false
  });

  const [additionalTwoBysLength, updateAddTwoBysLength] = useState(0);

  return (
    <div className="App">
      <Container>
        This is the Crate Builder!
        <Grid container spacing={2} align="">
          <Grid item xs={12}>
            <DimsForm dims={dims} setDims={setDims} />
          </Grid>
          <Grid item xs={12}>
            <CrateOutput dims={dims} addTwoBys={additionalTwoBysLength} />
          </Grid>
          <Grid item xs={12}>
            <AddTwoByFoursForm updateTwoBysTotal={updateAddTwoBysLength} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
