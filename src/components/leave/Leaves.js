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
import {Link,useHistory} from 'react-router-dom';
import swal from 'sweetalert'
import {API} from '../../Config'

const align_row={
    float: "left",
    content: "",
    padding: "1%"
}
const Leaves = () => {
  const [leaves,setLeaves]=React.useState([]);
  const [count, setCount] = React.useState(0);
  const delete_leave=(index,item)=>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this  record!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        API.delete('/api/leavemaster/'+item.ID+"/").then(response=>{
          console.log(response.data)
          for(let index=0;index<leaves.length;index++){
            if(leaves[index].ID==item.ID){
              delete leaves[index];
              break;
            }
          }
          swal("Poof! Your selected leave record has been deleted!", {
            icon: "success",
          });
        }).catch(error=>{
          //swal("Failed!",error,"error");
        })
        
      }
    });
  }
  React.useEffect(() => {
    API.get('/api/leavemaster').then((response)=>{
      console.log(response.data)
      var data=[];
      for (let index = 0; index < response.data.length; index++) {
        const element = response.data[index];
        data.push({'#':index+1,ID:element.id,"Employee ID":element.employeebasicInfo_id,Name:element.employeebasicInfo,From:element.leavefrom, To:element.leaveto,Type:element.lavetype,Status:element.isactive});
      }
      setLeaves(data);
      setCount(100);
    }).catch((error)=>{
      swal("Failed!", error.message, "error");
    })
  },[]);
  return (
    <>
    <CRow className="align-items-center">
        <CCol col="2" className="mb-3 mb-xl-0 text-left">
            <Link to="/dashboard/leave/new"><CButton shape="square" color="success">Add</CButton></Link>
        </CCol>
    </CRow>
    <hr></hr>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <h3>Leaves</h3>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={leaves}
              fields={[
                { key: '#', _classes: 'font-weight-bold' },
                'ID','Employee ID','Name','From','To','Type','Status','Actions'
              ]}
              light
              hover
              striped
              bordered
              tableFilter
              columnFilter
              sorter
              size="sm"
              itemsPerPage={10}
              itemsPerPageSelect
              pagination
              scopedSlots = {{
                'Actions':
                  (item,index)=>{
                    return(
                      <td>
                        <CRow>
                          <CCol>
                            <CButton onClick={()=>delete_leave(index,item)} color="danger">Delete</CButton> <CButton color="info">Edit</CButton>
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
export default Leaves;
