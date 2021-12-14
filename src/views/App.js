import './App.scss';
import Navbar from './components/Navbar'
import Backoffice from './views/Backoffice'

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Backoffice></Backoffice>
    </div>
  );
}

export default App;
