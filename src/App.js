import React, {Suspense, lazy, FC} from 'react';
import { Routes, Route } from 'react-router-dom';
import classes from './App.module.css';
import Main from './Content/Main/Main';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AuthRedirect } from './hoc/withAuthRedirect';
import { initialaizApp } from './Redux/app-reducer';
 

import Layout from './Layout/Layout';
import Preloader from './common/Preloader/Preloader';


const DialogsContainer = React.lazy(() => import('./Content/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('./Content/Login/Login'));
const UsersContainer = React.lazy(() => import('./Content/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./Content/Profile/ProfileContainer'));
const NotFoundPage = React.lazy(() => import('./Notfoundpage/NotFoundPage'));


class App extends React.Component {

  componentDidMount() {
    this.props.initialaizApp();
  }

  render(){
    if(!this.props.initialaized) {return <Preloader/>}
    return (
      <div className={classes.wraper}>

          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Suspense fallback={<Preloader/>}><Main/></Suspense>}/>
              <Route path='dialogs' element={<Suspense fallback={<Preloader/>}><DialogsContainer/></Suspense>}/>
              <Route path='profile' element={<Suspense fallback={<Preloader/>}><ProfileContainer/></Suspense>}/>
              <Route path='profile/:userId' element={<Suspense fallback={<Preloader/>}><ProfileContainer/></Suspense>}/>
              <Route path='users' element={<Suspense fallback={<Preloader/>}><UsersContainer/></Suspense>}/>
              <Route path='login' element={<Suspense fallback={<Preloader/>}><Login/></Suspense>}/>
              <Route path='*' element={<Suspense fallback={<Preloader/>}><NotFoundPage/></Suspense>}/>
            </Route>
          </Routes>

      </div>
    )
  }
    
  
}

const mapStateToProps = (state) => ({
  initialaized: state.app.initialaized
})

export default compose(
  connect(mapStateToProps, {initialaizApp}))(App);
