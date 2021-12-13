import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AddSchedule from './Pages/AddSchedule';
import WorksView from './Pages/WorksView';

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={<WorksView/>} />
        <Route exact path="/addSchedule" element={<AddSchedule/>} />
      </Routes>
    </Router>
  );
}
