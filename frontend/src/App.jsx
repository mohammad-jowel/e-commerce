import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from './UserContext';

import Layout from './comps/Layout';
import Home from './comps/Home';
import Singup from "./comps/Singup";
import Login from "./comps/Login";
import Nopage from "./comps/Nopage";

const App = () => {
    
    return (
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="singup/" element={<Singup />} />
              <Route path="login/" element={<Login />} />
              <Route path="*" element={<Nopage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    );
}

export default App;