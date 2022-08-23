import React, {useState,useEffect} from 'react'
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
import swal from 'sweetalert'
import {Link,useHistory} from 'react-router-dom';
import {API} from '../../../Config'
import { useTranslation } from 'react-i18next';
const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['#','Type','Days', 'Status', 'Actions']

const LeaveType = () => {
    const align_row={
        float: "left",
        content: "",
        padding: "1%"
    }
    const [t,i18n]=useTranslation();
    const [leaveTypes, setLeaveTypes] = useState();
    const history=useHistory();
    const [count, setCount] = useState(0);
    const delete_leaveType=(index,item)=>{
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this  record!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          API.delete('/api/leavetype/'+item.ID+"/").then(response=>{
            var data=Array.from(leaveTypes);
            for(let index=0;index<data.length;index++){
              if(data[index].ID==item.ID){
                delete data[index];
                break;
              }
            }
            setLeaveTypes(data);
            swal("Your selected leave type record has been deleted!", {
              icon: "success",
            });
          }).catch(error=>{
            //swal("Failed!",error,"error");
          })
          
        }
      });
    }
    useEffect(() => {
      if(window.localStorage.i18nextLng=="ar"){
        API.get('/api/leavetype').then((response)=>{
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,ID:element.id,"النوع":element.name,"الأيام":element.days,"الحالة":"Active"});
          }
          setLeaveTypes(data);
          setCount(100);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
      }
      else if(window.localStorage.i18nextLng=="en"){
        API.get('/api/leavetype').then((response)=>{
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,ID:element.id,Type:element.name,Days:element.days,Status:"Active"});
          }
          setLeaveTypes(data);
          setCount(100);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
      }
    });
  return (
    <>
    <CRow className="align-items-center">
        <CCol col="2" className="mb-3 mb-xl-0">
            <Link to="/dashboard/basicdata/leavetypecreate"><CButton shape="square" color="success">{t('translations.buttons.Add')}</CButton></Link>
        </CCol>
    </CRow>
    <hr></hr>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <h3>{t('translations.Basic_Data.Leave_Type.table_headers.header')}</h3>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={leaveTypes}
              fields={[
                { key: '#', _classes: 'font-weight-bold' },
                t('translations.Basic_Data.Leave_Type.table_headers.type'),t('translations.Basic_Data.Leave_Type.table_headers.days'),t('translations.Basic_Data.Leave_Type.table_headers.status'),{key:'Action',label:'',_style: { width: '20%' },sorter:false,filter:false}
              ]}
              light
              hover
              striped
              sorter
              columnFilter
              bordered
              size="md"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'Action':
                  (item,index)=>(
                    <td>
                      <CRow>
                        <CCol>
                          <CButton onClick={()=>delete_leaveType(index,item)} color="danger">{t('translations.buttons.Delete')}</CButton> <CButton onClick={()=>{history.push({pathname:'/dashboard/basicdata/edit_leavetype',item:item})}} color="info">{t('translations.buttons.Edit')}</CButton>
                        </CCol>
                      </CRow>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
export default LeaveType;
