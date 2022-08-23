import React, {useEffect,useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CBadge
} from '@coreui/react';

import {Link, useHistory} from 'react-router-dom';
import {API} from '../../../Config';
import swal from 'sweetalert';
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

const InsuranceProvider = () => {
    const align_row={
        float: "left",
        content: "",
        padding: "1%"
    }
    let history=useHistory();
    const [providers, setProviders] = useState();
    const [count, setCount] = useState(0);
    const [t,i18n]=useTranslation();
    const delete_provider=(id)=>{
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this  record!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          API.delete('/api/insurancerenew/'+id+"/").then(response=>{
            if(response.data.success==true){
              const data=Array.from(providers);
              for(let index=0;index<data.length;index++){
                if(data[index].id==id){
                  data.splice(index,1);
                  break;
                }
              }
              setProviders(data);
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
    useEffect(() => {
      if(window.localStorage.i18nextLng=="ar"){
        API.get('/api/insurancerenew').then((response)=>{
          console.log(response.data);
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,id:element.id,"الاسم":element.name,"العنوان":element.address,"الهاتف":element.phonenumber,"الحالة":"Active"});
          }
          setProviders(data);
          setCount(100);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
      }
      else if(window.localStorage.i18nextLng=="en"){
        API.get('/api/insurancerenew').then((response)=>{
          console.log(response.data);
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,id:element.id,Name:element.name,Address:element.address,Phone:element.phonenumber,Status:"Active"});
          }
          setProviders(data);
          setCount(100);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
      }
    })
  return (
    <>
    <CRow className="align-items-center">
        <CCol col="2" className="mb-3 mb-xl-0">
            <Link to="/dashboard/basicdata/insuranceprovidercreate"><CButton shape="square" color="success">{t('translations.buttons.Add')}</CButton></Link>
        </CCol>
    </CRow>
    <hr></hr>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <h3>{t('translations.Basic_Data.Insurance_Providers.table_headers.header')}</h3>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={providers}
              fields={[
                { key: '#', _classes: 'font-weight-bold' },
                t('translations.Basic_Data.Insurance_Providers.table_headers.name'),t('translations.Basic_Data.Insurance_Providers.table_headers.address'),t('translations.Basic_Data.Insurance_Providers.table_headers.phone'),t('translations.Basic_Data.Insurance_Providers.table_headers.status'),{key:'Action',label:'',_style: { width: '12%' },sorter:false,filter:false}
              ]}
              light
              hover
              sorter
              columnFilter
              striped
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
                          <CButton onClick={()=>delete_provider(item.id)} type="button" color="danger">{t('translations.buttons.Delete')}</CButton> <CButton type="button" onClick={()=>{history.push({pathname:'/dashboard/basicdata/edit_insurance_provider',item:item})}} color="info">{t('translations.buttons.Edit')}</CButton>
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
export default InsuranceProvider;
