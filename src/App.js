import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Add from "./component/student/add";
import Edit from "./component/student/edit";
import List from "./component/student/list";

function App() {
  return (
    <div className="container mx-auto mt-44">
      <Router>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
        <h1>Help</h1>
      </Router>
    </div>
  );
}

export default App;
