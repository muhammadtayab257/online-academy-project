import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import CourseDetails from "./pages/course-details";
import Courses from "./pages/courses";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/course-details" element={<CourseDetails />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
