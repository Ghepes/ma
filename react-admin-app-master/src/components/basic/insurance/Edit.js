import React, { useState } from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,CForm, CFormGroup, CLabel, CInput, CCardFooter
  } from '@coreui/react';
import {API} from '../../../Config'
import CIcon from '@coreui/icons-react'
import {useLocation} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';

const EditProvider=()=>{
    let history = useHistory();
    let location = useLocation();
    const [id,setId]=useState("");
    const [address,setAddress]= useState("");
    const [addressError,setAddressError]=useState("");
    const [name,setName]=useState("");
    const [nameError,setNameError]=useState("");
    const [phone,setPhone]=useState("");
    const [phoneError,setPhoneError]=useState("");
    const [t,i18n]=useTranslation();
    const reset_form=(e)=>{
        setName(location.item.Name);
        setAddress(location.item.Address);
        setPhone(location.item.Phone);
        setNameError("");
        setAddressError("");
        setPhoneError("");
    }
    React.useEffect(() => {
        if(location.item===undefined){
            history.goBack();
        }
        else{
            setName(location.item.Name || location.item.الاسم);
            setAddress(location.item.Address||location.item.العنوان);
            setPhone(location.item.Phone||location.item.الهاتف);
            setId(location.item.id)
        }
    },[]);
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
            let profile=JSON.parse(localStorage.getItem('profile'));
            API.put('/api/insurancerenew/'+id+'/',JSON.stringify({name:name,address:address,phonenumber:phone,updatedby:profile.role})).then(response=>{
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
        <CRow>
            <CCol xs="12" md="12">
            <CCard>
                <CCardHeader>
                <h3>{t('translations.Basic_Data.Insurance_Providers.table_headers.header')}</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="nf-email">{t('translations.Basic_Data.Insurance_Providers.table_headers.name')} *</CLabel>
                            <CInput onChange={(event)=>setName(event.target.value)} value={name} type="text" id="nf-email" name="nf-email" placeholder="Enter name.."/>
                            {nameError!==undefined && <p className="text-danger">{nameError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-password">{t('translations.Basic_Data.Insurance_Providers.table_headers.address')} *</CLabel>
                            <CInput onChange={(event)=>setAddress(event.target.value)} value={address} type="text" id="nf-password" name="nf-password" placeholder="Enter address.."/>
                            {addressError!==undefined && <p className="text-danger">{addressError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-password">{t('translations.Basic_Data.Insurance_Providers.table_headers.phone')} *</CLabel>
                            <CInput onChange={(event)=>setPhone(event.target.value)} value={phone} type="text" id="nf-password" name="nf-password" placeholder="Enter phone number.."/>
                            {phoneError!==undefined && <p className="text-danger">{phoneError}</p>}
                        </CFormGroup>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton onClick={handle_submit} type="button" size="sm" color="primary"><CIcon name="cil-scrubber" /> {t('translations.buttons.Submit')}</CButton> <CButton onClick={reset_form} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> {t('translations.buttons.Reset')}</CButton> <CButton onClick={()=>{history.goBack()}} type="button" size="sm" color="info"><CIcon name="cil-x" /> {t('translations.buttons.Cancel')}</CButton>
                </CCardFooter>
            </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default EditProvider;