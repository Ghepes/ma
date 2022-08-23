import React, { useState } from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,CSelect,
    CRow,CForm, CFormGroup, CLabel, CInput, CCardFooter
  } from '@coreui/react';
import {API} from '../../../Config'
import CIcon from '@coreui/icons-react'
import {useLocation} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';

const EditHoliday=()=>{
    let history = useHistory();
    let location = useLocation();
    const [t,i18n]=useTranslation();
    const [id,setId]=useState("");
    const [year,setYear]= useState("");
    const [yearError,setYearError]=useState("");
    const [month,setMonth]=useState("");
    const [monthError,setMonthError]=useState("");
    const [from,setFrom]=useState("");
    const [fromError,setFromError]=useState("");
    const [to,setTo]=useState("");
    const [toError,setToError]=useState("");
    const reset_form=()=>{
        setYear(location.item.Year);
        setMonth(location.item.Month);
        setFrom(location.item.From);
        setTo(location.item.To);
        setYearError("");
        setMonthError("");
        setFromError("");
        setToError("");
    }
    React.useEffect(() => {
        if(location.item===undefined){
            history.goBack();
        }
        else{
            setId(location.item.id);
            setYear(location.item.Year||location.item.السنة);
            setMonth(location.item.Month||location.item.الشهر);
            setFrom(location.item.From||location.item.من);
            setTo(location.item.To||location.item.إلى);
        }
    },[]);
    const handleValidation=()=>{
        let formIsValid=true;
        let errors=[];
        if(!year||year===""||year===undefined){
            formIsValid=false;
            setYearError("Year can not be empty");
            errors.push("Year can not be empty");
        }
        else{
            setYearError("");
        }
        if(!month||month===""||month===undefined){
            setMonthError("Month can not be empty");
            errors.push("Month can not be empty");
        }
        else{
            setMonthError("");
        }
        if(!from||from===""||from===undefined){
            setFromError("Holiday starting date can not be empty");
            errors.push("Holiday starting date can not be empty")
        }
        else{
            setFromError("");
        }
        if(!to||to===undefined||to===""){
            setToError("Holiday ending date can not be empty");
            errors.push("Holiday ending date can not be empty")
        }
        else{
            setToError("");
        }
        return {valid:formIsValid,errors:errors};
    }
    const handle_submit=()=>{
        let result=handleValidation();
        if(result.valid===true){
            let profile=JSON.parse(localStorage.getItem('profile'));
            API.put('/api/holiday/'+id+'/',JSON.stringify({year:year,month:month,holidate:from,holidateto:to,updatedby:profile.role})).then(response=>{
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
                <h3>{t('translations.Basic_Data.Holidays.Edit.header')}</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="selectYear">{t('translations.Basic_Data.Holidays.table_headers.year')}</CLabel>
                            <CSelect value={year} onChange={(event)=>setYear(event.target.value)} custom name="selectYear" id="selectYear">
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                            </CSelect>
                            {yearError!==undefined && <p className="text-danger">{yearError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="selectMonth">{t('translations.Basic_Data.Holidays.table_headers.month')}</CLabel>
                            <CSelect value={month} onChange={(event)=>setMonth(event.target.value)} custom name="selectMonth" id="selectMonth">
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </CSelect>
                            {monthError!==undefined && <p className="text-danger">{monthError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-email">{t('translations.Basic_Data.Holidays.table_headers.from')}</CLabel>
                            <CInput onChange={(event)=>setFrom(event.target.value)} value={from} type="date" id="nf-email" name="nf-email" placeholder="Enter date from.."/>
                            {fromError!==undefined && <p className="text-danger">{fromError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-password">{t('translations.Basic_Data.Holidays.table_headers.to')}</CLabel>
                            <CInput onChange={(event)=>setTo(event.target.value)} value={to} type="date" id="nf-password" name="nf-password" placeholder="Enter date to.."/>
                            {toError!==undefined && <p className="text-danger">{toError}</p>}
                        </CFormGroup>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton type="button" onClick={handle_submit} size="sm" color="primary"><CIcon name="cil-scrubber" /> {t('translations.buttons.Submit')}</CButton> <CButton onClick={reset_form} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> {t('translations.buttons.Reset')}</CButton> <CButton onClick={()=>{history.goBack()}} type="button" size="sm" color="info"><CIcon name="cil-x" /> {t('translations.buttons.Cancel')}</CButton>
                </CCardFooter>
            </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default EditHoliday;