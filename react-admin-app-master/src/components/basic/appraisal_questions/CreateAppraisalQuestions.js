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
    CLabel,
    CCardFooter,
    CTextarea,
  } from '@coreui/react';
import CIcon from '@coreui/icons-react'
import swal from 'sweetalert'
import {API} from '../../../Config'
import { useTranslation } from 'react-i18next';
const CreateAppraisalQuestions=()=>{
    const [question,setQuestion]=useState("");
    const [t,i18n]=useTranslation();
    const [questionError,setQuestionError]=useState("");
    const reset_form=(e)=>{
        setQuestion("");
    }
    const handle_submit=()=>{
        if(!question||question===""||question===undefined){
            setQuestionError("Question can not be empty");
        }
        else{
            let profile=JSON.parse(localStorage.getItem('profile'));
            API.post('/api/questions',JSON.stringify({questions:question,createdby:profile.role})).then((response)=>{
                if(response.data.success===true){
                    reset_form();
                    swal("Created!", response.data.message, "success");
                }
                else if(response.data.success==='false'){
                    reset_form();
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
                <h3>{t('translations.Basic_Data.Appraisal_Questions.Create.header')}</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="nf-email">{t('translations.Basic_Data.Appraisal_Questions.table_headers.question')} *</CLabel>
                            <CTextarea onChange={(event)=>setQuestion(event.target.value)} value={question} id="nf-email" name="nf-email" placeholder={t('translations.Basic_Data.Appraisal_Questions.Create.question_placeholder')} required/>
                            {questionError!==undefined && <p className="text-danger">{questionError}</p>}
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

export default CreateAppraisalQuestions