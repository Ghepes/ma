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

const EditRole=()=>{
    let history = useHistory();
    let location = useLocation();
    const [t,i18n]=useTranslation();
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [description,setDescription]= useState("");
    const [nameError,setNameError]=useState("");
    const reset_form=(e)=>{
        setName("");
        setDescription("");
        setNameError("");
    }
    React.useEffect(() => {
        if(location.item===undefined){
            history.goBack();
        }
        else{
            setName(location.item.Name);
            setNameError("");
            setDescription(location.item.Description);
            setId(location.item.id);
        }
    },[]);
    const handleValidation=()=>{
        let formIsValid=true;
        let errors=[];
        if(!name||name===""||name===undefined){
            formIsValid=false;
            setNameError("Name can not be empty");
            errors.push("Name can not be empty");
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
            API.put('/api/role/'+id+'/',JSON.stringify({id:id,name:name,description:description,updatedby:profile.role})).then(response=>{
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
                <h3>{t('translations.Admin.Roles.Edit.header')}</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="selectCode">{t('translations.Admin.Roles.Edit.Name')} *</CLabel>
                            <CInput onChange={(event)=>setName(event.target.value)} value={name} type="text" id="selectCode" name="selectCode" placeholder="Enter company role name.."/>
                            {nameError!==undefined && <p className="text-danger">{nameError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="name">{t('translations.Admin.Roles.Edit.Description')}</CLabel>
                            <CInput onChange={(event)=>setDescription(event.target.value)} value={description} type="text" id="name" name="name" placeholder="Enter company role description"/>
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

export default EditRole;