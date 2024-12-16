import React,{lazy, Suspense, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Lottie from "lottie-react";
import animation from './JSON/Loader.json'
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
const About = lazy(()=> import('./About'));
const Contactus = lazy(()=> import('./Contactus.js'));
const ScrollToTop = () => {
  const location = useLocation();
  console.log(location)
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, [location]);

  return null; // This component does not render anything
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
      <Route path='/' element={
          <Suspense fallback={<Lottie className='lottie' animationData={animation}/>}>
          <App/></Suspense>
        }></Route>

        <Route path='/about' element={
          <Suspense fallback={<Lottie className='lottie' animationData={animation} />}>
          <About/></Suspense>
        }></Route>

        <Route path='/contact' element={
          <Suspense fallback={<Lottie className='lottie' animationData={animation} />}>
          <Contactus/></Suspense>
        }/>
          
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
