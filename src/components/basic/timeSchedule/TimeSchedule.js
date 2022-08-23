import React from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
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
const fields = ['IN_TIME','OUT_TIME', 'SHIFT', 'ACTIONS']
const TimeSchedule= ()=>{
    const align_row={
        float: "left",
        content: "",
        padding: "1%"
    }
    let history=useHistory();
    const [t,i18n]=useTranslation();
    const delete_schedule=(id)=>{
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this  record!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          API.delete('/api/timeschedule/'+id+"/").then(response=>{
            if(response.data.success==true){
              const data=Array.from(timeschedules);
              for(let index=0;index<data.length;index++){
                if(data[index].id==id){
                  data.splice(index,1);
                  break;
                }
              }
              setTimeSchedules(data);
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
    const tConvert=(time)=>{
      time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      if (time.length > 1) { // If time format correct
        time = time.slice(1); // Remove full string match value
        time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join('');
    }
    const [timeschedules,setTimeSchedules]=React.useState();
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
      if(window.localStorage.i18nextLng=="ar"){
        API.get('/api/timeschedule').then((response)=>{
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,id:element.id,"في":tConvert(element.intime.toString()),"خارج":tConvert(element.outtime.toString()),"التحول":element.shiftname,"الحالة":"Active"});
          }
          setTimeSchedules(data);
          setCount(100);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
      }
      else if(window.localStorage.i18nextLng=="en"){
        API.get('/api/timeschedule').then((response)=>{
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,id:element.id,In:tConvert(element.intime.toString()),Out:tConvert(element.outtime.toString()),Shift:element.shiftname,Status:"Active"});
          }
          setTimeSchedules(data);
          setCount(100);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
      }
    });
    return(
        <>
        <CRow className="align-items-center">
        <CCol col="2" className="mb-3 mb-xl-0 text-left">
            <Link to="/dashboard/basicdata/timeschedulecreate"><CButton shape="square" color="success">{t('translations.buttons.Add')}</CButton></Link>
        </CCol>
    </CRow>
    <hr></hr>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <h3>{t('translations.Basic_Data.Time_Schedules.table_headers.header')}</h3>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={timeschedules}
                fields={[
                  { key: '#', _classes: 'font-weight-bold' },
                  t('translations.Basic_Data.Time_Schedules.table_headers.in'),t('translations.Basic_Data.Time_Schedules.table_headers.out'), t('translations.Basic_Data.Time_Schedules.table_headers.shift'),{key:'Action',label:'',_style: { width: '12%' },sorter:false,filter:false}
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
                            <CButton onClick={()=>delete_schedule(item.id)} type="button" color="danger">{t('translations.buttons.Delete')}</CButton> <CButton type="button" onClick={()=>{history.push({pathname:'/dashboard/basicdata/edit_time_schedule',item:item})}} color="info">{t('translations.buttons.Edit')}</CButton>
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

export default TimeSchedule;