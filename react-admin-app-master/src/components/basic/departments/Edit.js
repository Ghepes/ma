import React, { useState } from 'react';
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
import {useLocation} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';

const EditDepartment=()=>{
    let history = useHistory();
    let location = useLocation();
    const [id,setId]=useState("");
    const [description,setDescription]= useState("");
    const [name,setName]=useState("");
    const[t,i18n]=useTranslation();
    const reset_form=(e)=>{
        setDescription("");
        setName(location.item.Name);
    }
    
    React.useEffect(() => {
        if(location.item===undefined){
            history.goBack();
        }
        else{
            setName(location.item.Name)
            setId(location.item.id)
        }
    },[]);
    const handle_submit=()=>{
        let profile=JSON.parse(localStorage.getItem('profile'));
        API.put('/api/departments/'+id+'/',JSON.stringify({id:id,name:name,updatedby:profile.role})).then(response=>{
            if(response.data.success===true){
                swal("Updated",response.data.message,"success").then(value=>{
                    history.goBack();
                })
            }
        }).catch(error=>{

        })
    }
    return(
        <>
        <CRow>
            <CCol xs="12" md="6">
            <CCard>
                <CCardHeader>
                <h3>{t('translations.Basic_Data.Departments.Edit.header')}</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="selectCode">{t('translations.Basic_Data.Departments.table_headers.name')} *</CLabel>
                            <CInput onChange={(event)=>setName(event.target.value)} value={name} type="text" id="selectCode" name="selectCode" placeholder={t('translations.Basic_Data.Departments.Create.name_placeholder')} />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="name">{t('translations.Basic_Data.Departments.Edit.Description')}</CLabel>
                            <CInput onChange={(event)=>setDescription(event.target.value)} value={description} type="text" id="name" name="name"/>
                        </CFormGroup>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton type="button" onClick={handle_submit} size="sm" color="primary"><CIcon name="cil-scrubber" /> Save</CButton> <CButton onClick={reset_form} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton> <CButton onClick={()=>{history.goBack()}} type="button" size="sm" color="info"><CIcon name="cil-ban" /> Cancel</CButton>
                </CCardFooter>
            </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default EditDepartment;