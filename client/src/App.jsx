import Home from './components/Home/Home';
import MachineList from './components/Machine/MachineList'
import MachineDetail from './components/MachineDetail/MachineDetail';
import LayoutApp from './screens/LayoutApp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/App.css';

const App = () => 
     <Router>
          <Routes>
               <Route path="/" element={<LayoutApp Pages={<Home />} />} />
               <Route path="/machine" element={<LayoutApp Pages={<MachineList />} />} />
               <Route path="/machine-detail/:machine_select_id" element={<LayoutApp Pages={<MachineDetail />} />} />
          </Routes>
     </Router>


export default App;