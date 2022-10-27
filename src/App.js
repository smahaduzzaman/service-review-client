// import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
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
      </div>
    </div>
  );
}

export default App;
