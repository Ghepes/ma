import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import $ from 'jquery'
import popper from 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle'
import './scss/style.scss';
import './App.css'
import {useTranslation} from 'react-i18next'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Home = React.lazy(() => import('./components/Home/New_Home'));
const Login = React.lazy(() => import('./components/auth/Login'));
// const Register = React.lazy(() => import('./components/auth/SignUp'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     // You can also log the error to an error reporting service
//     //logErrorToMyService(error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       // You can render any custom fallback UI
//       return <h1>Something went wrong.</h1>;
//     }

//     return this.props.children; 
//   }
// }
const App=()=> {
  const { t, i18n } = useTranslation();
  
  React.useEffect(()=>{
    document.dir=i18n.dir();
    document.lang=i18n.language;
    document.body.dir = i18n.dir();
    
  })
  return (
    <>
    <Router>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
            {/* <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} /> */}
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
            <Route exact path="/" name="Home" render={props => <Home {...props}/>} />
            <Route path="/dashboard" name="Dashboard" render={props => <TheLayout {...props}/>} />
          </Switch>
        </React.Suspense>
    </Router>
    </>
  );
}


export default App;
