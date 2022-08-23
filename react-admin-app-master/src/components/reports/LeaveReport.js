import {CInput, CCard, CCardBody, CCardHeader, CFormGroup, CLabel, CRow, CSelect,CCol, CCardFooter, CButton, CDataTable, CInputGroupAppend } from '@coreui/react'
import React, { useState } from 'react'
import {API} from '../../Config';
import swal from 'sweetalert';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import XLSX from 'xlsx';
const get_month_year=(month,year)=>{
    var data="";
    switch(month){
        case 1: data+="January"; break;
        case 2: data+="February"; break;
        case 3: data+="March"; break;
        case 4: data+="April"; break;
        case 5: data+="May"; break;
        case 6: data+="June"; break;
        case 7: data+="July"; break;
        case 8: data+="August"; break;
        case 9: data+="September"; break;
        case 10: data+="October";break;
        case 11: data+="November"; break;
        case 12: data+="December"; break;
        default : data=""; break;
    }
    data+=" "+year;
    return data;
}
const LeaveReport=()=>{
    const [loans,setLoans]=useState([]);
    const [count,setCount]=useState(0);
    const handle_load=()=>{
        
    }
    const handle_pdf_download=()=>{
        const doc = new jsPDF('p', 'pt', 'a4');
        var rows=[];
        loans.forEach(element => {
            rows.push([element.Employee_ID,element.Name,element.From,element.To,element.Type,element.Status])
        });
        doc.autoTable({
            head: [['Employee ID','Name','From','To','Type','Status']],
            body: rows,
        })
        doc.save("Leave_Report");
    }
    const handle_excel_download=()=>{
        var workheet = XLSX.utils.table_to_sheet(document.getElementsByTagName('table')[0]);
        var workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, workheet, 'Sheet1');
        XLSX.writeFile(workbook, "Leave_Report.xlsx")
    }
    React.useEffect(() => {
        API.get('/api/leavemaster').then(response=>{
            var data=[];
            for(let index=0;index<response.data.length;index++){
                const element=response.data[index];
                data.push({'#':index+1,ID:element.id,Employee_ID:element.employeebasicInfo_id,Name:element.employeebasicInfo,From:element.leavefrom, To:element.leaveto,Type:element.lavetype,Status:element.isactive});
            }
            setLoans(data);
        })
        setCount(100);
    },[]);
    return(
        <>
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        <h3>Leave Report</h3>
                    </CCardHeader>
                </CCard>
            </CCol>
        </CRow>
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        <CRow className="float-right">
                            <div className="dt-buttons">
                                <a className="btn btn-round btn-primary buttons-excel buttons-html5" tabIndex="0" aria-controls="DataTables_Table_0" href="#" onClick={handle_excel_download}><span>Excel</span></a> <a className="btn btn-round btn-primary buttons-pdf buttons-html5" tabIndex="0" aria-controls="DataTables_Table_0" href="#" onClick={handle_pdf_download}><span>PDF</span></a> 
                            </div>
                        </CRow>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            items={loans}
                            fields={[
                                { key: '#', _classes: 'font-weight-bold' },
                                'Employee_ID','Name','From','To','Type','Status'
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
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default LeaveReport;