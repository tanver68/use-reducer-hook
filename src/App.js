import logo from './logo.svg';
import './App.css';
import ReducerCount from './Components/ReducerCount/ReducerCount';
import PatiantReducer from './Components/PatiantReducer/PatiantReducer';
import PatientManagment from './Components/PatientsManagment/PatientManagment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReducerCount></ReducerCount>
        <PatientManagment></PatientManagment>
      </header>
    </div>
  );
}

export default App;
