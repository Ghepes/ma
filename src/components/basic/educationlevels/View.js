import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CRow,
    CCol,
    CDataTable,
    CBadge
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
const ShowEducationLevels=()=>{
    const align_row={
        float: "left",
        content: "",
        padding: "1%"
    }
    let history=useHistory();
    const [types,setTypes]=React.useState();
    const [count, setCount] = React.useState(0);
    const [t,i18n]=useTranslation();
    const delete_EduLevel=(id)=>{
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this  record!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          API.delete('/api/education/'+id+"/").then(response=>{
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
        API.get('/api/education').then((response)=>{
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            let element = response.data[index];
            data.push({'#':index+1,id:element.id,"الرمز":element.code,"الاسم":element.name,"الحالة":"Active"});
          }
          setTypes(data);
          setCount(100);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
      }
      else if(window.localStorage.i18nextLng=="en"){
        API.get('/api/education').then((response)=>{
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            let element = response.data[index];
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
            <Link to="/dashboard/basicdata/createeducationlevel"><CButton shape="square" color="success">{t('translations.buttons.Add')}</CButton></Link>
        </CCol>
    </CRow>
    <hr></hr>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <h3>{t('translations.Basic_Data.Education_Levels.table_headers.header')}</h3>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={types}
                fields={[
                  { key: '#', _classes: 'font-weight-bold' },
                  t('translations.Basic_Data.Education_Levels.table_headers.code'),t('translations.Basic_Data.Education_Levels.table_headers.name'),t('translations.Basic_Data.Education_Levels.table_headers.status'),{key:'Action',label:'',_style: { width: '12%' },sorter:false,filter:false}
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
                  // 'Status':
                  //   (item)=>(
                  //     <>
                  //     <td>
                  //     <CBadge color={getBadge(item.Status)}>
                  //       {item.Status}
                  //     </CBadge>
                  //     </td>
                  //     </>
                  //   ),
                  'Action':
                    (item)=>(
                      <>
                      <td>
                        <CRow>
                          <CCol>
                            <CButton type="button" onClick={()=>delete_EduLevel(item.id)} color="danger">Delete</CButton> <CButton onClick={()=>{history.push({pathname:'/dashboard/basicdata/edit_edulevel',item:item})}} type="button" color="info">Edit</CButton>
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

export default ShowEducationLevels;