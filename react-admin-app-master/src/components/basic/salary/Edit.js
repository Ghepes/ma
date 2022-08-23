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

const EditSalaryConfiguration=()=>{
    let history = useHistory();
    let location = useLocation();
    const [id,setId]=useState("");
    const [basic,setBasic]= useState("");
    const [housing,setHousing]=useState("");
    const [transportation,setTransportation]=useState("");
    const [allowance,setAllowance]=useState("");
    const [t,i18n]=useTranslation();
    const reset_form=(e)=>{
        setBasic(get_numeric_value(location.item.BASIC));
        setHousing(get_numeric_value(location.item.HOUSING));
        setTransportation(get_numeric_value(location.item.TRANSPORTATION));
        setAllowance(get_numeric_value(location.item.OTHER))
    }
    const get_numeric_value=(text)=>{
        return text.toString().replace(/[^0-9]/g,'');
    }
    React.useEffect(() => {
        console.log(location.item)
        if(location.item===undefined){
            history.goBack();
        }
        else{
            setBasic(get_numeric_value(location.item.Basic));
            setHousing(get_numeric_value(location.item.Housing));
            setTransportation(get_numeric_value(location.item.Transportation));
            setAllowance(get_numeric_value(location.item.Other))
            setId(location.item.id)
        }
    },[]);
    const handle_submit=()=>{
        let profile=JSON.parse(localStorage.getItem('profile'));
        API.put('/api/salaryconfig/'+id+'/',JSON.stringify({basicper:basic,housingper:housing,transportationper:transportation,other:allowance,updatedby:profile.role})).then(response=>{
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
                <h3>{t('translations.Basic_Data.Salary_Config.Edit.header')}</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="nf-email">{t('translations.Basic_Data.Salary_Config.table_headers.basic')} (%)</CLabel>
                            <CInput onChange={(event)=>setBasic(event.target.value)} value={basic} type="number" id="nf-email" name="nf-email" placeholder="Enter basic.."/>
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-password">{t('translations.Basic_Data.Salary_Config.table_headers.housing')} (%)</CLabel>
                            <CInput onChange={(event)=>setHousing(event.target.value)} value={housing} type="number" id="nf-password" name="nf-password" placeholder="Enter housing.."/>
                            
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-email">{t('translations.Basic_Data.Salary_Config.table_headers.transportation')} (%)</CLabel>
                            <CInput onChange={(event)=>setTransportation(event.target.value)} value={transportation} type="number" id="nf-email" name="nf-email" placeholder="Enter transportation.."/>
                            
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-password">{t('translations.Basic_Data.Salary_Config.table_headers.other')} (%)</CLabel>
                            <CInput onChange={(event)=>setAllowance(event.target.value)} value={allowance} type="number" id="nf-password" name="nf-password" placeholder="Enter other allowance.."/>
                            
                        </CFormGroup>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton type="button" onClick={handle_submit} size="sm" color="primary"><CIcon name="cil-scrubber" /> {t('translations.buttons.Submit')}</CButton> <CButton onClick={reset_form} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> {t('translations.buttons.Reset')}</CButton> <CButton onClick={()=>{history.goBack()}} type="button" size="sm" color="info"><CIcon name="cil-ban" /> {t('translations.buttons.Cancel')}</CButton>
                </CCardFooter>
            </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default EditSalaryConfiguration;