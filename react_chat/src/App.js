import React, { useContext } from "react";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import Home from "./components/Pages/Home";
import { Navigate, Route, Routes} from "react-router-dom";
import { AuthContext } from "./components/Context/AuthContext";

function App() {

  const  curCtx = useContext(AuthContext)

  const ProtectedRoute = ({children}) => {
    if (!curCtx){
      return <Navigate to='/' />
    }
    return children
  }

  return (
    <React.Fragment>
      <Routes>
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
