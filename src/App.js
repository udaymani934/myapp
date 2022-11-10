// //                                                                         // components-reactbootstrap task

// //to run the task install react router dom at 6th version

// import React from 'react';
// // import './App.css';
//  import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
//  import Navbar from './components/Navbar';
//  import Nav  from 'react-bootstrap'
// import Home from'./components/Home'
// import About from './components/About'
// import Services from './components/Services'
// import Portfolio from './components/Portfolio'
// import Contact from './components/Contact'
// import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
// function App() {
//   return(
//      <>
//      {/* <Navbar/> */}
//      <Router>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/About" element={<About/>}/>
//         <Route path="/Services" element={<Services/>}/>
//         <Route path="/Portfolio" element={<Portfolio/>}/>
//         <Route path="/Contact" element={<Contact/>}/>
//       </Routes>
//      </Router>
//       </>
//   );

// // import { alignPropType } from "react-bootstrap/esm/types"

// }

// export default App;

// Mani3 Expenses

// import React from 'react'
//  //import './App.css';
//  //import ExpenseItem from "./Mani3/Expenseitem"
// import Expenses from './Mani3/Expenses/Expenses';
// import NewExpense from './Mani3/NewExpense/NewExpense';
// function App(){
//     const expenses = [
//         {
//             id:'e1',
//             title:'paper',
//             amount:12,
//             date : new Date(2022, 7 ,14)
//         },
//         {
//             id:'e2',
//             title:'insurence',
//             amount:403,
//             date : new Date(2021, 7 ,14)
//         },
//         {
//             id:'e4',
//             title:'milk',
//             amount:50,

//             date : new Date(2022, 7 ,14)
//         },
//         {
//             id:'e3',
//             title:'table',
//             amount:4300,

//             date : new Date(2020, 7 ,14)
//         }

//     ];
//       const addExpenseHandler = expense =>{
//         console.log('App.js');
//         console.log(expense);
//     }
// return (
//    <div className='App'>
//     <h1>Mmmmm</h1>
//     <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
//     <Expenses items={expenses}/>
//     </div>

// );
// }
// export default App;

// Mani4-CourseGoals
// import React, { useState } from 'react';
// import CourseGoalList from '../src/Mani4/CourseGoalList/CourseGoalList';
// import CourseInput from '../src/Mani4/CourseInput/CourseInput';
// import './App.css'

// const App = () => {
//   const [courseGoals, setCourseGoals] = useState([
//     { text: 'Do all exercises!', id: 'g1' },
//     { text: 'Finish !', id: 'g2' }
//   ]);

//   const addGoalHandler = enteredText => {
//     setCourseGoals(prevGoals => {
//       const updatedGoals = [...prevGoals];
//       updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
//       return updatedGoals;
//     });
//   };

//   const deleteItemHandler = goalId => {
//     setCourseGoals(prevGoals => {
//       const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
//       return updatedGoals;
//     });
//   };

//   let content = (
//     <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
//   );

//   if (courseGoals.length > 0) {
//     content = (
//       <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
//     );
//   }

//   return (
//     <div>
//       <section id="goal-form">
//         <CourseInput onAddGoal={addGoalHandler} />
//       </section>
//       <section id="goals">
//         {content}
//         {/* {courseGoals.length > 0 && (
//           <CourseGoalList
//             items={courseGoals}
//             onDeleteItem={deleteItemHandler}
//           />
//         ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
//         } */}
//       </section>
//     </div>
//   );
// };

// export default App;

// Mani5-Login form

// import React, { useState} from "react";
// import AddUser from './Mani5/AddUser/AddUser'
// import UsersList from './Mani5/UsersList/UsersList'

// function App(){
//   const [usersList,setUsersList] = useState([]);

//   const addUserHandler = (uName,uAge) => {
//     setUsersList(prevUserList =>{
//       return [
//         ...prevUserList,
//         {name:uName , age:uAge , id:Math.random().toString()}
//       ]

//     })
//   }
//   return(
//     <>
//       <AddUser onAddUser={addUserHandler}/>
//       <UsersList users={usersList}/>
//     </>
//   )
// }
// export default App;

// Mani6-login form using context

// import React, { useContext } from 'react'
// import Login from '../src/Mani6/Login/Login'
// import Home from '../src/Mani6/Home/Home'
// import AuthContext from './Mani6/store/auth-context'
// import MainHeader from '../src/Mani6/MainHeader/MainHeader'

// function App () {
//   const ctx = useContext(AuthContext);

//   return (
//     <>
//       <MainHeader/>
//       <main>
//         {!ctx.isLoggedIn && <Login/>}
//         {ctx.isLoggedIn && <Home/>}
//       </main>
//     </>
//   )
// }
// export default App

// Mani7-login using callback rendering concept

// import React, { useState,useCallback } from 'react'
// import Button from '../src/Mani7/Button/Button'
// import DemoOutput from './Mani7/Demo/DemoOutput'

// function App () {
//   const [showParagraph, setShowParagraph] = useState(false);
//   const [allowToggle,setAllowToggle] = useState(false);

//   console.log('App running')

//   const toggleParagraphHandler = useCallback(() => {
//     console.log("i am in usecallback")
//     if(allowToggle) {
//     setShowParagraph((prevState) => !prevState)
//     }
//   },[allowToggle]);

//   const allowToggleHandler = () => {
//     setAllowToggle(true);
//   }
//   return (
//     <>
//       <h1> Mmmmmmm</h1>
//       <DemoOutput  show ={showParagraph}/>
//       <Button onClick = {allowToggleHandler}>allowToggle</Button>
//       <Button onClick = {toggleParagraphHandler}>Toggle Para</Button>
//     </>
//   )
// }
// export default App

// Mani8 using classes

// import React from 'react'
// import UserFinder from '../src/Mani8/UserFinder'
// function App () {
//   return (
//     <>
//       <h1>kjhvghu</h1>
//       <UserFinder />
//     </>
//   )
// }
// export default App;

// Mani9  -API calling

// import React, { useCallback, useEffect, useState } from 'react'
// import MoviesList from '../src/Mani9/Movies/MoviesList'
// import AddMovie from './Mani9/Movies/AddMovie'

// function App () {
//   const [movies, setMovies] = useState([])
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState(null)

//_______________________________________{
// function fetchMoviesHandler() {
//   fetch('https://swapi.dev/api/films/')
//   .then(res => res.json())
//   .then(data=>{
//     const transformedMovies = data.results.map(movieData => {
//       return {
//           id:movieData.id,
//           title:movieData.title,
//           openingText:movieData.opening_crawl,
//           releaseDate:movieData.release_date
//       }
//     })
//     setMovies(transformedMovies)
//   })

// }
//______________________________________________}

// asyncway method  _ method-2
//______________________________________________{
//   const fetchMoviesHandler = useCallback(async () => {
//     setIsLoading(true)
//     setError(null);

//     try {
//       const res = await fetch('https://swapi.dev/api/films/')
//       const data = await res.json()

//       const transformedMovies = data.results.map(movieData => {
//         return {
//           id: movieData.id,
//           title: movieData.title,
//           openingText: movieData.opening_crawl,
//           releaseDate: movieData.release_date
//         }
//       })
//       setMovies(transformedMovies)
//     } catch (error) {
//         setError(error)
//         // setIsLoading(false)
//     }
//     setIsLoading(false)
//   }, [])

//   useEffect(() => {
//     fetchMoviesHandler()
//   }, [fetchMoviesHandler])

//  async function addMovieHandler(movie) {
//     // const res = await fetch('url', {3
//     //   //in place of url we have to keep to link
//     //   method:'POST',
//     //   body:JSON.stringify(movie),
//     //   header:{
//     //     'Content-Type':'application/ison'
//     //   }

//     // });
//     // const data = await res.json();
//     setMovies(prevState =>{
//       console.log({prevState})
//        return[movie,...prevState];
//     })

//   }
//   //__________________________________________}

//   return (
//     <>
//     <AddMovie onAddMovie={addMovieHandler} />
//       <button onClick={fetchMoviesHandler}>Fetch Movies</button>
//       {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
//       {!isLoading && movies.length === 0 && <p>NO MOVIES FOUND</p>}
//       {isLoading && <p>Loading...!</p>}
//       {error &&<p>{error.message}</p>}
//     </>
//   )
// }
// export default App

// Mani10

// import React from 'react'
// import SimpleInput from './Mani10/SimpleInput'

// //import BasicForm from './Mani10/BasicForm'
// const App = () => {
//   return (
//     <>
//     {/* we can take simpleinput also basic input is also an example */}
//       {/* <BasicForm />  */}
//       <SimpleInput />
//     </>
//   )
// }
// export default App

// Mani11 - increment decrement using redux

// import React from "react";
// import Counter from "./Mani11/Counter";
// import CounterClass from '../src/Mani11/CounterClass'
// import CounterValue from "./Mani11/CounterValue";
// import Films from "./Mani11/Films";

// const App = () => {
//   return (
//     <>
//     <Counter />
//     <Films />
//     {/* <CounterClass /> */}
//      {/* <CounterValue /> */}
//     </>
//   )
// }
// export default App;

// Mani 12

// import React from "react";  

// const App = () => {
//   return (
//     <>
//     <h1>hello</h1>
//     </>
//   )

// }
// export default App;

//Mani13

// import React from 'react'
// import { Redirect, Route, Switch } from 'react-router-dom'
// // import MainHeader from './Mani13/MainHeader'
// import Products from './Mani13/Pages/Products'
// import Welcome from './Mani13/Pages/Welcome'
// import Home from '../src/Mani13/Pages/Home'
// import ProductDetails from '../src/Mani13/ProductDetail'
// import Layout from './Mani13/Layout/Layout'
// import NotFound from './Mani13/Pages/NotFound'

// const App = () => {
//   return <Layout>
//           <Switch>
//         {/* <Routes> */}
//         <Route exact path='/'>
//           <Home />
//           {/* <Redirect to="/products" /> */}
//         </Route>
//         <Route exact path='/Welcome'>
//           <Welcome />
//         </Route>
//         <Route exact path='/Products'>
//           <Products />
//         </Route>
//         <Route exact path='/product-detail/:productId '>
//           <ProductDetails />
//         </Route>
//         <Route path="*">
//           <NotFound />
//         </Route>
//         {/* </Routes> */}
//       </Switch>
//   </Layout>
// }
// export default App

//Mani14 react task given by suresh sir including all components
// import React from 'react'
// import NavBar1 from '../src/Mani14/NavBar1/NavBar1'
// import { Route, Switch } from 'react-router-dom'
// import Home from '../src/Mani14/Nav1-Pages/Home/Home'
// import Products from './Mani14/Nav1-Pages/Products/Products'
// import Pay from '../src/Mani14/Nav1-Pages/Pay/Pay'
// import Contact from '../src/Mani14/Nav1-Pages/Contact/Contact'
// import RegistrationForm from './Mani14/Nav1-Pages/RegistrationForm/RegistrationForm'
// import NewRegistrationForm from '../src/Mani14/Nav1-Pages/NewRegistrationForn/NewRegistrationForm'
// import LoginForm from '../src/Mani14/Nav1-Pages/LoginForm/LoginForm'
// import LoggedInPage from './Mani14/Nav1-Pages/LoggedInPage/LoggedInPage'
// const App = () => {
//   return (
//     <>
//       <NavBar1 />
//       <Switch>
//         <Route exact path='/'>
//           <Home />
//         </Route>
//         <Route exact path='/Home'>
//           <Home />
//         </Route>
//         <Route exact path='/Products'>
//           <Products />
//         </Route>
//         <Route exact path='/Pay'>
//           <Pay />
//         </Route>
//         <Route exact path='/Contact'>
//           <Contact />
//         </Route>
//         <Route path='/RegistrationForm'>
//           <RegistrationForm />
//         </Route>
//         <Route path='/NewRegistrationForm'>
//           <NewRegistrationForm />
//         </Route>
//         <Route path='/LoginForm'>
//           <LoginForm  />
//         </Route>
//         <Route exact path='/LoggedInPage'>
//           <LoggedInPage  />
//         </Route>
//       </Switch>

//       <div>
        
//       </div>
//     </>
//   )
// }
// export default App

//Meenaa


// import React from "react";
// import { Redirect, Route, Switch } from 'react-router-dom';

// import NavBar1 from "./components/BasicForm/NavBar/NavBar1";
// import Home from './components/BasicForm/Home/Home';
// import Product from "./components/BasicForm/Products/Product";
// import More from './components/BasicForm/More/More';
// import Regist from "./components/BasicForm/Registration/Registration";
// import Contact from "./components/BasicForm/Contact/Contact";
// //import Layout1 from './components/BasicForm/Layout1/Layout1';
// import NewRegistrationForm from './components/NewRegister/NewRegistrationForm';
// import LoginForm from "./components/LoginForm/LoginForm";
// import Api from "./components/Api/Api";
// const App = () => {
//   return (
//     <>
// <NavBar1/>
//       <Switch>
//         <Route exact path='/'><Home /></Route>
//         <Route exact path='/Home'><Home /></Route>
//         <Route exact path='/Product'><Product /></Route>
//         <Route exact path='/More'><More /></Route>
//         <Route exact path='/Registration'><Regist /></Route>
//         <Route exact path='/Contact'><Contact /></Route>
//         <Route exact path='/NewRegistrationForm'><NewRegistrationForm /></Route>
//         <Route exact path='/LoginForm'><LoginForm /></Route>
//         <Route exact path='/Api'><Api /></Route>
//         {/* <Api/> */}

        
//           {/* <Route path="/LoginForm" element={<LoginForm/>}/>  */}
        
//        </Switch>
     
//      </>
//    );
//  }
//  export default App;

//Mani15


// import React from "react";
// // import NewForm from "./Mani15/NewForm";
// import LoginForm from "./Mani15/LoginForm";
// //import Api from "./Mani15/Api/Api"

// const App = () => {

//     return (
//     <>
//     <LoginForm />
//   {/* <Api /> */}
//     </>
//     )
// }
// export default App

import React from 'react'
import ABCD from './Mani15/ABCD'
import LoginForm from './Mani15/LoginForm'
import { Routes, Route,  BrowserRouter } from 'react-router-dom'
export default function App() {
  return (
    <Routes>
        <Route  path="/"  element={<LoginForm/>}/>
        <Route  path="/ABCD"  element={<ABCD  />}/>
        </Routes>

  )
}

