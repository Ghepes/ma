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
const SalaryConfigCreate=()=>{
    const [basic,setBasic]= useState("");
    const [basicError,setBasicError]=useState("");
    const [housing,setHousing]=useState("");
    const [housingError,setHousingError]=useState("");
    const [transportation,setTransportation]=useState("");
    const [transportationError,setTransportationError]=useState();
    const [allowance,setAllowance]=useState("");
    const [allowanceError,setAllowanceError]=useState();
    const [t,i18n]=useTranslation();
    const reset_form=(e)=>{
        setBasic("");
        setHousing("");
        setTransportation("");
        setAllowance("");
        setBasicError();
        setHousingError();
        setTransportationError();
        setAllowanceError();
    }
    const handleValidation=()=>{
        let formIsValid=true;
        let errors=[]
        if(!basic||basic===""||basic===undefined){
            setBasicError("Basic can not be empty");
            errors.push("Basic can not be empty");
        }
        else{
            setBasicError("");
        }
        if(!housing||housing===""||housing===undefined){
            setHousingError("Housing can not be empty");
            errors.push("Housing can not be empty");
        }
        else{
            setHousingError("");
        }
        if(!transportation||transportation===""||transportation===undefined){
            setTransportationError("Transportation can not be empty");
            errors.push("Transportation can not be empty");
        }
        else{
            setBasicError("");
        }
        if(!allowance||allowance===""||allowance===undefined){
            setAllowanceError("Allowance can not be empty");
            errors.push("Allowance can not be empty");
        }
        else{
            setHousingError("");
        }
        return {valid:formIsValid,errors:errors};
    }
    const handle_submit=()=>{
        let result=handleValidation();
        if(result.valid===true){
            API.post('/api/salaryconfig',JSON.stringify({basicper:basic,housingper:housing,transportationper:transportation,other:allowance})).then((response)=>{
                if(response.data.success===true){
                    setHousing("");
                    setBasic("");
                    setTransportation("");
                    setAllowance("");
                    swal("Created!", "A new Salary Configuration has been created", "success");
                }
            }).catch((error)=>{
                swal("Failed!", error.message, "error");
            })
        }
        
    }
    return(
        <>
        <CRow>
            <CCol xs="12" md="12">
            <CCard>
                <CCardHeader>
                <h3>{t('translations.Basic_Data.Salary_Config.Create.header')}</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm action="" method="post">
                        <CFormGroup>
                            <CLabel htmlFor="nf-email">{t('translations.Basic_Data.Salary_Config.table_headers.basic')} (%)</CLabel>
                            <CInput onChange={(event)=>setBasic(event.target.value)} value={basic} type="number" id="nf-email" name="nf-email" placeholder="Enter basic.."/>
                            {basicError!==undefined && <p className="text-danger">{basicError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-password">{t('translations.Basic_Data.Salary_Config.table_headers.housing')} (%)</CLabel>
                            <CInput onChange={(event)=>setHousing(event.target.value)} value={housing} type="number" id="nf-password" name="nf-password" placeholder="Enter housing.."/>
                            {housingError!==undefined && <p className="text-danger">{housingError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-email">{t('translations.Basic_Data.Salary_Config.table_headers.transportation')} (%)</CLabel>
                            <CInput onChange={(event)=>setTransportation(event.target.value)} value={transportation} type="number" id="nf-email" name="nf-email" placeholder="Enter transportation.."/>
                            {transportationError!==undefined && <p className="text-danger">{transportationError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-password">{t('translations.Basic_Data.Salary_Config.table_headers.other')} (%)</CLabel>
                            <CInput onChange={(event)=>setAllowance(event.target.value)} value={allowance} type="number" id="nf-password" name="nf-password" placeholder="Enter other allowance.."/>
                            {allowanceError!==undefined && <p className="text-danger">{allowanceError}</p>}
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

export default SalaryConfigCreate