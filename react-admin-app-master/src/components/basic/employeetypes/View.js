import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CRow,
    CCol,
    CDataTable,
    CBadge,
  } from '@coreui/react';
  import swal from 'sweetalert'
  import {Link, useHistory} from 'react-router-dom';
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
const View=()=>{
    const align_row={
        float: "left",
        content: "",
        padding: "1%"
    }
    let history=useHistory();
    const [t,i18n]=useTranslation();
    const [types,setTypes]=React.useState();
    const [count, setCount] = React.useState(0);
    const delete_employee_type=(id)=>{
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this  record!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          API.delete('/api/employmenttypes/'+id+"/").then(response=>{
            if(response.data.success==true){
              const data=Array.from(types);
              for(let index=0;index<data.length;index++){
                if(data[index].id==id){
                  data.splice(index,1);
                  break;
                }
              }
              setTypes(data);
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
        API.get('/api/employmenttypes').then((response)=>{
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,id:element.id,"الرمز":element.code,"الاسم":element.name,"الوصف":element.description,"الحالة":"Active"});
          }
          setTypes(data);
          setCount(100);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
      }
      else if(window.localStorage.i18nextLng=="en"){
        API.get('/api/employmenttypes').then((response)=>{
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,id:element.id,Code:element.code,Name:element.name,Description:element.description,Status:"Active"});
          }
          setTypes(data);
          setCount(100);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
      }
      
    });
    return(
        <>
        <CRow className="align-items-center">
        <CCol col="2" className="mb-3 mb-xl-0">
            <Link to="/dashboard/basicdata/createemployeetype"><CButton shape="square" color="success">{t('translations.buttons.Add')}</CButton></Link>
        </CCol>
    </CRow>
    <hr></hr>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <h3>{t('translations.Basic_Data.Employment_Types.table_headers.header')}</h3>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={types}
                fields={[
                  { key: '#', _classes: 'font-weight-bold' },
                  t('translations.Basic_Data.Employment_Types.table_headers.code'),t('translations.Basic_Data.Employment_Types.table_headers.name'),t('translations.Basic_Data.Employment_Types.table_headers.status'),{key:'Action',label:'',_style: { width: '12%' },sorter:false,filter:false}
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
                scopedSlots = {{
                  'Action':
                    (item)=>(
                      <>
                      <td>
                        <CRow>
                          <CCol>
                            <CButton onClick={()=>delete_employee_type(item.id)} type="button" color="danger">{t('translations.buttons.Delete')}</CButton> <CButton type="button" onClick={()=>{history.push({pathname:'/dashboard/basicdata/edit_employee_type',item:item})}} color="info">{t('translations.buttons.Edit')}</CButton>
                          </CCol>
                        </CRow>
                      </td>
                      </>
                    )
                }}
                />
                    {/* <span style={align_row}>Search</span> <CInput type="text"/> */}
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default View;