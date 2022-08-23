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
const CompanyReport=()=>{
    const [companies,setCompanies]=useState([]);
    const [count,setCount]=useState(0);
    const handle_load=()=>{
        
    }
    const handle_pdf_download=()=>{
        const doc = new jsPDF('p', 'pt', 'a4');
        var rows=[];
        companies.forEach(element => {
            rows.push([element.CODE,element.NAME,element.EMAIL,element.SUBSCRIPTION_FEE,element.EXPIRY_DATE])
        });
        doc.autoTable({
            head: [['CODE','NAME','EMAIL','SUBSCRIPTION_FEE','EXPIRY_DATE']],
            body: rows,
        })
        doc.save("Company_Report");
    }
    const handle_excel_download=()=>{
        var workheet = XLSX.utils.table_to_sheet(document.getElementsByTagName('table')[0]);
        var workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, workheet, 'Sheet1');
        XLSX.writeFile(workbook, "Company_Report.xlsx")
    }
    React.useEffect(() => {
        API.get('/api/company').then(response=>{
            var data=[];
            for(let index=0;index<response.data.length;index++){
                const element=response.data[index];
                data.push({'#':index+1,id:element.id,CODE:element.code,NAME:element.companyname,EMAIL:element.emails,'SUBSCRIPTION_FEE':element.price,'EXPIRY_DATE':element.licenseexpdate})
            }
            setCompanies(data);
        })
        setCount(100);
    },[]);
    return(
        <>
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        <h3>Company Report</h3>
                    </CCardHeader>
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
                                <a className="btn btn-round btn-primary buttons-excel buttons-html5" tabIndex="0" aria-controls="DataTables_Table_0" href="#" onClick={handle_excel_download}><span>Excel</span></a> <a className="btn btn-round btn-primary buttons-pdf buttons-html5" tabIndex="0" aria-controls="DataTables_Table_0" href="#" onClick={handle_pdf_download}><span>PDF</span></a> 
                            </div>
                        </CRow>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            items={companies}
                            fields={[
                                { key: '#', _classes: 'font-weight-bold' },
                                'CODE','NAME','EMAIL','SUBSCRIPTION_FEE','EXPIRY_DATE'
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

export default CompanyReport;