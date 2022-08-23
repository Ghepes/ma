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

const Role = () => {
    const align_row={
        float: "left",
        content: "",
        padding: "1%"
    }
    let history=useHistory();
    const [holidays,setHolidays]=React.useState();
    const [count, setCount] = React.useState(0);
    const [t,i18n]=useTranslation();
    const get_month_name=(month_number)=>{
      var month="";
      switch(month_number) {
        case '1':
          month="January"
          break;
        case '2':
          month="February"
          break;
        case '3':
          month="March"
          break;
        case '4':
          month="April"
          break;
        case '5':
          month="May"
          break;
        case '6':
          month="June"
          break;
        case '7':
          month="July"
          break;
        case '8':
          month="August"
          break;
        case '9':
          month="September"
          break;
        case '10':
          month="October"
          break;
        case '11':
          month="November"
          break;
        case '12':
          month="December"
          break;
        default:
          month="";
      }
      return month;
    }
    const delete_holiday=(id)=>{
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this  record!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          API.delete('/api/holiday/'+id+"/").then(response=>{
            if(response.data.success==true){
              const data=Array.from(holidays);
              for(let index=0;index<data.length;index++){
                if(data[index].id==id){
                  data.splice(index,1);
                  break;
                }
              }
              setHolidays(data);
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
        API.get('/api/holiday').then((response)=>{
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,id:element.id,"السنة":element.year,"الشهر":get_month_name(element.month),"من":element.holidate,"إلى":element.holidateto,"الحالة":"Active"});
          }
          setHolidays(data);
          setCount(100);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
      }
      else if(window.localStorage.i18nextLng=="en"){
        API.get('/api/holiday').then((response)=>{
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,id:element.id,Year:element.year,Month:get_month_name(element.month),From:element.holidate,To:element.holidateto,Status:"Active"});
          }
          setHolidays(data);
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
            <Link to="/dashboard/basicdata/holidaycreate"><CButton shape="square" color="success">{t('translations.buttons.Add')}</CButton></Link>
        </CCol>
    </CRow>
    <hr></hr>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <h3>{t('translations.Basic_Data.Holidays.table_headers.header')}</h3>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={holidays}
              fields={[
                { key: '#', _classes: 'font-weight-bold' },
                t('translations.Basic_Data.Holidays.table_headers.year'),t('translations.Basic_Data.Holidays.table_headers.month'),t('translations.Basic_Data.Holidays.table_headers.from'),t('translations.Basic_Data.Holidays.table_headers.to'),t('translations.Basic_Data.Holidays.table_headers.status'),{key:'Action',label:'',_style: { width: '12%' },sorter:false,filter:false}
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
                    <>
                    <td>
                      <CRow>
                        <CCol>
                          <CButton onClick={()=>delete_holiday(item.id)} type="button" color="danger">{t('translations.buttons.Delete')}</CButton> <CButton type="button" onClick={()=>{history.push({pathname:'/dashboard/basicdata/edit_holiday',item:item})}} color="info">{t('translations.buttons.Edit')}</CButton>
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
export default Role;
