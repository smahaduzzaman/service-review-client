import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
import { PhotoProvider, PhotoView } from 'react-photo-view';
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
    </div>

  );
}

export default App;
