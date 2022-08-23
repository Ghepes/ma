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
const LeaveTypeCreate=()=>{
    const [type,setType]= useState("");
    const [days,setDays]=useState("");
    const [t,i18n]=useTranslation();
    const reset_form=(e)=>{
        setType("");
        setDays("");
    }
    const handle_submit=()=>{
        API.post('/api/leavetype',JSON.stringify({name:type,days:days})).then((response)=>{
            if(response.data.success===true){
                setType("");
                setDays("");
                swal("Created!", "A new Leave Type has been created", "success");
            }
        }).catch((error)=>{
            swal("Failed!", error.message, "error");
        })
    }
    return(
        <>
        <CRow>
            <CCol xs="12" md="12">
            <CCard>
                <CCardHeader>
                <h3>{t('translations.Basic_Data.Leave_Type.Create.header')}</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="nf-email">{t('translations.Basic_Data.Leave_Type.table_headers.type')}</CLabel>
                            <CInput onChange={(event)=>setType(event.target.value)} value={type} type="text" id="nf-email" name="nf-email" placeholder={t('translations.Basic_Data.Leave_Type.Create.type_placeholder')}/>
                            
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-password">{t('translations.Basic_Data.Leave_Type.table_headers.days')}</CLabel>
                            <CInput onChange={(event)=>setDays(event.target.value)} value={days} type="number" id="nf-password" name="nf-password" placeholder={t('translations.Basic_Data.Leave_Type.Create.days_placeholder')}/>
                        </CFormGroup>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton onClick={handle_submit} type="button" size="sm" color="primary"><CIcon name="cil-scrubber" /> {t('translations.buttons.Submit')}</CButton> <CButton onClick={reset_form} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> {t('translations.buttons.Reset')}</CButton>
                </CCardFooter>
            </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default LeaveTypeCreate