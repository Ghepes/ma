import { CInput,CForm,CCard, CRow ,CCol,CDataTable,CButton,CDropdownDivider,CDropdownItem,CDropdownMenu,CCardBody,CCardHeader,CDropdownToggle,CSelect,CLabel,CDropdown, CFormGroup, CInputGroup, CInputGroupAppend, CCardFooter} from '@coreui/react'
import React,{useState,useEffect} from 'react';
import {API} from '../../Config';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
const align_row={
    float: "left",
    content: "",
    padding: "1%"
}
const get_month_year=(month,year)=>{
    switch(month){
        case 1: return "January "+year;
        case 2: return "February "+year;
        case 3: return "March "+year;
        case 4: return "April "+year;
        case 5: return "May "+year;
        case 6: return "June "+year;
        case 7: return "July "+year;
        case 8: return "August "+year;
        case 9: return "September "+year;
        case 10: return "October "+year;
        case 11: return "November "+year;
        case 12: return "December "+year;
        default : return "N/A";
    }
}
const ApproveLoan=()=>{
    const [loans,setLoans]=useState([]);
    const [type,setType]=useState(-1);
    const [count,setCount]=useState(0);
    const [loadText,setLoadText]=useState("Load");
    let history =useHistory()
    const handle_type_change=(value)=>{
        setLoadText("Loading...");
        setLoans([]);
        setType(value);
        if(value=="pending"){
            API.get('/api/loanpending/0/').then(response=>{
                var data=[];
                for (let index = 0; index < response.data.length; index++) {
                    const element = response.data[index];
                    data.push({'#':index+1,id:element.id,Status:((element.approvalstatus===0)?'Pending':'Approved'),Employee:element.employeebasicInfo,Date:element.applydate,Amount:element.loanamount,Installment:element.installment,Start_Month_And_Year:get_month_year(element.startmonth,element.startyear),Amount_Per_Month:element.amntpermonth,Approved_by:element.approveby,Approval_date:element.approvedate});
                }
                setLoans(data);
            }).catch(error=>{
                swal("Error",error,"error");
            })
        }
        else if(value=="approved"){
            API.get('/api/loanpending/1/').then(response=>{
                var data=[];
                for (let index = 0; index < response.data.length; index++) {
                    const element = response.data[index];
                    data.push({'#':index+1,id:element.id,Status:((element.approvalstatus===0)?'Pending':'Approved'),Employee:element.employeebasicInfo,Date:element.applydate,Amount:element.loanamount,Installment:element.installment,Start_Month_And_Year:get_month_year(element.startmonth,element.startyear),Amount_Per_Month:element.amntpermonth,Approved_by:element.approveby,Approval_date:element.approvedate});
                }
                setLoans(data);
            }).catch(error=>{
                swal("Error",error,"error");
            })
        }
        else if(value=="all"){
            API.get('/api/loan').then((response)=>{
                var data=[];
                for (let index = 0; index < response.data.length; index++) {
                    const element = response.data[index];
                    data.push({'#':index+1,id:element.id,Status:((element.approvalstatus===0)?'Pending':'Approved'),Employee:element.employeebasicInfo,Date:element.applydate,Amount:element.loanamount,Installment:element.installment,Start_Month_And_Year:get_month_year(element.startmonth,element.startyear),Amount_Per_Month:element.amntpermonth,Approved_by:element.approveby,Approval_date:element.approvedate});
                }
                setLoans(data);
            }).catch((error)=>{
                swal("Failed!", error.message, "error");
            })
        }
        setLoadText("Load");
    }
    const set_data=()=>{
        API.get('/api/loan').then((response)=>{
            console.log(response.data)
            var data=[];
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                data.push({'#':index+1,id:element.id,Status:((element.approvalstatus===0)?'Pending':'Approved'),Employee:element.employeebasicInfo,Date:element.applydate,Amount:element.loanamount,Installment:element.installment,Start_Month_And_Year:get_month_year(element.startmonth,element.startyear),Amount_Per_Month:element.amntpermonth,Approved_by:element.approveby,Approval_date:element.approvedate});
            }
            setLoans(data);
            setCount(100);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
    }
    const handle_approve=()=>{
        let data=[];
        let profile=JSON.parse(localStorage.getItem('profile'));
        loans.forEach(element => {
            let entry={id:element.id,approvalstatus:"1",approveby:profile.role,approvedate: new Date().toJSON().slice(0,10) }
            data.push(entry);
        });
        console.log(JSON.stringify(data))
        API.post('/api/loanpproval',JSON.stringify(data)).then(response=>{
            console.log(response.data)
            if(response.data.success===true){
                set_data();
                swal("Approved!",response.data.message,"success")
            }
        })
    }
    React.useEffect(() => {
        set_data();
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
                        <CCol md="4">
                            <CFormGroup>
                                <CLabel><h5>Select Type of Loan Requests</h5></CLabel>
                                <CSelect value={type} onChange={(event)=>handle_type_change(event.target.value)}>
                                    <option value="-1">Select</option>
                                    <option value="pending">Pending</option>
                                    <option value="approved">Approved</option>
                                    <option value="all">All</option>
                                </CSelect>
                            </CFormGroup>   
                        </CCol>
                        {/* <CCol>
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
                        </CCol> */}
                    </CRow>
                </CCardBody>
                {/* <CCardFooter>
                    <CButton color="primary">{loadText}</CButton>
                </CCardFooter> */}
            </CCard>
            </CCol>
        </CRow>
        <hr></hr>
        <CRow>
            <CCol>
            <CCard>
                <CCardHeader>
                    <h3>Loan Requests</h3>
                </CCardHeader>
                <CCardBody>
                <CDataTable
                items={loans}
                fields={[
                    { key: '#', _classes: 'font-weight-bold' },
                    'Status','Employee','Date','Amount','Installment','Start_Month_And_Year','Amount_Per_Month','Approved_by','Approval_date'
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

export default ApproveLoan;