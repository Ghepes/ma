import React, { useEffect, useState } from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import {TOKEN,API} from '../Config'
import {Redirect, useHistory} from "react-router"
const TheLayout = () => {
  const isLoggedIn=()=>{
    if(localStorage.getItem(TOKEN)===null){
      return false;
    }
    return true;
  }
  let history=useHistory();
  const [count,setCount]=useState(0)
  useEffect(() => {
    API.get('/api/profile').then((response)=>{
      console.log(response.data)
      if(response.data.success=="false"){
        localStorage.removeItem('profile');
        localStorage.removeItem(TOKEN);
        history.push('/login');
      }
      setCount(100);
    }).catch((error)=>{
      localStorage.removeItem('profile');
      localStorage.removeItem(TOKEN);
      history.push('/login');
    })
    if(window.localStorage.i18nextLng=="ar"){
      document.getElementsByClassName('c-wrapper')[0].style.marginLeft="0px";
    }
    else{
      document.getElementsByClassName('c-wrapper')[0].style.marginLeft="";
    }
  },[]);
  return (
    <>
    {
        isLoggedIn()===false &&
        <Redirect to="/login"/>
    }
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
    </>
  )
}

export default TheLayout
