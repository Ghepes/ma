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
import {Link, useHistory} from 'react-router-dom';
import swal from 'sweetalert'
import {API} from '../../../Config'
import {useTranslation } from 'react-i18next';
import i18n from '../../../i18n'

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
const Companies = () => {
  let history=useHistory();
  const [companies,setCompanies]=React.useState();
  const [count, setCount] = React.useState(0);
  const [t,i18n]=useTranslation();
  
  const delete_company=(id)=>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this  record!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        API.delete('/api/company/'+id+"/").then(response=>{
          if(response.data.success==true){
            const data=Array.from(companies);
            for(let index=0;index<data.length;index++){
              if(data[index].id==id){
                data.splice(index,1);
                break;
              }
            }
            setCompanies(data);
            swal("Deleted!","Your selected Company record has been deleted!", {
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
      API.get('/api/company').then((response)=>{
        //console.log(response.data)
        var data=[];
        for (let index = 0; index < response.data.length; index++) {
          const element = response.data[index];
          data.push({'#':index+1,id:element.id,'الرمز':element.code,'البريد الإلكتروني':element.emails,'الاسم':element.companyname,SUBSCRIPTION_DESCRIPTION:element.discreption,'رسوم الاشتراك':(element.price==null?"N/A":element.price),"تاريخ انتهاء الصلاحية":(element.expirydate==null?"N/A":element.expirydate),CONTACT_EXPIRATION:element.contractexpiration,LICENSE_NAME:element.licensename,LICENSE_NO:element.licenseno,LICENSE_EXP_DATE:element.licenseexpdate,'الحالة':"Active"});
        }
        setCompanies(data);
      }).catch((error)=>{
        swal("Failed!", error.message, "error");
      })
    }
    else{
      API.get('/api/company').then((response)=>{
        console.log(response.data)
        var data=[];
        for (let index = 0; index < response.data.length; index++) {
          const element = response.data[index];
          data.push({'#':index+1,id:element.id,Code:element.code,Email:element.emails,Name:element.companyname,SUBSCRIPTION_DESCRIPTION:element.discreption,Subscription_Fee:(element.price==null?"N/A":element.price),"Expiry Date":(element.expirydate==null?"N/A":element.expirydate),CONTACT_EXPIRATION:element.contractexpiration,LICENSE_NAME:element.licensename,LICENSE_NO:element.licenseno,LICENSE_EXP_DATE:element.licenseexpdate,Status:"Active"});
        }
        setCompanies(data);
      }).catch((error)=>{
        swal("Failed!", error.message, "error");
      })
    }
  });
  return (
    <>
    <CRow className="align-items-center">
        <CCol col="2" className="mb-3 mb-xl-0">
            <Link to="/dashboard/admin/createcompany"><CButton shape="square" color="success">{t('translations.buttons.Add')}</CButton></Link>
        </CCol>
    </CRow>
    <hr></hr>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h3>{t('translations.Admin.Companies.name')}</h3>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={companies}
              fields={[
                { key: '#', _classes: 'font-weight-bold' },
                t('translations.Admin.Companies.table_headers.Code'),t('translations.Admin.Companies.table_headers.Name'),t('translations.Admin.Companies.table_headers.Email'),t('translations.Admin.Companies.table_headers.Subscription_Fee'),t('translations.Admin.Companies.table_headers.Expiry_Date'),t('translations.Admin.Companies.table_headers.Status'),{key:'Action',label:'',_style: { width: '12%' },sorter:false,filter:false}
              ]}
              light
              hover
              striped
              bordered
              sorter
              columnFilter
              footer
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                "Action":
                  (item)=>(
                    <>
                      <td>
                        <CRow>
                          <CCol>
                            <CButton type="button" onClick={()=>delete_company(item.id)} color="danger">{t('translations.buttons.Delete')}</CButton> <CButton type="button" onClick={()=>{history.push({pathname:"/dashboard/admin/edit_company",item:item})}} color="info">{t('translations.buttons.Edit')}</CButton>
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
export default Companies;
