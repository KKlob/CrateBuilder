import './App.css';
import Dims_Form from './components/dims_form';
import Crate_Output from './components/crate_output';

function App() {
  return (
    <div className="App">
      This is the Crate Builder!

      <Dims_Form />

      <Crate_Output />
    </div>
  );
}

export default App;
