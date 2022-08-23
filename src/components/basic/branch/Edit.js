import React, { useState } from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CForm, CFormGroup, CLabel, CInput, CCardFooter
  } from '@coreui/react';
import {API} from '../../../Config'
import CIcon from '@coreui/icons-react'
import {useLocation} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

const EditBranch=()=>{
    let history = useHistory();
    let location = useLocation();
    const [id,setId]=useState("");
    const [code,setCode]= useState("");
    const [name,setName]=useState("");
    const [address,setAddress]=useState("");
    const [contact,setContact]=useState("");
    
    const reset_form=(e)=>{
        setCode(location.item.CODE);
        setName(location.item.NAME);
        setAddress(location.item.ADDRESS);
        setContact(location.item.CONTACT);
    }
    
    React.useEffect(() => {
        if(location.item===undefined){
            history.goBack();
        }
        else{
            setContact(location.item.Contact || location.item)
            setAddress(location.item.Address)
            setName(location.item.Name)
            setCode(location.item.Code)
            setId(location.item.id)
        }
    },[]);
    const handle_submit=()=>{
        let profile=JSON.parse(localStorage.getItem('profile'));
        API.put('/api/branch/'+id+'/',JSON.stringify({id:id,code:code,name:name,address:address,contact:contact,updatedby:profile.role})).then(response=>{
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
                Edit Branch details
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CFormGroup>
                            <CLabel htmlFor="selectCode">Code *</CLabel>
                            <CInput onChange={(event)=>setCode(event.target.value)} value={code} type="number" id="selectCode" name="selectCode"/>
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="name">Name *</CLabel>
                            <CInput onChange={(event)=>setName(event.target.value)} value={name} type="text" id="name" name="name" placeholder="Enter new branch name.."/>
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="address">Address *</CLabel>
                            <CInput onChange={(event)=>setAddress(event.target.value)} value={address} type="text" id="address" name="addresss" placeholder="Enter new branch address.."/>
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="contact">Contact *</CLabel>
                            <CInput onChange={(event)=>setContact(event.target.value)} value={contact} type="text" id="contact" name="contact" placeholder="Enter new branch contact.."/>
                        </CFormGroup>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton type="button" onClick={handle_submit} size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton onClick={reset_form} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton> <CButton onClick={()=>{history.goBack()}} type="button" size="sm" color="info"><CIcon name="cil-ban" /> Cancel</CButton>
                </CCardFooter>
            </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default EditBranch;