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

const CreateEmployeeType=()=>{
    const [description,setDescription]= useState("");
    const [name,setName]=useState("");
    const [nameError,setNameError]=useState("");
    const [t,i18n]=useTranslation();
    const reset_form=(e)=>{
        setDescription("");
        setName("");
        setNameError("");
    }
    const handleValidation=()=>{
        let formIsValid=true;
        let errors=[];
        if(!name||name===""||name===undefined){
            formIsValid=false;
            setNameError("Name cannot be empty");
            errors.push("Name cannot be empty")
        }
        else{
            setNameError("");
        }
        return {valid:formIsValid,errors:errors};
    }
    const handle_submit=()=>{
        let result=handleValidation();
        if(result.valid===true){
            let profile=JSON.parse(localStorage.getItem('profile'));
            API.post('/api/employmenttypes',JSON.stringify({name:name,description:description,createdby:profile.role})).then((response)=>{
                console.log(response.data)
                if(response.data.success===true){
                    reset_form();
                    swal("Created!", "A new Employement Type has been created", "success");
                }
                if(response.data.success==='false'){
                    swal("Failed!", response.data.message, "error");
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
                <h3>{t('translations.Basic_Data.Employment_Types.Create.header')}</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="selectCode">{t('translations.Basic_Data.Employment_Types.table_headers.name')} *</CLabel>
                            <CInput onChange={(event)=>setName(event.target.value)} value={name} type="text" id="selectCode" name="selectCode" placeholder="Enter Employee Type name.." />
                            {nameError!==undefined && <p className="text-danger">{nameError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="name">{t('translations.Basic_Data.Employment_Types.table_headers.description')}</CLabel>
                            <CInput onChange={(event)=>setDescription(event.target.value)} value={description} type="text" id="name" name="name"/>
                        </CFormGroup>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton type="button" onClick={handle_submit} size="sm" color="primary"><CIcon name="cil-scrubber" /> {t('translations.buttons.Submit')}</CButton> <CButton onClick={reset_form} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> {t('translations.buttons.Reset')}</CButton>
                </CCardFooter>
            </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default CreateEmployeeType