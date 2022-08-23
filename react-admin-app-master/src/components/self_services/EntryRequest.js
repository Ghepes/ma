import React,{useState} from 'react';
import {
    CForm,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CCardFooter,
    CFormGroup,
    CLabel,
    CSelect,
    CInput
  } from '@coreui/react';
import swal from 'sweetalert'
import CIcon from '@coreui/icons-react'
import {API} from '../../Config'
const EntryRequest=()=>{
    const [employees,setEmployees]=useState([]);
    const [employee,setEmployee]=useState("");
    const [time,setTime]=useState("");
    const [timeError,setTimeError]=useState("");
    const [date,setDate]=useState("");
    const [dateError,setDateError]=useState("");
    const [type,setType]=useState(-1);
    const [role,setRole]=useState("");
    const [note,setNote]=useState("");
    const [name,setName]=useState("");
    const [count,setCount]=useState(0);
    const handleValidation=()=>{
        let formIsValid=true;
        let errors=[];
        if(!date||date===""||date===undefined){
            setDateError("Please select date");
            formIsValid=false;
            errors.push("Please select date")
        }
        else{
            setDateError("")
        }
        if(!time||time===""||time===undefined){
            setTimeError("Please select Entry time")
            formIsValid=false;
            errors.push("Please select Entry time");
        }
        else{
            setTimeError("");
        }
        return {valid:formIsValid,errors:errors};
    }
    const handle_submit=()=>{
        let result=handleValidation();
        if(result.valid===true){
            let profile=JSON.parse(localStorage.getItem('profile'));
            API.post('/api/attendance',JSON.stringify({empid:employee,atndate:date,atntime:time,atntype:type,notes:note,createdby:profile.role,"createdtime": "2020-09-28 20:27:55"})).then(response=>{
                console.log(response)
                if(response.data.success===true){
                    reset_form();
                    swal("Successful!",response.data.message,"success");
                }
                else if(response.data.success===false){
                    swal("Failed!",response.data.message,"error");
                }
            }).catch(error=>{
                console.log(error)
            })
        }
    }
    const reset_form=()=>{
        setDate("");
        setDateError("");
        setTimeError("");
        setTime("");
        setType("");
        setRole("");
        setName("");
        setNote("");
        setEmployee("");
    }
    const set_emp_data=(id)=>{
        setEmployee(id);
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
        console.log(response.data)
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
            <CCol>
                <CCard>
                    <CCardHeader><h3>Entry Request</h3></CCardHeader>
                    <CCardBody>
                        <CForm>
                            <CRow>
                                <CCol>
                                    <CFormGroup>
                                        <CLabel htmlFor="employee">Employee</CLabel>
                                        <CSelect className="selectTag" value={employee} onChange={(event)=>set_emp_data(event.target.value)} name="employee" id="employee">
                                            <option value="-1">Select Employee</option>
                                            {employees!==null && Array.from(employees).map((item)=>(<option key={item.id} value={item.id}>{item.id} {item.name}</option>))}
                                        </CSelect>
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel htmlFor="employeeName">Employee Name</CLabel>
                                        <CInput value={name} readOnly name="employeeName" id="employeeName" type="text" placeholder="Employee Name" />
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel htmlFor="employeeRole">Job Title</CLabel>
                                        <CInput value={role} readOnly name="employeeRole" id="employeeRole" type="text"/>
                                    </CFormGroup>
                                </CCol>
                                <CCol>
                                    <CFormGroup>
                                        <CLabel htmlFor="date">Date *</CLabel>
                                        <CInput value={date} onChange={(event)=>setDate(event.target.value)} name="date" id="date" type="date"/>
                                        {dateError!==undefined && <p className="text-danger">{dateError}</p>}
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel htmlFor="time">Time *</CLabel>
                                        <CInput value={time} onChange={(event)=>setTime(event.target.value)} name="time" id="time" type="time"/>
                                        {timeError!==undefined && <p className="text-danger">{timeError}</p>}
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel htmlFor="type">Type *</CLabel>
                                        <CSelect value={type} onChange={(event)=>setType(event.target.value)} name="type" id="type">
                                            <option value="-1">Select Type</option>
                                            <option value="Entry">Entry</option>
                                            <option value="Exit">Exit</option>
                                        </CSelect>
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel htmlFor="note">Note</CLabel>
                                        <CInput value={note} onChange={(event)=>setNote(event.target.value)} name="note" id="note" type="note" placeholder="Please enter a note.."/>
                                    </CFormGroup>
                                </CCol>
                            </CRow>
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

export default EntryRequest;