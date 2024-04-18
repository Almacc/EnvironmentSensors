import './App.css';
import Data from './components/data';
import GasData from './components/data2';
import Sidebar from './components/sidebar';
import Charts from './components/analytics';
import ChartsLine from './chartsline';
import { NavBar } from './components/NacBar';
import HomePage from './components/home';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Chart } from 'chart.js';

function App() {
  return (
    <Router>
      <div className="App">
            <Sidebar />
      <main className="content">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/data2" element={<GasData />} />
        <Route path="/data" element={<Data />} />
        <Route path="/chartsLine" element={<ChartsLine />} />
      </Routes>
      </main>
      </div>
    </Router>
  );
}

export default App;


//
//<Data/>  

//<Sidebar />

/* <Sidebar />
<main className="content">
<Routes>
  <Route path="/data2" element={<GasData />} />
  <Route path="/data" element={<Data />} />
  <Route path="/chartsLine" element={<ChartsLine />} />
</Routes>
</main>*/