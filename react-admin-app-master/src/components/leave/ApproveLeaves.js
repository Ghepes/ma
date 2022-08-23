import React from 'react'
import {
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
  CLabel,
  CSelect,
} from '@coreui/react';
import swal from 'sweetalert'
import {API} from '../../Config'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['#','EMPLOYEE','TYPE', 'FROM', 'TO','TOTAL'];
const align_row={
    float: "left",
    content: "",
    padding: "1%"
}
const ApproveLeaves = () => {
  const [leaves,setLeaves]=React.useState();
  const [type,setType]=React.useState();
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    API.get('/api/leavemaster').then((response)=>{
        console.log(response.data)
      var data=[];
      for (let index = 0; index < response.data.length; index++) {
        const element = response.data[index];
        var employee="";
        API.get('/api/profile').then((response)=>{employee=response.data.data[0].title+" "+response.data.data[0].first_name+" "+response.data.data[0].last_name})
        data.push({'#':index+1,EMPLOYEE:employee,TYPE:element.lavetype,FROM:element.leavefrom, TO:element.leaveto,TOTAL:element});
      }
      setLeaves(data);
      setCount(100);
    }).catch((error)=>{
      swal("Failed!", error.message, "error");
    })
  },[]);
  return (
    <>
        <CRow>
            <CCol>
            <CCard>
                <CCardHeader>
                    <CRow>
                        <CLabel >Approval Status</CLabel>
                    </CRow>
                </CCardHeader>
                <CCardBody>
                    <CRow>
                        <CCol col="10" sm="8" md="10" xl className="mb-9 mb-xl-0">
                            <CSelect value={type} onChange={(event)=>setType(event.target.value)} custom name="type" id="type">
                                <option value="Annual leave">Annual leave</option>
                            </CSelect>
                        </CCol>
                        <CCol col="2" sm="4" md="2" xl className="mb-3 mb-xl-0">
                            <CButton block variant="outline" color="primary">Load</CButton>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
            </CCol>
        </CRow>
        <hr></hr>
        <CRow>
            <CCol>
            <CCard>
                <CCardHeader>
                    <CRow>
                        <span style={align_row}>show</span>
                        <CDropdown className="m-1">
                            <CDropdownToggle>
                                10
                            </CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownItem>10</CDropdownItem>
                                <CDropdownItem>20</CDropdownItem>
                                <CDropdownItem>50</CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem>100</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                        <span style={align_row}>Entries</span>
                    </CRow>
                </CCardHeader>
                <CCardBody>
                <CDataTable
                items={leaves}
                fields={fields}
                light
                hover
                striped
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
export default ApproveLeaves;
