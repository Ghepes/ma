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
const CreateBranch=()=>{
    const [description,setDescription]= useState("");
    const [name,setName]=useState("");
    const [t,i18n]=useTranslation();
    const reset_form=(e)=>{
        setDescription("");
        setName("");
    }
    const handle_submit=()=>{
        API.post('/api/role',JSON.stringify({name:name,description:description})).then((response)=>{
            console.log(response.data)
            if(response.data.success===true){
                reset_form();
                swal("Created!", "A new Role has been created", "success");
            }
            if(response.data.success==='false'){
                swal("Failed!", response.data.message, "error");
            }
        }).catch((error)=>{
            swal("Failed!", error.message, "error");
        })
    }
    return(
        <>
        <CRow>
            <CCol xs="12" md="6">
            <CCard>
                <CCardHeader>
                <h3>{t('translations.Admin.Roles.Create.header')}</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="selectCode">{t('translations.Admin.Roles.Create.Name')} *</CLabel>
                            <CInput onChange={(event)=>setName(event.target.value)} value={name} type="text" id="selectCode" name="selectCode"/>
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="name">{t('translations.Admin.Roles.Create.Description')}</CLabel>
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
        <hr/>
        
        </>
    )
}

export default CreateBranch