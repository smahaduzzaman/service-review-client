// import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import useLocalStorage from 'use-local-storage';

function App() {
  // const defaultDark = window.matchMedia(('(prefers-color-scheme: dark)')).matches;
  // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  // const switchTheme = () => {
  //   const newTheme = theme === 'light' ? 'light' : 'dark';
  //   setTheme(newTheme);
  // }
  return (
    // data-theme={theme}
    <div >
      {/* <button onClick={switchTheme}>Switch Dark</button> */}
      <div className="App">
        <RouterProvider router={routes}></RouterProvider>
        <ToastContainer position='top-center' autoClose='1000' />
      </div>
    </div>
  );
}

export default App;
