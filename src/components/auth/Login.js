import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Redirect, useHistory } from "react-router"
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CLabel,
  CRow,
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {PUBLIC_API, API,TOKEN} from '../../Config'
import swal from 'sweetalert'
const Login = () => {
    const [adminEmail,setAdminEmail]=useState("");
    const [adminPassword,setAdminPassword]=useState("");
    const [loginError,setLoginError]=useState("");
    const history=useHistory();
    const handleKeypress = e => {
      //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        handleSubmit();
      }
    };
    const handleSubmit=()=>{
        PUBLIC_API.post('/api/signin',JSON.stringify({email:adminEmail,password:adminPassword})).then((response1)=>{
          if(response1.data.success==="True"){
            console.log(response1.data);
            API.defaults.headers.common.Authorization = `Bearer ${response1.data.token}`;
            localStorage.setItem(TOKEN,response1.data.token);
            localStorage.setItem("menu",JSON.stringify(response1.data.menu));
            localStorage.setItem("roleid",response1.data.roleid);
            localStorage.setItem('userid',response1.data.userid);
            localStorage.setItem('company_id',response1.data.company);
            API.get('/api/profile').then(response2=>{
              console.log(response2.data.data[0])
              localStorage.setItem('profile',JSON.stringify(response2.data.data[0]))
              history.push('/dashboard');
            })
          }
        }).catch(error=>{
          setLoginError("Please provide correct credentials");
          console.log(error)
          swal("Error!","Credentials do not match","error");
        })
    }
    const isLoggedIn=()=>{
      if(localStorage.getItem(TOKEN)===null){
        return false;
      }
      return true;
    }
    return (
      <>
      {
        isLoggedIn()===true && 
        <Redirect to="/dashboard"/>
      }
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="5">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <hr/>
                      {loginError!==undefined && <p className="text-danger">{loginError}</p>}
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput value={adminEmail} onChange={(event)=>setAdminEmail(event.target.value)} type="text" placeholder="Username" autoComplete="username" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput onKeyDown={handleKeypress} value={adminPassword} onChange={(event)=>setAdminPassword(event.target.value)} type="password" placeholder="Password" autoComplete="current-password" />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton color="primary" type="button" onClick={handleSubmit} className="px-4">Login</CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <CButton color="link" className="px-0">Forgot password?</CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                {/* <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard> */}
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
      </>
    )
}

export default Login
