import './App.css';
import { Grid, Container } from '@mui/material';
import DimsForm from './components/dims_form';
import TwoByFoursForm from './components/two_by_fours_form';
import { useState } from 'react';
import CrateOutput from './components/crate_output';

function App() {

  const [dims, setDims] = useState({
    length: "",
    width: "",
    height: "",
    addFeet: false
  });

  const [twoBys, setTwoBys] = useState({
    twoBy1: { qty: "", length: "" },
    twoBy2: { qty: "", length: "" },
    twoBy3: { qty: "", length: "" },
    twoBy4: { qty: "", length: "" },
    twoBy5: { qty: "", length: "" }
  });

  function handleReset() {
    setDims({
      length: "",
      width: "",
      height: "",
      addFeet: false
    });
    setTwoBys({
      twoBy1: { qty: "", length: "" },
      twoBy2: { qty: "", length: "" },
      twoBy3: { qty: "", length: "" },
      twoBy4: { qty: "", length: "" },
      twoBy5: { qty: "", length: "" }
    });
  }

  return (
    <div className="App">
      <Container>
        This is the Crate Builder!
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DimsForm dims={dims} setDims={setDims} handleReset={handleReset} />
          </Grid>
          <Grid item xs={12}>
            <CrateOutput dims={dims} twoBys={twoBys} />
          </Grid>
          <Grid item xs={12}>
            <TwoByFoursForm twoBys={twoBys} setTwoBys={setTwoBys} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
