import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './App.css';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
