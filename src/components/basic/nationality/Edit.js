import React, { useState } from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow, CForm, CFormGroup, CLabel, CInput, CCardFooter
  } from '@coreui/react';
import {API} from '../../../Config'
import CIcon from '@coreui/icons-react'
import {Link, useParams, useRouteMatch,useLocation} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';

const EditNationality=()=>{
    let history = useHistory();
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [order,setOrder]=useState("");
    const [t,i18n]=useTranslation();
    let location = useLocation();
    React.useEffect(() => {
        if(location.item===undefined){
            history.goBack();
        }
        else{
            setName(location.item.Name||location.item.الاسم)
            setOrder(location.item.Order||location.item.الترتيب)
            setId(location.item.ID)
        }
    },[]);
    const reset_form=()=>{
        setName(location.item.Name||location.item.الاسم)
        setOrder(location.item.Order||location.item.الترتيب)
    }
    const handle_submit=()=>{
        API.put('/api/nationality/'+id+'/',JSON.stringify({id:id,name:name,sortorder:order})).then(response=>{
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
            <CCol md="6">
                <CCard>
                    <CCardHeader><h3>{t('translations.Basic_Data.Nationality.Edit.header')}</h3></CCardHeader>
                    <CCardBody>
                        <CForm>
                            <CRow>
                                <CCol>
                                    <CFormGroup>
                                        <CLabel htmlFor="name">{t('translations.Basic_Data.Nationality.Create.Name')} *</CLabel>
                                        <CInput type="text" value={name} onChange={(event)=>setName(event.target.value)} id="name" name="name" placeholder={t('translations.Basic_Data.Nationality.Create.Name_Placeholder')} />
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel htmlFor="order">{t('translations.Basic_Data.Nationality.Create.Order')} *</CLabel>
                                        <CInput type="text" value={order} onChange={(event)=>setOrder(event.target.value)} id="order" name="order" placeholder={t('translations.Basic_Data.Nationality.Create.Order_Placeholder')} />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                        </CForm>
                    </CCardBody>
                    <CCardFooter><CButton type="button" onClick={handle_submit} size="sm" color="primary"><CIcon name="cil-scrubber" /> {t('translations.buttons.Submit')}</CButton> <CButton onClick={reset_form} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> {t('translations.buttons.Reset')}</CButton></CCardFooter>
                </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default EditNationality;