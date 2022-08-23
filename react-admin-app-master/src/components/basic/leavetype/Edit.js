import React,{useState} from 'react'
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
import {Link, useParams, useRouteMatch,useLocation} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';

const EditLeaveType=()=>{
    let history = useHistory();
    const [t,i18n]=useTranslation();
    const [id,setId]=useState("");
    const [type,setType]=useState("");
    const [days,setDays]=useState("");
    let location = useLocation();
    React.useEffect(() => {
        if(location.item===undefined){
            history.goBack();
        }
        else{
            setType(location.item.Type)
            setDays(location.item.Days)
            setId(location.item.ID)
        }
    },[]);
    const handle_submit=()=>{
        if(type!==undefined && type!=="" && days!==undefined && days!==""){
            API.put('/api/leavetype/'+id+'/',JSON.stringify({name:type,days:days})).then(response=>{
                if(response.data.success===true){
                    swal("Updated",response.data.message,"success").then(value=>{
                        history.goBack();
                    })
                }
            })
        }
    }
    const reset_form=()=>{
        setType(location.item.Type);
        setDays(location.item.Days);
    }
    return(
        <>
        { type===undefined && days===undefined && history.goBack()}
        <CRow >
            <CCol xs="12" md="6">
            <CCard>
                <CCardHeader>
                <h3>{t('translations.Basic_Data.Leave_Type.Edit.header')}</h3>
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

export default EditLeaveType;