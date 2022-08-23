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
    const [code,setCode]= useState("");
    const [name,setName]=useState("");
    const [address,setAddress]=useState("");
    const [contact,setContact]=useState("");
    const [t,i18n]=useTranslation();
    const reset_form=(e)=>{
        setCode("");
        setName("");
        setAddress("");
        setContact("");
    }
    const handle_submit=()=>{
        API.post('/api/branch',JSON.stringify({code:code,name:name,address:address,contact:contact})).then((response)=>{
            console.log(response.data)
            if(response.data.success===true){
                setCode("");
                setName("");
                setAddress("");
                setContact("");
                swal("Created!", "A new Branch has been created", "success");
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
                <h3>{t('translations.Basic_Data.Branches.Create.header')}</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="selectCode">{t('translations.Basic_Data.Branches.table_headers.code')} *</CLabel>
                            <CInput onChange={(event)=>setCode(event.target.value)} value={code} type="number" id="selectCode" name="selectCode" placeholder={t('translations.Basic_Data.Branches.Create.code_placeholder')} />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="name">{t('translations.Basic_Data.Branches.table_headers.name')} *</CLabel>
                            <CInput onChange={(event)=>setName(event.target.value)} value={name} type="text" id="name" name="name" placeholder={t('translations.Basic_Data.Branches.Create.name_placeholder')}/>
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="address">{t('translations.Basic_Data.Branches.table_headers.address')} *</CLabel>
                            <CInput onChange={(event)=>setAddress(event.target.value)} value={address} type="text" id="address" name="addresss" placeholder={t('translations.Basic_Data.Branches.Create.address_placeholder')}/>
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="contact">{t('translations.Basic_Data.Branches.table_headers.contact')} *</CLabel>
                            <CInput onChange={(event)=>setContact(event.target.value)} value={contact} type="text" id="contact" name="contact" placeholder={t('translations.Basic_Data.Branches.Create.contact_placeholder')}/>
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

export default CreateBranch