import './App.css';
import DimsForm from './components/dims_form';
import CrateOutput from './components/crate_output';

function App() {
  return (
    <div className="App">
      This is the Crate Builder!

      <DimsForm />

      <CrateOutput />
    </div>
  );
}

export default App;
