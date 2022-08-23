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
import {API} from '../../../Config'
import swal from 'sweetalert'
import { useTranslation } from 'react-i18next';
const RoleCreate=()=>{
    const [role,setRole]= useState("");
    const [roleError,setRoleError]=useState("");
    const [description,setDescription]=useState("");
    const [descriptionError,setDescriptionError]=useState("");
    const [order,setOrder]=useState("");
    const [orderError,setOrderError]=useState("");
    const [t,i18n]=useTranslation();
    const reset_form=(e)=>{
        setRole("");
        setOrder("");
        setDescription("");
        setRoleError("");
        setOrderError("");
        setDescriptionError("");
    }
    const handleValidation=()=>{
        let formIsValid=true;
        let errors=[];
        if(!role||role===""||role===undefined){
            formIsValid=false;
            setRoleError("Job Title Name can not be empty");
            errors.push("Job Title Name can not be empty");
        }
        else{
            setRoleError("");
        }
        return {valid:formIsValid,errors:errors};
    }
    const createRole=()=>{
        let result=handleValidation();
        if(result.valid===true){
            let profile=JSON.parse(localStorage.getItem('profile'));
            API.post('/api/role',JSON.stringify({name:role,description:description,sortorder:order,createdby:profile.role})).then((response)=>{
                if(response.data.success===true){
                    reset_form();
                    swal("Created!", "A new Job Title has been created", "success");
                }
            }).catch((error)=>{
                swal("Failed!", error.data.message, "error");
            })
        }
    }
    return(
        <>
        <CRow>
            <CCol xs="12" md="6">
            <CCard>
                <CCardHeader>
                <h3>{t('translations.Basic_Data.Job_Titles.Create.header')}</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="nf-email">{t('translations.Basic_Data.Job_Titles.table_headers.name')}</CLabel>
                            <CInput onChange={(event)=>setRole(event.target.value)} value={role} type="text" id="nf-email" name="nf-email" placeholder={t('translations.Basic_Data.Job_Titles.Create.name_placeholder')}/>
                            {roleError!==undefined && <p className="text-danger">{roleError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-password">{t('translations.Basic_Data.Job_Titles.table_headers.order')}</CLabel>
                            <CInput onChange={(event)=>setOrder(event.target.value)} value={order} type="text" id="nf-password" name="nf-password" placeholder={t('translations.Basic_Data.Job_Titles.Create.order_placeholder')}/>
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-description">{t('translations.Basic_Data.Job_Titles.table_headers.description')}</CLabel>
                            <CInput onChange={(event)=>setDescription(event.target.value)} value={description} type="text" id="nf-description" name="nf-description" placeholder={t('translations.Basic_Data.Job_Titles.Create.description_placeholder')}/>
                        </CFormGroup>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton onClick={createRole} type="button" size="sm" color="primary"><CIcon name="cil-scrubber" /> {t('translations.buttons.Submit')}</CButton> <CButton onClick={reset_form} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> {t('translations.buttons.Reset')}</CButton>
                </CCardFooter>
            </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default RoleCreate