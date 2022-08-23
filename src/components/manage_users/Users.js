import React, { useState } from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from '@coreui/react';

import {Link} from 'react-router-dom';
import {API} from '../../Config'
import swal from 'sweetalert'
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

const Users = () => {
    const align_row={
        float: "left",
        content: "",
        padding: "1%"
    }
    const [users,setUsers]=useState();
    const [per_page,setPerPage]=useState(10);
    const [count, setCount] = React.useState(0);
    const [t,i18n]=useTranslation();
    const delete_user=(id)=>{
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this  record!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          API.delete('/api/user/'+id+"/").then(response=>{
            if(response.data.success===true){
              const data=Array.from(users);
              for(let index=0;index<data.length;index++){
                if(data[index].id==id){
                  data.splice(index,1);
                  break;
                }
              }
              setUsers(data);
              swal("Deleted!","Your selected record has been deleted!", {
                icon: "success",
              });
              
            }
            else if(response.data.success==false){
              swal("Poof!"+response.data.message, {
                icon: "error",
              });
            }
            
          }).catch(error=>{
            //swal("Failed!",error,"error");
          })
        }
      });
    }
    React.useEffect(() => {
      if(window.localStorage.i18nextLng=="ar"){
        API.get('/api/user').then((response)=>{
          console.log(response.data)
          var data=[]
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,id:element.id,"دور المستخدم":element.role_id,"اسم الدور":element.role,"الاسم الكامل":element.title+" "+element.first_name+" "+element.last_name, "البريد الإلكتروني":element.user,"جهة الاتصال":element.phone_number,"الحالة":"Active"});
          }
          setUsers(data);
        }).catch((error)=>{
          console.log(error.message)
          swal("Failed!", error.message, "error");
        })
      }
      else{
        API.get('/api/user').then((response)=>{
          console.log(response.data)
          var data=[]
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,id:element.id,"User Role":element.role_id,"Role Name":element.role,"Full Name":element.title+" "+element.first_name+" "+element.last_name, Email:element.user,Contact:element.phone_number,Status:"Active"});
          }
          setUsers(data);
        }).catch((error)=>{
          console.log(error.message)
          swal("Failed!", error.message, "error");
        })
      }
      
    });
  return (
    <>
    <CRow className="align-items-center">
        <CCol col="2" className="mb-3 mb-xl-0">
            <Link to="/dashboard/manageusers/createuser"><CButton shape="square" color="success">{t('translations.buttons.Add')}</CButton></Link>
        </CCol>
    </CRow>
    <hr></hr>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <h3>Users</h3>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={users}
              fields={[
                { key: '#', _classes: 'font-weight-bold' },
                t('translations.Manage_Users.Users.table_headers.User_Role'),t('translations.Manage_Users.Users.table_headers.Role_Name'),t('translations.Manage_Users.Users.table_headers.Full_Name'),t('translations.Manage_Users.Users.table_headers.Email'),t('translations.Manage_Users.Users.table_headers.Contact'),t('translations.Manage_Users.Users.table_headers.Status'),{key:'Action',label:'',_style: { width: '12%' },sorter:false,filter:false}
              ]}
              light
              hover
              striped
              bordered
              sorter
              columnFilter
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'Action':
                  (item)=>(
                    <td>
                      <CBadge>
                        <CButton onClick={()=>delete_user(item.id)} type="button" size="sm" color="danger">{t('translations.buttons.Delete')}</CButton> <CButton size="sm" type="button" color="info">{t('translations.buttons.Edit')}</CButton>
                      </CBadge>
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
export default Users;
