import React from 'react'
import {
    CFormGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CRow,
    CCol,
    CForm,
    CSelect,CButton,CCardFooter,
    CLabel,
  } from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {API} from '../../Config'
import swal from 'sweetalert';
const SalaryProcess=()=>{
    const [month,setMonth]=React.useState("-1");
    const [year,setYear]=React.useState("-1");
    const reset_form=()=>{
        setMonth("-1");
        setYear("-1");
    }
    const handle_submit=(e)=>{
        var data=JSON.stringify({month:month,year:year});
        console.log(data)
        API.post('/api/salaryprocess',data).then((response)=>{
            console.log(response.data)
            if(response.data.success===true){
                reset_form();
                swal("Created!",response.data.message,"success");
            }
            else if(response.data.success===false){
                swal("Failed",response.data.message,"error");
            }
        })
    }
    
    return(
        <>
        <CRow>
            <CCol xs="12" md="6">
            <CCard>
                <CCardHeader>
                <h3>Salary Process</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="month">Select Month</CLabel>
                            <CSelect onChange={(event)=>setMonth(event.target.value)} value={month} name="month" id="month">
                                <option value="-1">-- Select --</option>
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
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="year">Select Year</CLabel>
                            <CSelect onChange={(event)=>setYear(event.target.value)} value={year} name="year" id="year">
                                <option value="-1">-- Select --</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                            </CSelect>
                        </CFormGroup>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton type="button" onClick={handle_submit} size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton onClick={reset_form} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                </CCardFooter>
            </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default SalaryProcess;