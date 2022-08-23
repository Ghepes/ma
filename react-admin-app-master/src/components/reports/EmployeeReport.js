import {CInput, CCard, CCardBody, CCardHeader, CFormGroup, CLabel, CRow, CSelect,CCol, CCardFooter, CButton, CDataTable, CInputGroupAppend } from '@coreui/react'
import React, { useState } from 'react'
import {API} from '../../Config';
import swal from 'sweetalert';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import XLSX from 'xlsx';
const EmployeeReport=()=>{
    const [selectedRole,setSelectedRole]=useState(-1);
    const [roles,setRoles]=useState([]);
    const [employees,setEmployees]=useState([]);
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [count,setCount]=useState(0);
    const handle_load=()=>{
        
    }
    const handle_excel_download=()=>{
        var workheet = XLSX.utils.table_to_sheet(document.getElementsByTagName('table')[0]);
        delete (workheet['B1']);
        var workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, workheet, 'Sheet1');
        XLSX.writeFile(workbook, "Employee_Report.xlsx")
    }
    const handle_pdf_download=()=>{
        const doc = new jsPDF('p', 'pt', 'a4');
        var rows=[];
        employees.forEach(element => {
            rows.push([element.ID,element.Name,element.Job_Title,element.Manager,element.Joining_Date,element.Contract_End,element.Email,element.Phone])
        });
        console.log("rows: "+rows);
        doc.autoTable({
            head: [['ID','Name','Job Title','Manager','Joining Date','Contract End','Email', 'Phone']],
            body: rows,
        })
        doc.save("Employee_Report");
    }
    React.useEffect(() => {
        API.get('/api/role').then((response)=>{
            var data=[];
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                data.push({'#':index+1,id:element.id,name:element.name});
            }
            setRoles(data);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
        API.get('/api/employeebasicinfo').then((response)=>{
            var data=[];
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                data.push({'#':index+1,id:element.id,ID:element.empid,Name:element.empname,Joining_Date:element.joiningdate,Job_Title:element.companyrole,Manager:element.manager,Contract_End:element.contractenddate,Email:element.emailaddrss,Phone:element.phonenumber});
            }
            setEmployees(data);
            //setCount(100);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
        setCount(100);
    },[]);
    return(
        <>
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        <h3>Employee Report</h3>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol>
                                <CFormGroup>
                                    <CLabel>Select Job Title</CLabel>
                                    <CSelect value={selectedRole} onChange={(event)=>setSelectedRole(event.target.value)}>
                                        <option value="-1">Select Job Title..</option>
                                        {roles!==undefined && roles.map((role)=>(<option key={role.id} value={role.id}>{role.name}</option>))}
                                    </CSelect>
                                </CFormGroup>
                            </CCol>
                            <CCol>
                                <CFormGroup>
                                    <CLabel>ID</CLabel>
                                    <CInput value={id} onChange={(event)=>setId(event.target.value)} placeholder="Enter any specific id number.."/>
                                </CFormGroup>
                            </CCol>
                            <CCol>
                                <CFormGroup>
                                    <CLabel>Employee Name</CLabel>
                                    <CInput value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter any specific Employee name.."/>
                                </CFormGroup>
                            </CCol>
                        </CRow>
                    </CCardBody>
                    <CCardFooter>
                        <CButton color="primary" onClick={handle_load}>Load</CButton>
                    </CCardFooter>
                </CCard>
            </CCol>
        </CRow>
        <hr/>
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        <CRow className="float-right">
                            <div className="dt-buttons">
                                <a className="btn btn-round btn-primary buttons-excel buttons-html5" tabIndex="0" aria-controls="DataTables_Table_0" href="#" onClick={handle_excel_download} ><span>Excel</span></a> <a onClick={handle_pdf_download} className="btn btn-round btn-primary buttons-pdf buttons-html5" tabIndex="0" aria-controls="DataTables_Table_0" href="#"><span>PDF</span></a> 
                            </div>
                        </CRow>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            items={employees}
                            fields={[
                                { key: '#', _classes: 'font-weight-bold' },
                                'View','ID','Name','Job_Title','Manager','Joining_Date','Contract_End','Phone','Email'
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
                            itemsPerPage={5}
                            pagination
                            itemsPerPageSelect
                            scopedSlots = {{
                                'View':
                                  (item,index)=>{
                                    return(
                                      <td>
                                        <CRow>
                                          <CCol>
                                            <CButton color="success">View</CButton>
                                          </CCol>
                                        </CRow>
                                      </td>
                                    )
                                  }
                                }
                              }
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default EmployeeReport;