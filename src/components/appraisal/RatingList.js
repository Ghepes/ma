import React, { useState } from 'react';
import CIcon from '@coreui/icons-react';
import {
    CRow,CButton,CDataTable,
    CCol,CCard, CCardBody, CForm, CFormGroup, CLabel, CInput, CSelect, CCardHeader, CCardFooter
  } from '@coreui/react';
import questions from './Questions';
import swal from 'sweetalert';
import {API} from '../../Config';
const fields = ['#','APPRAISAL_QUESTIONS','RATING'];

const RatingList =()=>{
    const [ratingList,setRatingList]=React.useState();
    const [empid,setEmpId]=useState("-1");
    const [count, setCount] = React.useState(0);
    const load_rating=()=>{
        API.get("/api/rating/1/").then((response)=>{
        //API.get("/api/rating/"+empid+"/").then((response)=>{
        var data=[];
        console.log(response.data)
        for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
           
            //API.get('/api/profile').then((response)=>{employee=response.data.data[0].title+" "+response.data.data[0].first_name+" "+response.data.data[0].last_name})
            data.push({'#':index+1,Employee_ID:element.empid,Rating_Date:element.ratingdate,Rating:element.rating});
        }
        setRatingList(data);
        
        }).catch((error)=>{
        swal("Failed!", error.message, "error");
        })
    }
    
    return(
        <>
        <CRow>
            <CCol md="12">
                <CCard>
                    <CCardBody>
                        <CForm>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="ratingdate">Employee Name *</CLabel>
                                    <CSelect onChange={(event)=>setEmpId(event.target.value)} value={empid} name="ratingdate" id="ratingdate">
                                        <option></option>
                                    </CSelect>
                                </CCol>
                                <CCol md="3">
                                    <CLabel htmlFor="datefrom">Date From *</CLabel>
                                    <CInput type="date" id="datefrom" name="datefrom" />
                                </CCol>
                                <CCol md="3">
                                    <CLabel htmlFor="dateto">Date To *</CLabel>
                                    <CInput type="date" id="dateto" name="dateto" />
                                </CCol>
                            </CFormGroup>
                        </CForm>
                    </CCardBody>
                    <CCardFooter>
                        <CButton type="button" onClick={load_rating} size="sm" color="primary"><CIcon name="cil-scrubber" /> Load</CButton>
                    </CCardFooter>
                </CCard>
            </CCol>
        </CRow>
        <CRow>
            <CCol md="12">
                <CCard>
                    <CCardHeader><CLabel><h4>Rating</h4></CLabel>
                        
                        <CRow className="float-right">
                            <CCol sm="3" >
                                <CButton block variant="outline" color="primary">Search</CButton>
                            </CCol>
                            <CCol md="3" >
                                <CInput type="text"/>
                            </CCol>
                            <CCol sm="3">
                                <CButton block variant="outline" color="primary">Excel</CButton>
                            </CCol>
                            <CCol sm="3">
                                <CButton block variant="outline" color="primary">PDF</CButton>
                            </CCol>
                        </CRow>
                    </CCardHeader>
                    <CCardBody>
                    <CDataTable className="questions_class"
                        items={ratingList}
                        fields={[
                            { key: '#', _classes: 'font-weight-bold' },
                            'Employee ID','Rating date','Rating','Actions'
                          ]}
                        light
                        hover
                        striped
                        bordered
                        sm="4"
                        itemsPerPage={10}
                        scopedSlots = {{
                            'Actions':
                            (item)=>(
                                <>
                                <td>
                                    <CRow>
                                        <CCol md="4">
                                        <CButton>Delete</CButton>
                                        <CButton>Edit</CButton>
                                        </CCol>
                                    </CRow>
                                </td>
                                </>
                            )
                        }
                        }
                        />
                        <hr/>
                        <CRow>
                            <CCol sm="2">
                                <CButton block variant="outline" color="primary">Save</CButton>
                            </CCol>
                            <CCol sm="10"></CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default RatingList;