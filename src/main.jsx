import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Pages/Dashboard.jsx';
import Transction from './Pages/Transction.jsx';
import Earn from './Pages/Earn.jsx';
import SendMoney from './Pages/SendMoney.jsx';
import WidthdrawMoney from './Pages/WidthdrawMoney.jsx';
import RequestMoney from './Pages/RequestMoney.jsx';
import AddMoney from './Pages/AddMoney.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';



// const [userName, setUserName] = useState("");

// useEffect(() => {
//   auth.onAuthStateChanged((user) => {
//     if (user) {
//       setUserName(user.displayName);
//     } else setUserName("");
//   });
// }, []);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path: "/login",
    element: <Login/>,

  },
  {
    path: "/register",
    element: <Register />,

  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />
  },
  {
    path: "/admin/transction",
    element: <Transction />
  },
  {
    path: "/admin/earn-20$",
    element: <Earn />
  },
  {
    path: "/admin/sendmoney",
    element: <SendMoney/>
  },
  {
    path: "/admin/widthdraw-money",
    element: <WidthdrawMoney/>
  },
  {
    path: "/admin/request-money",
    element: <RequestMoney/>
  },
  {
    path: "/admin/add-money",
    element: <AddMoney/>
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
