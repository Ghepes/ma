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
const CreateDepartment=()=>{
    const [description,setDescription]= useState("");
    const [name,setName]=useState("");
    const [nameError,setNameError]=useState("");
    const reset_form=(e)=>{
        setDescription("");
        setName("");
    }
    const handleValidation=()=>{
        let formIsValid=true;
        let errors=[];
        if(!name||name===""||name===undefined){
            formIsValid=false;
            setNameError("Name cannot be empty");
            errors.push("Name cannot be empty")
        }
        else{
            setNameError("");
        }
        return {valid:formIsValid,errors:errors};
    }
    const handle_submit=()=>{
        let result=handleValidation();
        if(result.valid===true){
            let profile=JSON.parse(localStorage.getItem('profile'));
            API.post('/api/departments',JSON.stringify({name:name,description:description,createdby:profile.role})).then((response)=>{
                if(response.data.success===true){
                    reset_form();
                    swal("Created!", "A new Department has been created", "success");
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
                <h3>Create Department</h3>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="selectCode">Name *</CLabel>
                            <CInput onChange={(event)=>setName(event.target.value)} value={name} type="text" id="selectCode" name="selectCode" placeholder="Enter new department name.."/>
                            {nameError!==undefined && <p className="text-danger">{nameError}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="name">Description</CLabel>
                            <CInput onChange={(event)=>setDescription(event.target.value)} value={description} type="text" id="name" name="name" placeholder={"write about "+name}/>
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

export default CreateDepartment