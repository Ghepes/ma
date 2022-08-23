import React, { Profiler, useState } from 'react';
import swal from 'sweetalert'
import {API} from '../../../Config'
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
    CSelect,
  } from '@coreui/react';
import CIcon from '@coreui/icons-react'
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TimeScheduleCreate=()=>{
    let location=useLocation();
    let history=useHistory();
    const [intime,setIntime]= useState("");
    const [intimeError,setIntimeError]=useState("");
    const [outtime,setOuttime]=useState("");
    const [outtimeError,setOuttimeError]=useState("");
    const [shift,setShift]=useState(-1);
    const [shiftError,setShiftError]=useState("");
    const [t,i18n]=useTranslation();
    const reset_form=(e)=>{
        setIntime("");
        setOuttime("");
        setShift(-1);
        setIntimeError("");
        setOuttimeError("");
        setShiftError("");
    }
    const handleValidation=()=>{
        let formIsValid=true;
        let errors=[];
        if(!intime||intime===""||intime===undefined){
            formIsValid=false;
            setIntimeError("In time can not be empty");
            errors.push("In time can not be empty");
        }
        else{
            setIntimeError("");
        }
        if(!outtime||outtime===""||outtime===undefined){
            formIsValid=false;
            setOuttimeError("Out time can not be empty");
            errors.push("Out time can not be empty");
        }
        else{
            setOuttimeError("");
        }
        if(!shift||shift===""||shift===undefined||shift=="-1"){
            formIsValid=false;
            setShiftError("Shift value can not be empty");
            errors.push("Shift value can not be empty");
        }
        else{
            setShiftError("");
        }
        return {valid:formIsValid,errors:errors};
    }
    const handle_submit=()=>{
        let result=handleValidation();
        if(result.valid===true){
            let profile=JSON.parse(localStorage.getItem('profile'));
            API.post('/api/timeschedule',JSON.stringify({intime:intime,outtime:outtime,shiftname:shift,createdby:profile.role})).then((response)=>{
                console.log(response.data)
                if(response.data.success===true){
                    reset_form();
                    swal("Created!", "A new Time Schedule has been created", "success");
                }
                else if(response.data.success==='false'){
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
                <h3>{t('translations.Basic_Data.Time_Schedules.Create.header')}</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="nf-email">{t('translations.Basic_Data.Time_Schedules.table_headers.in')}</CLabel>
                            <CInput onChange={(event)=>setIntime(event.target.value)} value={intime} type="time" id="nf-email" name="nf-email" placeholder="Enter in time.."/>
                            {intimeError!==undefined && <p className="text-danger">{intimeError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-password">{t('translations.Basic_Data.Time_Schedules.table_headers.out')}</CLabel>
                            <CInput onChange={(event)=>setOuttime(event.target.value)} value={outtime} type="time" id="nf-password" name="nf-password" placeholder="Enter out time.."/>
                            {outtimeError!==undefined && <p className="text-danger">{outtimeError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-email">{t('translations.Basic_Data.Time_Schedules.table_headers.shift')}</CLabel>
                            {/* <CInput onChange={(event)=>setShift(event.target.value)} value={shift} type="text" id="nf-select" name="nf-select" placeholder="Enter shift.."/> */}
                            <select onChange={(event)=>setShift(event.target.value)} value={shift} className="selectTag">
                                <option value="-1">Select shift</option>
                                <option value="day">Day</option>
                                <option value="night">Night</option>
                            </select>
                            {shiftError!==undefined && <p className="text-danger">{shiftError}</p>}
                        </CFormGroup>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton type="button" onClick={handle_submit} size="sm" color="primary"><CIcon name="cil-scrubber"/> {t('translations.buttons.Submit')}</CButton> <CButton onClick={reset_form} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> {t('translations.buttons.Cancel')}</CButton>
                </CCardFooter>
            </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default TimeScheduleCreate;