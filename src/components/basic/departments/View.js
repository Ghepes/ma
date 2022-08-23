import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CRow,
    CCol,
    CDataTable,
  } from '@coreui/react';
  import swal from 'sweetalert'
  import {Link, useHistory} from 'react-router-dom';
  import {API} from '../../../Config'
import { useTranslation } from 'react-i18next';
const ShowDepartments=()=>{
    const align_row={
        float: "left",
        content: "",
        padding: "1%"
    }
    let history=useHistory();
    const [types,setTypes]=React.useState();
    const [count, setCount] = React.useState(0);
    const [t,i18n]=useTranslation();
    const delete_department=(id)=>{
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this  record!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          API.delete('/api/departments/'+id+"/").then(response=>{
            if(response.data.success==true){
              const data=Array.from(types);
              for(let index=0;index<data.length;index++){
                if(data[index].id==id){
                  data.splice(index,1);
                  break;
                }
              }
              setTypes(data);
              swal("Deleted!","Your selected department record has been deleted!", {
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
        API.get('/api/departments').then((response)=>{
          console.log(response.data)
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,id:element.id,"الرمز":element.code,"الاسم":element.name,"الحالة":"Active"});
          }
          setTypes(data);
          setCount(100);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
      }
      else if(window.localStorage.i18nextLng=="en"){
        API.get('/api/departments').then((response)=>{
          console.log(response.data)
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,id:element.id,Code:element.code,Name:element.name,Status:"Active"});
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
            <Link to="/dashboard/basicdata/createdepartment"><CButton shape="square" color="success">{t('translations.buttons.Add')}</CButton></Link>
        </CCol>
    </CRow>
    <hr></hr>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            <h3>{t('translations.Basic_Data.Departments.table_headers.header')}</h3>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={types}
                fields={[
                  { key: '#', _classes: 'font-weight-bold' },
                  t('translations.Basic_Data.Departments.table_headers.name'),t('translations.Basic_Data.Departments.table_headers.status'),{key:'Action',label:'',_style: { width: '12%' },sorter:false,filter:false}
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
                            <CButton type="button" onClick={()=>delete_department(item.id)} color="danger">{t('translations.buttons.Delete')}</CButton> <CButton onClick={()=>{history.push({pathname:'/dashboard/basicdata/edit_department',item:item})}} type="button" color="info">{t('translations.buttons.Edit')}</CButton>
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

export default ShowDepartments;