import React, {useState,useEffect} from 'react'
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
import CIcon from '@coreui/icons-react';
import { useTranslation } from 'react-i18next';
const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    case 'null' : return 'danger'
    default: return 'primary'
  }
}

const LeaveType = () => {
    const align_row={
        float: "left",
        content: "",
        padding: "1%"
    }
    let history=useHistory();
    const [questions, setQuestions] = useState();
    const [count, setCount] = useState(0);
    const [t,i18n]=useTranslation();
    const delete_question=(id)=>{
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this  record!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          API.delete('/api/questions/'+id+"/").then(response=>{
            if(response.data.success==true){
              const data=Array.from(questions);
              for(let index=0;index<data.length;index++){
                if(data[index].id==id){
                  data.splice(index,1);
                  break;
                }
              }
              setQuestions(data);
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
        API.get('/api/questions').then((response)=>{
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,id:element.id,"سؤال":element.questions,"الحالة":element.isactive});
          }
          setQuestions(data);
          setCount(100);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
      }
      else if(window.localStorage.i18nextLng=="en"){
        API.get('/api/questions').then((response)=>{
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,id:element.id,Question:element.questions,Status:element.isactive});
          }
          setQuestions(data);
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
            <Link to="/dashboard/basicdata/createappraisalquestion"><CButton shape="square" color="success">{t('translations.buttons.Add')}</CButton></Link>
        </CCol>
    </CRow>
    <hr></hr>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <h3>{t('translations.Basic_Data.Appraisal_Questions.table_headers.header')}</h3>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={questions}
              fields={[
                { key: '#', _classes: 'font-weight-bold' },
                t('translations.Basic_Data.Appraisal_Questions.table_headers.question'),t('translations.Basic_Data.Appraisal_Questions.table_headers.status'),{key:'Action',label:'',_style: { width: '12%' },sorter:false,filter:false}
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
                          <CButton onClick={()=>delete_question(item.id)} type="button" color="danger">{t('translations.buttons.Delete')}</CButton> <CButton type="button" onClick={()=>{history.push({pathname:'/basicdata/edit_appraisal_question',item:item})}} color="info">{t('translations.buttons.Edit')}</CButton>
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
export default LeaveType;
