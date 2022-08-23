import React from 'react'
import {
    CBadge,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CDropdown,
    CDropdownDivider,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
  } from '@coreui/react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert'
import {API} from '../../Config'
const align_row={
    float: "left",
    content: "",
    padding: "1%"
}
const Salaries=()=>{
    const [salaries,setSalaries]=React.useState();
    const [count, setCount] = React.useState(0);
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
    React.useEffect(() => {
        API.get('/api/salarylist').then((response)=>{
            console.log(response.data)
            var data=[];
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                data.push({'#':index+1,pk:element.id,ID:element.employeeid,Name:element.employeename,Month_and_Year:get_month_year(element.month,element.year), Net_Pay:element.basic,Housing:element.housing,Transportation:element.transportation,Other_Allowance:element.other,GOSI:element.gross,Compensation:element.compensation,Tax:element.incometex,Status:element.isactive});
            }
            setSalaries(data);
            setCount(100);
            }).catch((error)=>{
                swal("Failed!", error.message, "error");
        })
    },[]);
    return(
        <>
        <CRow className="align-items-center">
            <CCol col="2" className="mb-3 mb-xl-0">
                <Link to="/dashboard/payroll/salaryprocess"><CButton shape="square" color="success">Add</CButton></Link>
            </CCol>
        </CRow>
        <hr></hr>
        <CRow>
            <CCol>
            <CCard>
                <CCardHeader>
                    <h3>Salaries</h3>
                </CCardHeader>
                <CCardBody>
                <CDataTable
                items={salaries}
                fields={[
                    { key: '#', _classes: 'font-weight-bold' },
                    'ID','Name','Month_and_Year', 'Net_Pay','Housing','Transportation','Other_Allowance','Discount','GOSI','Compensation','Tax'
                ]}
                light
                hover
                striped
                sorter
                columnFilter
                tableFilter
                itemsPerPageSelect
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                />
                </CCardBody>
            </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default Salaries;