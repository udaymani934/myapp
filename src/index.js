import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import 'bootstrap-icons/font/bootstrap-icons.css'
// import { AuthContextProvider } from './Mani6/store/auth-context';
// import reportWebvitals from './repor8twebvitals'
// // import 'react-icons/bi'
//import {Provider} from 'react-redux';
//import store from '../src/Mani13/Store/Index'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   {/* <Provider store={store}> */}
    <BrowserRouter>  
     {/* <AuthContextProvider> */}
    <App />
    </BrowserRouter>
     {/* </Provider> */}

  {/* </AuthContextProvider>  */}
</>
);
// reportwebvitals();

