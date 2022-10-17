
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Mian from './components/Main/Mian';
import SignUp from './components/SignUp/SignUp';


function App() {

  const router = createBrowserRouter ([
    {path: '/' ,element:<Mian > </Mian>, children: [
      {path: '/', element: <Home > </Home> },
      {path: '/Home', element: <Home> </Home>},
      {path: '/SignUp', element: <SignUp > </SignUp>},
      {path: '/Login', element: <Login > </Login>},
      { path : '*',element : <div > Route not found please back !</div>}
    ]}
  ])
  return (
    <div className="App">
     
     <RouterProvider router={router} > </RouterProvider>
    </div>
  );
}

export default App;
