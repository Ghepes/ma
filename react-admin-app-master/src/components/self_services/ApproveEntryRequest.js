import { CInput,CCard, CRow ,CCol,CDataTable,CButton,CCardBody,CCardHeader,CSelect,CLabel, CFormGroup, CCardFooter} from '@coreui/react'
import React,{useState} from 'react';
import {API} from '../../Config';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
const align_row={
    float: "left",
    content: "",
    padding: "1%"
}
const ApproveEntryRequest=()=>{
    const [requests,setRequests]=useState([]);
    const [type,setType]=useState(-1);
    const [count,setCount]=useState(0);
    const [loadText,setLoadText]=useState("Load");
    const handle_type_change=()=>{
        setLoadText("Loading");
        if(type=="pending"){
            API.get('/api/attendancepending/0/').then(response=>{
                var data=[];
                for (let index = 0; index < response.data.length; index++) {
                    const element = response.data[index];
                    data.push({'#':index+1,id:element.id,Status:((element.approvalstatus==0)?'Pending':'Approved'),Type:element.atntype,Date:element.atndate,Time:element.atntime});
                }
                setRequests(data);
            }).catch(error=>{
                swal("Error",error,"error");
            })
        }
        else if(type=="approved"){
            API.get('/api/attendancepending/1/').then(response=>{
                var data=[];
                for (let index = 0; index < response.data.length; index++) {
                    const element = response.data[index];
                    data.push({'#':index+1,id:element.id,Status:((element.approvalstatus==0)?'Pending':'Approved'),Type:element.atntype,Date:element.atndate,Time:element.atntime});
                }
                setRequests(data);
            }).catch(error=>{
                swal("Error",error,"error");
            })
        }
        else if(type=="all"){
            API.get('/api/attendance').then((response)=>{
                var data=[];
                for (let index = 0; index < response.data.length; index++) {
                    const element = response.data[index];
                    data.push({'#':index+1,id:element.id,Status:((element.approvalstatus==0)?'Pending':'Approved'),Employee:element.empid,Type:element.atntype,Date:element.atndate,Time:element.atntime});
                }
                setRequests(data);
            }).catch((error)=>{
                swal("Failed!", error.message, "error");
            })
        }
        setLoadText("Load");
    }
    const handle_approve=()=>{
        let data=[];
        let profile=JSON.parse(localStorage.getItem('profile'));
        requests.forEach(element => {
            let entry={id:element.id,approvalstatus:"1",approveby:profile.role,approvedate: new Date().toJSON().slice(0,10) }
            data.push(entry);
        });
        API.post('/api/attendanceapproval',JSON.stringify(data)).then(response=>{
            console.log(response.data)
            if(response.data.success===true){
                swal("Approved!",response.data.message,"success")
            }
        })
    }
    React.useEffect(() => {
        API.get('/api/attendance').then((response)=>{
            console.log(response.data)
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,id:element.id,Status:((element.approvalstatus===0)?'Pending':'Approved'),Employee:element.empid,Type:element.atntype,Date:element.atndate,Time:element.atntime});
          }
          setRequests(data);
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
                <CCardHeader>
                    <h3>Approval Status</h3>
                </CCardHeader>
                <CCardBody>
                    <CRow>
                        <CCol>
                            <CFormGroup>
                                <CLabel>Select Type of Entry Requests</CLabel>
                                <CSelect value={type} onChange={(event)=>setType(event.target.value)}>
                                    <option value="-1">Select</option>
                                    <option value="pending">Pending</option>
                                    <option value="approved">Approved</option>
                                    <option value="all">All</option>
                                </CSelect>
                            </CFormGroup>   
                        </CCol>
                        <CCol>
                            <CFormGroup>
                                <CLabel htmlFor="from">Date From *</CLabel>
                                <CInput type="date" id="from" name="from"/>
                            </CFormGroup>   
                        </CCol>
                        <CCol>
                            <CFormGroup>
                                <CLabel htmlFor="to">Date To *</CLabel>
                                <CInput type="date" id="to" name="to"/>
                            </CFormGroup>   
                        </CCol>
                    </CRow>
                </CCardBody>
                <CCardFooter>
                    <CButton color="primary" onClick={handle_type_change}>{loadText}</CButton>
                </CCardFooter>
            </CCard>
            </CCol>
        </CRow>
        <hr></hr>
        <CRow>
            <CCol>
            <CCard>
                <CCardHeader>
                    <h3>Entry Requests</h3>
                </CCardHeader>
                <CCardBody>
                <CDataTable
                items={requests}
                fields={[
                    { key: '#', _classes: 'font-weight-bold' },
                    'Status','Employee','Type', 'Date','Time','Actions'
                ]}
                light
                hover
                striped
                bordered
                sorter
                columnFilter
                tableFilter
                footer
                size="sm"
                itemsPerPage={10}
                pagination
                itemsPerPageSelect
                />
                </CCardBody>
                <CCardFooter>
                    <CButton onClick={handle_approve} type="button" color="primary" size="md">Approve</CButton>
                </CCardFooter>
            </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default ApproveEntryRequest;