import { Routes, Route } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <h4>Version 1.0.0</h4>
              <h1> This is about page</h1>
              <a href="/">Go Back</a>
            </>
          }
        ></Route>
        <Route path="/a" element={<h1> this is a</h1>} />
      </Routes>
    </div>
  );
};

export default About;
