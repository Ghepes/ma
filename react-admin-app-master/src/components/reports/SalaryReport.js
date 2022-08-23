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
const SalaryReport=()=>{
    const [selectedMonth,setSelectedMonth]=useState(-1);
    const [selectedYear,setSelectedYear]=useState(-1);
    const [salaries,setSalaries]=useState([]);
    const [id,setId]=useState("");
    const [count,setCount]=useState(0);
    const handle_load=()=>{
        
    }
    const handle_pdf_download=()=>{
        const doc = new jsPDF('p', 'pt', 'a4');
        var rows=[];
        salaries.forEach(element => {
            rows.push([element.Employee,element.Month_and_Year,element.Net_Pay,element.Housing,element.Transportation,element.Other_Allowance])
        });
        doc.autoTable({
            head: [['Employee','Month_and_Year','Net_Pay','Housing','Transportation','Other_Allowance']],
            body: rows,
        })
        doc.save("Salary_Report");
    }
    const handle_excel_download=()=>{
        var workheet = XLSX.utils.table_to_sheet(document.getElementsByTagName('table')[0]);
        var workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, workheet, 'Sheet1');
        XLSX.writeFile(workbook, "Salary_Report.xlsx")
    }
    React.useEffect(() => {
        API.get('/api/salarylist').then(response=>{
            var data=[];
            for(let index=0;index<response.data.length;index++){
                const element=response.data[index];
                data.push({'#':index+1,pk:element.id,Employee:element.employeename,Month_and_Year:get_month_year(element.month,element.year), Net_Pay:element.gross,Housing:element.housing,Transportation:element.transportation,Other_Allowance:element.other,Compensation:element.compensation,Tax:element.incometex,Status:element.isactive});
            }
            setSalaries(data);
        })
        setCount(100);
    },[]);
    return(
        <>
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        <h3>Salary Report</h3>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol md="3">
                                <CFormGroup>
                                    <CLabel>Month</CLabel>
                                    <CSelect value={selectedMonth} onChange={(event)=>setSelectedMonth(event.target.value)}>
                                        <option value="-1">Select Month</option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </CSelect>
                                </CFormGroup>
                            </CCol>
                            <CCol md="3">
                                <CFormGroup>
                                    <CLabel>Year</CLabel>
                                    <CSelect value={selectedYear} onChange={(event)=>setSelectedYear(event.target.value)}>
                                        <option value="-1">Select Year</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                        <option value="2029">2029</option>
                                        <option value="2030">2030</option>
                                        <option value="2031">2031</option>
                                    </CSelect>
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
                                <a className="btn btn-round btn-primary buttons-excel buttons-html5" tabIndex="0" aria-controls="DataTables_Table_0" href="#" onClick={handle_excel_download}><span>Excel</span></a> <a className="btn btn-round btn-primary buttons-pdf buttons-html5" tabIndex="0" aria-controls="DataTables_Table_0" onClick={handle_pdf_download} href="#"><span>PDF</span></a> 
                            </div>
                        </CRow>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            items={salaries}
                            fields={[
                                { key: '#', _classes: 'font-weight-bold' },
                                'Employee','Month_and_Year','Net_Pay','Housing','Transportation','Other_Allowance'
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
                            pagination
                            itemsPerPageSelect
                            scopedSlots = {{
                                'View':
                                  (item,index)=>{
                                    return(
                                      <td>
                                        <CRow>
                                          <CCol>
                                            <CButton color="danger">View</CButton>
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

export default SalaryReport;