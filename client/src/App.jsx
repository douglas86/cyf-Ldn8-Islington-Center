import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Teacher from "./pages/Teacher";
import Lessons from "./pages/Lessons";
import LessonDetails from "./pages/LessonDetails";

import Layout from "./components/template/Layout";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:id" element={<LessonDetails />} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
