import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Add from "./component/student/add";
import Edit from "./component/student/edit";
import List from "./component/student/list";

function App() {
  return (
    // <div className="container mx-auto mt-44">
    <div className="container mx-auto">
      <header className="sm:mb-24 mb-20 h-24 flex items-center justify-center">
        <h1 className="font-semibold font-sans text-4xl">Redux CRUD</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
      <footer >
        <h1 className="font-semibold">Copyright © 2024 Denish Kunjadiya | All Right Reserved.</h1>
      </footer>
    </div>
  );
}

export default App;
