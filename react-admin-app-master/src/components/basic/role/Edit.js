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

const EditCompany=()=>{
    let history = useHistory();
    let location = useLocation();
    const [id,setId]=useState("");
    const [role,setRole]= useState("");
    const [roleError,setRoleError]=useState("");
    const [description,setDescription]=useState("");
    const [descriptionError,setDescriptionError]=useState("");
    const [order,setOrder]=useState("");
    const [orderError,setOrderError]=useState("");
    const [t,i18n]=useTranslation();
    const reset_form=(e)=>{
        setRole(location.item.Name||location.item.الاسم);
        setOrder(location.item.Order || location.item.الطلب);
        setDescription(location.item.Description || location.item.الوصف);
        setRoleError("");
        setOrderError("");
        setDescriptionError("");
    }
    React.useEffect(() => {
        if(location.item===undefined){
            history.goBack();
        }
        else{
            setId(location.item.id);
            setRole(location.item.Name||location.item.الاسم);
            setOrder(location.item.Order || location.item.الطلب);
            setDescription(location.item.Description || location.item.الوصف);
        }
    },[]);
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
    const handle_submit=()=>{
        let result=handleValidation();
        if(result.valid===true){
            let profile=JSON.parse(localStorage.getItem('profile'));
            API.put('/api/role/'+id+'/',JSON.stringify({name:role,description:description,sortorder:order,updatedby:profile.role})).then(response=>{
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
                <h3>{t('translations.Basic_Data.Job_Titles.Edit.header')}</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="nf-email">{t('translations.Basic_Data.Job_Titles.table_headers.name')}</CLabel>
                            <CInput onChange={(event)=>setRole(event.target.value)} value={role} type="text" id="nf-email" name="nf-email" placeholder="Enter new Job Title.."/>
                            {roleError!==undefined && <p className="text-danger">{roleError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-password">{t('translations.Basic_Data.Job_Titles.table_headers.order')}</CLabel>
                            <CInput onChange={(event)=>setOrder(event.target.value)} value={order} type="text" id="nf-password" name="nf-password" placeholder="Enter sort order.."/>
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-description">{t('translations.Basic_Data.Job_Titles.table_headers.description')}</CLabel>
                            <CInput onChange={(event)=>setDescription(event.target.value)} value={description} type="text" id="nf-description" name="nf-description" placeholder="Enter description .."/>
                        </CFormGroup>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton onClick={handle_submit} type="button" size="sm" color="primary"><CIcon name="cil-scrubber" /> {t('translations.buttons.Save')}</CButton> <CButton onClick={reset_form} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> {t('translations.buttons.Reset')}</CButton> <CButton onClick={()=>{history.goBack()}} type="button" size="sm" color="info"><CIcon name="cil-x" /> {t('translations.buttons.Cancel')}</CButton>
                </CCardFooter>
            </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default EditCompany;