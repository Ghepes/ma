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
    CInput,CSelect,
    CLabel,
    CCardFooter,
  } from '@coreui/react';
import CIcon from '@coreui/icons-react'
import swal from 'sweetalert'
import {API} from '../../Config'
const NewLoan=()=>{
    const [id,setId]= useState(-1);
    const [idError,setIdError]=useState("");
    const [employees,setEmployees]=useState("");
    const [name,setName]=useState("");
    const [role,setRole]=useState("");
    const [date,setDate]=useState("");
    const [dateError,setDateError]=useState("");
    const [amount,setAmount]=useState("");
    const [amountError,setAmountError]=useState("");
    const [installment,setInstallment]=useState("");
    const [installmentError,setInstallmentError]=useState("")
    const [month,setMonth]=useState(-1);
    const [monthError,setMonthError]=useState("");
    const [year,setYear]=useState(-1);
    const [yearError,setYearError]=useState("");
    const [permonth,setPerMonth]=useState("");
    const [count,setCount]=useState(0);
    const reset_form=(e)=>{
        setId(-1);
        setName("");
        setRole("");
        setDate("");
        setAmount("");
        setInstallment("");
        setMonth(-1);
        setYear(-1);
        setPerMonth("");
        setIdError("");
        setAmountError("");
        setMonthError("");
        setYearError("");
        setInstallmentError("");
        setDateError("");
    }
    const handleValidation=()=>{
        let formIsValid=true;
        let errors=[];
        if(!id||id===""||id===undefined||id=="-1"){
            setIdError("Please select an employee");
            formIsValid=false;
        }
        else{
            setIdError("");
        }
        if(!amount||amount===""||amount===undefined||amount<=0){
            setAmountError("please set loan amount")
            formIsValid=false;
        }
        else{
            setAmountError("")
        }
        if(!date||date===""||date===undefined){
            setDateError("Enter Apply date");
            formIsValid=false;
        }
        else{
            setDateError("");
        }
        if(!month||month===""||month===undefined||month=="-1"){
            setMonthError("Please select a month");
            formIsValid=false;
        }
        else{
            setMonthError("");
        }
        if(!year||year===undefined||year===""||year=="-1"){
            setYearError("Please select a year")
            formIsValid=false;
        }
        else{
            setYearError("");
        }
        if(!installment||installment===undefined||installment===""||installment<=0){
            setInstallmentError("Please set the installment amount")
            formIsValid=false;
        }
        else{
            setInstallmentError("")
        }
        return {valid:formIsValid,errors:errors};
    }
    const handle_submit=()=>{
        let result=handleValidation();
        if(result.valid===true){
            let profile=JSON.parse(localStorage.getItem('profile'));
            API.post('/api/loan',JSON.stringify({employeebasicInfo:id,applydate:date,loanamount:amount,installment:installment,permonth:"0",startmonth:month,startyear:year,createdby:profile.role})).then((response)=>{
                console.log(response.data)
                if(response.data.success===true){
                    reset_form();
                    swal("Created!", "A new Loan has been created", "success");
                }
                else if(response.data.success===false){
                    swal("Failed!", response.data.message, "error");    
                }
            }).catch((error)=>{
                swal("Failed!", error.message, "error");
            })
        }
    }
    const set_emp_data=(id)=>{
        setId(id);
        let data=Array.from(employees);
        for(let index=0;index<data.length;index++){
            if(data[index].id==id){
                setName(data[index].name);
                setRole(data[index].companyrole);
                break;
            }
        }
    }
    React.useEffect(() => {
        API.get('/api/employeebasicinfo').then((response)=>{
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({id:element.id,name:element.empname,companyrole:element.companyrole});
          }
          setEmployees(data);
          setCount(100);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
    },[]);
    return(
        <>
        <CRow>
            <CCol xs="12" md="6">
            <CCard>
                <CCardHeader>
                <h3>Create New Loan</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm action="" method="post">
                        <CFormGroup>
                            <CLabel htmlFor="nf-email">Employee ID *</CLabel>
                            <CSelect value={id} onChange={(event)=>set_emp_data(event.target.value)} custom name="selectYear" id="selectYear">
                                <option value="-1">Select Employee</option>
                                {employees!==undefined && Array.from(employees).map((item)=>(<option value={item.id} key={item.id}>{item.id} {item.name}</option>))}
                            </CSelect>
                            {idError!==undefined && <p className="text-danger">{idError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-name">Employee Name</CLabel>
                            <CInput readOnly={true} onChange={(event)=>setName(event.target.value)} value={name} type="text" id="nf-name" name="nf-name"/>
                            
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-email">Role</CLabel>
                            <CInput readOnly={true} onChange={(event)=>setRole(event.target.value)} value={role} type="text" id="nf-email" name="nf-email"/>
                            
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-password">Apply Date *</CLabel>
                            <CInput onChange={(event)=>setDate(event.target.value)} value={date} type="date" id="nf-password" name="nf-password"/>
                            {dateError!==undefined && <p className="text-danger">{dateError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-amount">Loan Amount *</CLabel>
                            <CInput onChange={(event)=>setAmount(event.target.value)} value={amount} type="number" id="nf-amount" name="nf-amount" placeholder="Enter loan amount"/>
                            {amountError!==undefined && <p className="text-danger">{amountError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-installment">Installment *</CLabel>
                            <CInput onChange={(event)=>setInstallment(event.target.value)} value={installment} type="number" id="nf-installment" name="nf-installment" placeholder="Enter installment amount"/>
                            {installmentError!==undefined && <p className="text-danger">{installmentError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="monthnyear">Select Month and Year *</CLabel>
                            <CRow>
                                <CCol>
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
                                </CCol>
                                <CCol>
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
                                </CCol>
                            </CRow>
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

export default NewLoan;