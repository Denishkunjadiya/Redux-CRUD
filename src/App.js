import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Add from "./component/student/add";
import Edit from "./component/student/edit";
import List from "./component/student/list";

function App() {
  return (
    <div className="container sm:p-auto p-3 mx-auto">
      <header className="sm:mb-14 mb-12 h-24 flex items-center justify-center">
        <h1 className="font-semibold font-sans text-4xl">Redux CRUD</h1>
      </header>
      <div className="mb-14">
        <Router>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </Router>
      </div>
      <footer className="fixed bottom-0 w-full bg-white h-14 flex items-center sm:left-0 !left-auto" >
        <h1 className="font-semibold ">Copyright © 2024 Denish Kunjadiya | All Right Reserved.</h1>
      </footer>
    </div>
  );
}

export default App;
