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
    CTextarea,
  } from '@coreui/react';
import CIcon from '@coreui/icons-react'
import swal from 'sweetalert'
import {API} from '../../Config'
import { useHistory } from 'react-router-dom';
const NewLeave=()=>{
    const [id,setId]= useState(-1);
    const [idError,setIdError]=useState("");
    const [name,setName]=useState("");
    const [type,setType]=useState(-1);
    const [typeError,setTypeError]=useState("");
    const [types,setTypes]=useState("")
    const [to,setTo]=useState("");
    const [toError,setToError]=useState("");
    const [from,setFrom]=useState("");
    const [fromError,setFromError]=useState("");
    const [role,setRole]=useState("");
    const [roleError,setRoleError]=useState("")
    const [note,setNote]=useState("");
    const [noteError,setNoteError]=useState("");
    const [employees,setEmployees]=useState([]);
    const [count,setCount]=useState(0);

    const handleValidation=()=>{
        let formIsValid=true;
        let errors=[];
        if(!id||id===""||id===undefined||id=="-1"){
            setIdError("Please select an employee first")
            formIsValid=false;
            errors.push("Please select an employee first")
        }
        else{
            setIdError("");
        }
        if(!to||to===""||to===undefined){
            setToError("Please select leave end date");
            formIsValid=false;
            errors.push("Please select leave end date")
        }
        else{
            setToError("")
        }
        if(!type||type===""||type===undefined||type=="-1"){
            setTypeError("Please select leave type");
            formIsValid=false;
            errors.push("Please select leave type")
        }
        else{
            setTypeError("")
        }
        if(!from||from===undefined||from===""){
            setFromError("Please select leave starting date")
            formIsValid=false;
            errors.push("Please select leave starting date")
        }
        else{
            setFromError("");
        }
        if(!role||role===""||role===undefined){
            setRoleError("Please select the job title");
            formIsValid=false;
            errors.push("Please select the job title");
        }
        else{
            setRoleError("")
        }
        if(!note||note===undefined||note===""){
            setNoteError("Please write a note");
            formIsValid=false;
            errors.push("Please write a note");
        }
        else{
            setNoteError("");
        }
        return {valid:formIsValid,errors:errors};
    }
    React.useEffect(() => {
        API.get('/api/employeebasicinfo').then(response=>{
            var data=[];
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                data.push({id:element.id,empid:element.empid,name:element.empname,companyrole:element.companyrole});
            }
            setEmployees(data);
        })
        API.get('/api/leavetype').then(response=>{
            var data=[];
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                data.push({id:element.id,companyid:element.companyid,name:element.name,days:element.days});
            }
            setTypes(data);
            
        })
        setCount(100);
    },[])
    const change_employee=(id)=>{
        setId(id);
        let array=Array.from(employees)
        for(let index=0;index<array.length;index++){
            if(array[index].id==id){
                setName(array[index].name);
                setRole(array[index].companyrole);
                break;
            }
        }
    }
    const reset_form=(e)=>{
        setId(-1);
        setType("");
        setRole("");
        setTo("");
        setFrom("");
        setNote("");
        setEmployees([]);
        setTypes([]);
    }
    const handle_submit=()=>{
        let result=handleValidation();
        if(result.valid===true){
            API.post('/api/leavemaster',JSON.stringify({employeebasicInfo:id,lavetype:type,leaveto:to,leavefrom:from,notes:note})).then((response)=>{
                console.log(response.data);
                if(response.data.success===true){
                    reset_form();
                    swal("Created!", "A new Leave has been created", "success");
                }
                else if(response.data.success===false){
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
                <h3>Create New Leave</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="nf-email">Employee ID *</CLabel>
                            <CSelect value={id} onChange={(event)=>change_employee(event.target.value)} custom name="selectYear" id="selectYear">
                                <option value="-1">Select Employee</option>
                                {employees!=null && Array.from(employees).map((item)=>(<option key={item.id} value={item.id}>{item.id} {item.name}</option>))}
                            </CSelect>
                            {idError!==undefined && <p className="text-danger">{idError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-name">Employee Name</CLabel>
                            <CInput readOnly={true} onChange={(event)=>setName(event.target.value)} value={name} type="text" id="nf-name" name="nf-name"/>
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-role">Job Title</CLabel>
                            <CInput readOnly={true} onChange={(event)=>setRole(event.target.value)} value={role} type="text" id="nf-role" name="nf-role"/>
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="type">Leave Type</CLabel>
                            <CSelect value={type} onChange={(event)=>setType(event.target.value)} custom name="type" id="type">
                                <option value="-1">Select leave type</option>
                                {types!=null && Array.from(types).map((item)=>(<option key={item.id} value={item.id}>{item.name}</option>))}
                            </CSelect>
                            {typeError!==undefined && <p className="text-danger">{typeError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-password">Leave from *</CLabel>
                            <CInput onChange={(event)=>setFrom(event.target.value)} value={from} type="date" id="nf-password" name="nf-password"/>
                            {fromError!==undefined && <p className="text-danger">{fromError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-amount">Leave to *</CLabel>
                            <CInput onChange={(event)=>setTo(event.target.value)} value={to} type="date" id="nf-amount" name="nf-amount"/>
                            {toError!==undefined && <p className="text-danger">{toError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-note">Note *</CLabel>
                            <CTextarea onChange={(event)=>setNote(event.target.value)} value={note} id="nf-note" name="nf-note"/>
                            {noteError!==undefined && <p className="text-danger">{noteError}</p>}
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

export default NewLeave;