import React, { useState } from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,CInputGroup,CInputGroupAppend,CCollapse,
    CRow,CForm, CFormGroup, CLabel, CInput, CCardFooter, CTextarea
  } from '@coreui/react';
import {API} from '../../../Config'
import CIcon from '@coreui/icons-react'
import {useLocation} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';

const EditQuestion=()=>{
    let history = useHistory();
    let location = useLocation();
    const [id,setId]=useState("");
    const [question,setQuestion]=useState("");
    const [questionError,setQuestionError]=useState("");
    const [t,i18n]=useTranslation();
    const reset_form=(e)=>{
        setQuestion(location.item.Question||location.item.سؤال);
        setQuestionError("");
    }
    React.useEffect(() => {
        if(location.item===undefined){
            history.goBack();
        }
        else{
            setId(location.item.id);
            setQuestion(location.item.Question||location.item.سؤال);
        }
    },[]);
    const handleValidation=()=>{
        let formIsValid=true;
        let errors=[];
        if(!question||question===""||question===undefined){
            formIsValid=false;
            setQuestionError("Question can not be empty");
            errors.push("Question can not be empty");
        }
        else{
            setQuestionError("");
        }
        return {valid:formIsValid,errors:errors};
    }
    const handle_submit=()=>{
        let result=handleValidation();
        if(result.valid===true){
            let profile=JSON.parse(localStorage.getItem('profile'));
            API.put('/api/questions/'+id+'/',JSON.stringify({questions:question,updatedby:profile.role})).then(response=>{
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
            <CCol xs="12" md="6">
            <CCard>
                <CCardHeader>
                {t('translations.Basic_Data.Appraisal_Questions.Edit.header')}
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

export default EditQuestion;