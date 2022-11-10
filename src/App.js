import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";
import './App.css';

function App() {
  return (

    <div className='max-w-screen-xl mx-auto'>
      <Helmet>
        <title>Get Your Writer</title>
        <meta name="description" content="Get Your Writer" />
      </Helmet>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position='top-center' autoClose='1000' />
    </div>

  );
}

export default App;
