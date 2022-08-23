import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from '@coreui/react';
import {Link, useHistory} from 'react-router-dom';
import swal from 'sweetalert'
import {API} from '../../Config'
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
const fields = [
  { key: '#', _style: { width: '5%'} },
  { key: 'First Name', _style: { width: '15%'} },
  { key: 'Last Name', _style: { width: '15%'} },
  { key: 'Gender', _style: { width: '10%'} },
  { key: 'Joining Date', _style: { width: '10%'} },
  { key: 'Type', _style: { width: '10%'} },
  { key: 'Status', _style: { width: '10%'} },
  {
    key: 'Actions',
    label: 'Actions',
    _style: { width: '10%' },
    sorter: false,
    filter: false
  }
]
const Employees = () => {
  const [employees,setEmployees]=React.useState();
  const [count, setCount] = React.useState(0);
  const [t,i18n]=useTranslation();
  let history = useHistory();
  const delete_employee=(index,item)=>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        API.delete('/api/employeebasicinfo/'+item.pk+"/").then(response=>{
          if(response.data.success==true){
            const data=Array.from(employees);
            for(let index=0;index<data.length;index++){
              if(data[index].pk==item.pk){
                data.splice(index,1);
                break;
              }
            }
            setEmployees(data);
            swal("Poof! Your selected loan record has been deleted!", {
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
      API.get('/api/employeebasicinfo').then((response)=>{
        var data=[];
        for (let index = 0; index < response.data.length; index++) {
          const element = response.data[index];
          data.push({'#':index+1,id:element.id,"الهوية":element.empid,"الاسم الأول":element.empname.split(" ",2)[0],"اسم العائلة":element.empname.split(" ",2)[1], "تاريخ التسجيل":element.joiningdate,"النوع":element.companyrole,"الجنس":element.gender,Basic:element.basic,CompanyRole:element.companyrole,CompanyRoleId:element.companyrole_id,dob:element.dateofbirth,Department:element.departments,DepartmentId:element.departments_id,EducationLevelId:element.educationlevels_id,EmploymentTypeId:element.employmenttypes_id,ContractEndDate:element.contractenddate,Email:element.emailaddress,EmergencyPhone:element.emergencyphone,Address:element.address,"الحالة":"Active"});
        }
        setEmployees(data);
        setCount(100);
      }).catch((error)=>{
        swal("Failed!", error.message, "error");
      })
    }
    else if(window.localStorage.i18nextLng=="en"){
      API.get('/api/employeebasicinfo').then((response)=>{
        var data=[];
        for (let index = 0; index < response.data.length; index++) {
          const element = response.data[index];
          data.push({'#':index+1,id:element.id,ID:element.empid,"First Name":element.empname.split(" ",2)[0],"Last Name":element.empname.split(" ",2)[1], "Join Date":element.joiningdate,Type:element.companyrole,Gender:element.gender,Basic:element.basic,CompanyRole:element.companyrole,CompanyRoleId:element.companyrole_id,dob:element.dateofbirth,Department:element.departments,DepartmentId:element.departments_id,EducationLevelId:element.educationlevels_id,EmploymentTypeId:element.employmenttypes_id,ContractEndDate:element.contractenddate,Email:element.emailaddress,EmergencyPhone:element.emergencyphone,Address:element.address,Status:"Active"});
        }
        setEmployees(data);
        setCount(100);
      }).catch((error)=>{
        swal("Failed!", error.message, "error");
      })
    }
    
  });
  return (
    <>
    <CRow className="align-items-center">
        <CCol col="2" className="mb-3 mb-xl-0 text-left">
            <Link to="/dashboard/employee/profile"><CButton shape="square" color="success">{t('translations.buttons.Add')}</CButton></Link>
        </CCol>
    </CRow>
    <hr></hr>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <h3>{t('translations.Employees.list.table_headers.header')}</h3>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={employees}
              fields={[
                { key: '#', _classes: 'font-weight-bold' },
                t('translations.Employees.list.table_headers.id'),t('translations.Employees.list.table_headers.first_name'),t('translations.Employees.list.table_headers.last_name'),t('translations.Employees.list.table_headers.gender'),t('translations.Employees.list.table_headers.join_date'),t('translations.Employees.list.table_headers.type'),t('translations.Employees.list.table_headers.status'),{key:'Actions',label:'',_style: { width: '12%' },sorter:false,filter:false}
              ]}
              light
              hover
              striped
              columnFilter
              responsive
              bordered
              footer
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'Actions':
                  (item,index)=>{
                    return(
                      <td>
                        <CRow>
                          <CCol>
                            <CButton onClick={()=>delete_employee(index,item)} color="danger">{t('translations.buttons.Delete')}</CButton> <CButton onClick={()=>{history.push({pathname:'/dashboard/employee/edit',item:item})}} color="info">{t('translations.buttons.Edit')}</CButton>
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
export default Employees;
