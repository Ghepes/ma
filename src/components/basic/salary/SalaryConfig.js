import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react';
import {Link, useHistory} from 'react-router-dom';
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
const SalaryConfig = () => {
  let history=useHistory();
  const [salaries,setSalaries]=React.useState();
  const [count, setCount] = React.useState(0);
  const [t,i18n]=useTranslation();
  const delete_configuration=(id)=>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this  record!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        API.delete('/api/salaryconfig/'+id+"/").then(response=>{
          if(response.data.success==true){
            const data=Array.from(salaries);
            for(let index=0;index<data.length;index++){
              if(data[index].id==id){
                data.splice(index,1);
                break;
              }
            }
            setSalaries(data);
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
      API.get('/api/salaryconfig').then((response)=>{
        var data=[];
        for (let index = 0; index < response.data.length; index++) {
          const element = response.data[index];
          data.push({'#':index+1,id:element.id,"أساسي":element.basicper+" %","السكن":element.housingper+" %","النقل":element.transportationper+" %", "غير ذلك":element.other+" %","الحالة":"Active"});
        }
        setSalaries(data);
        setCount(100);
      }).catch((error)=>{
        swal("Failed!", error.message, "error");
      })
    }
    else if(window.localStorage.i18nextLng=="en"){
      API.get('/api/salaryconfig').then((response)=>{
        var data=[];
        for (let index = 0; index < response.data.length; index++) {
          const element = response.data[index];
          data.push({'#':index+1,id:element.id,Basic:element.basicper+" %","Housing":element.housingper+" %","Transportation":element.transportationper+" %", "Other":element.other+" %","Status":"Active"});
        }
        setSalaries(data);
        setCount(100);
      }).catch((error)=>{
        swal("Failed!", error.message, "error");
      })
    }
    
  },[]);
  return (
    <>
    <CRow className="align-items-center">
        <CCol col="2" className="mb-3 mb-xl-0">
            <Link to="/dashboard/basicdata/salaryconfigcreate"><CButton shape="square" color="success">{t('translations.buttons.Add')}</CButton></Link>
        </CCol>
    </CRow>
    <hr></hr>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <h3>{t('translations.Basic_Data.Salary_Config.table_headers.header')}</h3>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={salaries}
              fields={[
                { key: '#', _classes: 'font-weight-bold' },
                t('translations.Basic_Data.Salary_Config.table_headers.basic'),t('translations.Basic_Data.Salary_Config.table_headers.housing'),t('translations.Basic_Data.Salary_Config.table_headers.transportation'),t('translations.Basic_Data.Salary_Config.table_headers.other'),t('translations.Basic_Data.Salary_Config.table_headers.status'),{key:'Action',label:'',_style: { width: '12%' },sorter:false,filter:false}
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
              scopedSlots = {{
                'Action':
                  (item)=>(
                    <>
                      <td>
                        <CRow>
                          <CCol>
                            <CButton type="button" onClick={()=>delete_configuration(item.id)} color="danger">{t('translations.buttons.Delete')}</CButton> <CButton onClick={()=>{history.push({pathname:'/dashboard/basicdata/edit_salary_configuration',item:item})}} type="button" color="info">{t('translations.buttons.Edit')}</CButton>
                          </CCol>
                        </CRow>
                      </td>
                    </>
                  )
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
export default SalaryConfig;
