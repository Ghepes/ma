import React, { useState } from 'react';
import {
    CFormGroup,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CRow,
    CCol,
    CForm,
    CInput,
    CLabel,
    CCardFooter,
  } from '@coreui/react';
import CIcon from '@coreui/icons-react'
import swal from 'sweetalert'
import {API} from '../../../Config'
import { useTranslation } from 'react-i18next';
const InsuranceProviderCreate=()=>{
    const [address,setAddress]= useState("");
    const [addressError,setAddressError]=useState("");
    const [name,setName]=useState("");
    const [nameError,setNameError]=useState("");
    const [t,i18n]=useTranslation();
    const [phone,setPhone]=useState("");
    const [phoneError,setPhoneError]=useState("");
    const reset_form=(e)=>{
        setName("");
        setAddress("");
        setPhone("");
        setNameError("");
        setAddressError("");
        setPhoneError("");
    }
    const handleValidation=()=>{
        let formIsValid=true;
        let errors=[];
        if(!name||name===""||name===undefined){
            formIsValid=false;
            setNameError("Name can not be empty");
            errors.push("Name can not be empty");
        }
        else{
            setNameError("");
        }
        if(!address||address===""||address===undefined){
            formIsValid=false;
            setAddressError("Address can not be empty");
            errors.push("Address can not be empty");
        }
        else{
            setAddressError("");
        }
        if(!phone||phone===""||phone===undefined){
            formIsValid=false;
            setPhoneError("Phone can not be empty");
            errors.push("Phone can not be empty");
        }
        else{
            setPhoneError("");
        }
        return {valid:formIsValid,errors:errors};
    }
    const handle_submit=()=>{
        let result=handleValidation();
        if(result.valid===true){
            API.post('/api/insurancerenew',JSON.stringify({name:name,address:address,phonenumber:phone})).then((response)=>{
                if(response.data.success===true){
                    setName("");
                    setAddress("");
                    setPhone("");
                    swal("Created!", "A new Insurance Provider has been created", "success");
                }
            }).catch((error)=>{
                swal("Failed!", error.message, "error");
            })
        }
    }
    return(
        <>
        <CRow>
            <CCol xs="12" md="6">
            <CCard>
                <CCardHeader>
                <h3>{t('translations.Basic_Data.Insurance_Providers.Create.header')}</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="nf-email">{t('translations.Basic_Data.Insurance_Providers.table_headers.name')} *</CLabel>
                            <CInput onChange={(event)=>setName(event.target.value)} value={name} type="text" id="nf-email" name="nf-email" placeholder="Enter name.."/>
                            {nameError!==undefined && <p className="text-danger">{nameError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-password">Address *</CLabel>
                            <CInput onChange={(event)=>setAddress(event.target.value)} value={address} type="text" id="nf-password" name="nf-password" placeholder="Enter address.."/>
                            {addressError!==undefined && <p className="text-danger">{addressError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-password">Phone *</CLabel>
                            <CInput onChange={(event)=>setPhone(event.target.value)} value={phone} type="text" id="nf-password" name="nf-password" placeholder="Enter phone number.."/>
                            {phoneError!==undefined && <p className="text-danger">{phoneError}</p>}
                        </CFormGroup>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton onClick={handle_submit} type="button" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton onClick={reset_form} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                </CCardFooter>
            </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default InsuranceProviderCreate;