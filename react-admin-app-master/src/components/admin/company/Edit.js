import React, { useState } from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,CInputGroup,CInputGroupAppend,CCollapse,
    CRow,CForm, CFormGroup, CLabel, CInput, CCardFooter
  } from '@coreui/react';
import {API} from '../../../Config'
import CIcon from '@coreui/icons-react'
import {useLocation} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

const EditCompany=()=>{
    let history = useHistory();
    let location = useLocation();
    const [id,setId]=useState("");
    const [accordion,setAccordion]=useState("");
    const [code,setCode]= useState("");
    const [userid,setUserId]=useState("");
    const [companyname,setCompanyName]=useState("");
    const [branchname,setBranchName]=useState("");
    const [companynameError,setCompanyNameError]=useState("");
    const [password,setPassword]= useState("");
    //const [contactExpiration,setContactExpiration]=useState("");
    const [fullName,setFullName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [licenseName,setLicenseName]=useState("");
    const [licenseNo,setLicenseNo]=useState("");
    const [licenseExpDate,setLicenseExpDate]=useState(new Date());
    const reset_form=(e)=>{
        setCode("");
        setUserId("");
        setCode("");
        setCompanyName("");
        setPassword("");
        //setContactExpiration("");
        setFullName("");
        setEmail(location.item.EMAIL);
        setPhone("");
        setLicenseExpDate("");
        setLicenseName("");
        setLicenseNo("");
    }
    React.useEffect(() => {
        if(location.item===undefined){
            history.goBack();
        }
        else{
            setCode(location.item.CODE||location.item.الرمز);
            setUserId("");
            setCompanyName(location.item.NAME || location.item.الاسم);
            setPassword("");
            //setContactExpiration(location.item.CONTACT_EXPIRATION);
            setFullName("");
            setEmail(location.item.EMAIL||location.item["البريد الإلكتروني"]);
            setPhone("");
            setLicenseExpDate(location.item.EXPIRY_DATE ||location.item["تاريخ انتهاء الصلاحية"]);
            setLicenseName(location.item.SUBSCRIPTION_DESCRIPTION);
            setLicenseNo(location.item.SUBSCRIPTION_FEE||location.item["رسوم الاشتراك"]);
            setId(location.item.id);
        }
    },[]);
    const handleValidation=()=>{
        let formIsValid=true;
        let errors=[];
        if(!companyname||companyname===""||companyname===undefined){
            formIsValid=false;
            setCompanyNameError("Company Name can not be empty");
            errors.push("Name can not be empty");
        }
        else{
            setCompanyNameError("");
        }
        return {valid:formIsValid,errors:errors};
    }
    const handle_submit=()=>{
        let result=handleValidation();
        if(result.valid===true){
            let profile=JSON.parse(localStorage.getItem('profile'));
            API.put('/api/company/'+id+'/',JSON.stringify({id:id,code:code,companyname:companyname,emails:email,branchname:"1",licensename:licenseName,licenseno:licenseNo,licenseexpdate:licenseExpDate,discreption:licenseName,expirydate:licenseExpDate,price:licenseNo,createdby:profile.role,createdtime:new Date().toJSON()})).then((response)=>{
                if(response.data.success===true){
                    swal("Updated!",response.data.message,"success").then(value=>{
                        history.goBack();
                    })
                }
            }).catch(error=>{

            })
        }
    }
    return(
        <>
        <CRow><CCol xs="12" md="12">
            <CCard>
                <CCardHeader><h4>Edit Company Details</h4></CCardHeader>
                <CCardBody>
                    <CForm>
                        <CRow>
                            <CCol>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="text-input">Company Code *</CLabel>
                                        <CInputGroup>
                                            <CInput value={code} onChange={(event)=>setCode(event.target.value)} id="text-input" name="text-input" placeholder="Enter code for new Company.." />
                                            <CInputGroupAppend>
                                                <CButton  type="button" color="primary">Check</CButton>
                                            </CInputGroupAppend>
                                            
                                        </CInputGroup>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="lastname-input">Company Name *</CLabel>
                                        <CInput value={companyname} onChange={(event)=>setCompanyName(event.target.value)} type="text" id="lastname-input" name="lastname-input" placeholder="Enter Name for new Company.."/>
                                        {}
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="email-input">Email</CLabel>
                                        <CInput value={email} onChange={(event)=>setEmail(event.target.value)} type="email" id="email-input" name="email-input" autoComplete="email" placeholder=""/>
                                    </CCol>
                                </CFormGroup>
                            </CCol>
                            <CCol>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="text-input">User ID *</CLabel>
                                        <CInputGroup>
                                            <CInput value={userid} onChange={(event)=>setUserId(event.target.value)} id="text-input" name="text-input" placeholder="" />
                                            <CInputGroupAppend>
                                                <CButton  type="button" color="primary">Check</CButton>
                                            </CInputGroupAppend>
                                        </CInputGroup>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="password-input">Password *</CLabel>
                                        <CInput value={password} onChange={(event)=>setPassword(event.target.value)} type="text" id="password-input" name="password-input" placeholder=""/>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="password-input">Full Name *</CLabel>
                                        <CInput value={fullName} onChange={(event)=>setFullName(event.target.value)} type="text" id="password-input" name="password-input" placeholder=""/>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="password-input">Contact</CLabel>
                                        <CInput value={phone} onChange={(event)=>setPhone(event.target.value)} type="text" id="password-input" name="password-input" placeholder=""/>
                                    </CCol>
                                </CFormGroup>
                            </CCol>
                        </CRow>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton onClick={handle_submit} type="button" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" onClick={reset_form} size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton> <CButton onClick={()=>{history.goBack()}} type="button" size="sm" color="info"><CIcon name="cil-x"/>Cancel</CButton>
                </CCardFooter>
            </CCard></CCol>
        </CRow>
        <CRow>
            <CCol>
                <CCard>
                    <div id="accordion">
                        <CCardHeader>
                            <CButton block color="link" className="text-left m-0 p-0" onClick={() => setAccordion(accordion === 0 ? null : 0)}>
                            <h5>Subscription</h5>
                            </CButton>
                        </CCardHeader>
                        <CCollapse show={accordion === 0}>
                            <CCardBody>
                                <CForm>
                                    <CRow>
                                        <CCol>
                                            <CFormGroup row>
                                                <CCol>
                                                    <CLabel htmlFor="license-name">Description *</CLabel>
                                                    <CInput value={licenseName||""} onChange={(event)=>setLicenseName(event.target.value)} type="text" id="license-name" name="license-name" placeholder=""/>
                                                </CCol>
                                            </CFormGroup>
                                            <CFormGroup row>
                                                <CCol>
                                                    <CLabel htmlFor="license-date">Expiry Date *</CLabel>
                                                    <CInput value={licenseExpDate} onChange={(event)=>setLicenseExpDate(event.target.value)} type="date" id="license-date" name="license-date" placeholder=""/>
                                                </CCol>
                                            </CFormGroup>
                                        </CCol>
                                        <CCol>
                                            <CFormGroup row>
                                                <CCol>
                                                    <CLabel htmlFor="license-no">Price *</CLabel>
                                                    <CInput value={licenseNo} onChange={(event)=>setLicenseNo(event.target.value)} type="text" id="license-no" name="license-no" placeholder=""/>
                                                </CCol>
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                </CForm>
                            </CCardBody>
                        </CCollapse>
                    </div>
                </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default EditCompany;