import { Route, Routes } from "react-router-dom";

import Layout from "./components/template/Layout";

import Home from "./pages/Home";
import Teacher from "./pages/Teacher";
import Lessons from "./pages/Lessons";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
