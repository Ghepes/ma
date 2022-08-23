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
    CLabel,CSelect,
    CCardFooter,
  } from '@coreui/react';
import CIcon from '@coreui/icons-react'
import swal from 'sweetalert'
import {API} from '../../../Config'
import { useTranslation } from 'react-i18next';
const HolidayCreate=()=>{
    const [year,setYear]= useState(-1);
    const [yearError,setYearError]=useState("");
    const [month,setMonth]=useState(-1);
    const [monthError,setMonthError]=useState("");
    const [from,setFrom]=useState("");
    const [fromError,setFromError]=useState("");
    const [to,setTo]=useState("");
    const [toError,setToError]=useState("");
    const [t,i18n]=useTranslation();
    const reset_form=(e)=>{
        setYear("");
        setMonth("");
        setFrom("");
        setTo("");
        setYearError("");
        setMonthError("");
        setFromError("");
        setToError("");
    }
    const handleValidation=()=>{
        let formIsValid=true;
        let errors=[];
        if(!year||year===""||year===undefined||year=="-1"){
            formIsValid=false;
            setYearError("Year can not be empty");
            errors.push("Year can not be empty");
        }
        else{
            setYearError("");
        }
        if(!month||month===""||month===undefined||month=="-1"){
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
            API.post('/api/holiday',JSON.stringify({year:year,month:month,holiday:from,holidayto:to,createdby:profile.role})).then((response)=>{
                console.log(response.data)
                if(response.data.success===true){
                    reset_form();
                    swal("Created!", "A new Holiday has been created", "success");
                }
                if(response.data.success==='false'){
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
                <h3>{t('translations.Basic_Data.Holidays.Create.header')}</h3>
                </CCardHeader>
                <CCardBody>
                <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="selectYear">{t('translations.Basic_Data.Holidays.table_headers.year')}</CLabel>
                            <CSelect value={year} onChange={(event)=>setYear(event.target.value)} custom name="selectYear" id="selectYear">
                                <option value="-1">Select Year</option>
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
                                <option value="-1">Select Month</option>
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
                    <CButton type="button" onClick={handle_submit} size="sm" color="primary"><CIcon name="cil-scrubber" /> {t('translations.buttons.Submit')}</CButton> <CButton onClick={reset_form} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> {t('translations.buttons.Reset')}</CButton>
                </CCardFooter>
            </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default HolidayCreate