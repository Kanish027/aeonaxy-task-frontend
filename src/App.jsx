import Home from "./components/Home";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import UpdateProfile from "./components/UpdateProfile";
import Purpose from "./components/Purpose";
import Verify from "./components/Verify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userProfile } from "./actions/User";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  return (
    <>
      {/* <Signup /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Signup />} />
        <Route path="/update" element={<UpdateProfile />} />
        <Route path="/purpose" element={<Purpose />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </>
  );
}

export default App;
