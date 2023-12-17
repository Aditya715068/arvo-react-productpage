import Herosec from "./components/Herosec";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/*" element={<Herosec/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
