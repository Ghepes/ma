import React from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react';
import {Link,useHistory} from 'react-router-dom';
import swal from 'sweetalert'
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

const align_row={
    float: "left",
    content: "",
    padding: "1%"
}

const Roles = () => {
  let history=useHistory();
  const [t,i18n]=useTranslation();
  const [roles,setRoles]=React.useState();
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if(window.localStorage.i18nextLng=="ar"){
      API.get('/api/role').then((response)=>{
        var data=[];
        for (let index = 0; index < response.data.length; index++) {
          const element = response.data[index];
          data.push({'#':index+1,id:element.id,'الاسم':element.name,'الشركات0':element.description,'الحالة':element.isactive});
        }
        setRoles(data);
      }).catch((error)=>{
        swal("Failed!", error.message, "error");
      })
    }
    else{
      API.get('/api/role/'+localStorage.getItem('userid')+'/').then((response)=>{
        var data=[];
        for (let index = 0; index < response.data.length; index++) {
          const element = response.data[index];
          data.push({'#':index+1,id:element.id,Name:element.name,Description:element.description,Status:element.isactive});
        }
        setRoles(data);
      }).catch((error)=>{
        swal("Failed!", error.message, "error");
      })
    }
    
  });
  const delete_role=(id)=>{
      //API.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(TOKEN)}`
      API.delete('/api/role/'+id).then((response)=>{
          if(response.data.success===true){
              swal("Deleted!","Selected Role has been deleted!","success")
          }
          else{
            swal("Failed!",response.data.message,"error")
          }
      }).catch((error)=>{
        console.log(error)
      })
  }
  return (
    <>
    <CRow className="align-items-center">
        <CCol col="2" className="mb-3 mb-xl-0">
            <Link to="/dashboard/admin/role/new"><CButton shape="square" color="success">{t('translations.buttons.Add')}</CButton></Link>
        </CCol>
    </CRow>
    <hr></hr>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <h3>{t('translations.Admin.Roles.name')}</h3>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={roles}
              fields={[
                { key: '#', _classes: 'font-weight-bold' },
                t('translations.Admin.Roles.table_headers.Name'),t('translations.Admin.Roles.table_headers.Description'),t('translations.Admin.Roles.table_headers.Status'),{key:'Action',label:'',_style: { width: '12%' },sorter:false,filter:false}
              ]}
              light
              hover
              striped
              sorter
              columnFilter
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              footer
              clickableRows
              scopedSlots = {{
                'Action':
                  (item)=>(
                    <>
                    <td>
                      <CRow>
                        <CCol>
                          <CButton onClick={()=>delete_role(item.id)} type="button" color="danger">{t('translations.buttons.Delete')}</CButton> <CButton type="button" onClick={()=>{history.push({pathname:'/dashboard/admin/role/edit',item:item})}} color="info">{t('translations.buttons.Edit')}</CButton>
                        </CCol>
                      </CRow>
                    </td>
                    </>
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
export default Roles;
