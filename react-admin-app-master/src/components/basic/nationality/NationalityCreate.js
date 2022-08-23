import React, { useState } from 'react';
import {CFormGroup,CButton,CCard,CCardBody,CCardHeader,CFormText,CRow,CCol,CForm,CInput,CLabel,CCardFooter} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import { API } from '../../../Config';
import swal from 'sweetalert'
import { useTranslation } from 'react-i18next';
const NationalityCreate=()=>{
    const [nationality,setNationality]= useState("");
    const [sort_order,setSortOrder]=useState("");
    const [t,i18n]=useTranslation();
    const reset_form=(e)=>{
        setNationality("");
        setSortOrder("");
    }
    const handle_submit=()=>{
        API.post('/api/nationality',JSON.stringify({name:nationality,sortorder:sort_order})).then((response)=>{
            if(response.data.success===true){
                setNationality("");
                setSortOrder("");
                swal("Created!", "A new Nationality has been created", "success");
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
                <h3>{t('translations.Basic_Data.Nationality.Create.header')}</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="nf-email">{t('translations.Basic_Data.Nationality.Create.Name')}</CLabel>
                            <CInput onChange={(event)=>setNationality(event.target.value)} value={nationality} type="text" id="nf-email" name="nf-email" placeholder={t('translations.Basic_Data.Nationality.Create.Name_Placeholder')}/>
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-password">{t('translations.Basic_Data.Nationality.Create.Order')}</CLabel>
                            <CInput onChange={(event)=>setSortOrder(event.target.value)} value={sort_order} type="text" id="nf-password" name="nf-password" placeholder={t('translations.Basic_Data.Nationality.Create.Order_Placeholder')}/>
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

export default NationalityCreate