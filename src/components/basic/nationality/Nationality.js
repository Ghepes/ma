import React,{useEffect, useState} from 'react'
import { Redirect, useHistory } from "react-router"
import swal from '@sweetalert/with-react'
import { API } from '../../../Config';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,CForm, CFormGroup, CLabel, CInput, CCardFooter
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Nationality = () => {
    const align_row={
        float: "left",
        content: "",
        padding: "1%"
    }
    const history=useHistory();
    const [nationalities,setNationalities]=useState([]);
    const [count, setCount] = useState(0);
    const [toEditName,setToEditName]=useState("");
    const [toEditOrder,setToEditOrder]=useState("");
    const [show,setShow]=useState(false);
    const [t,i18n]=useTranslation();
    function reset_form(){
      setToEditName("");
      setToEditOrder("");
    }
    const delete_nationality=(index,item)=>{
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this record!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          API.delete('/api/nationality/'+item.ID+"/").then(response=>{
            if(response.data.success==true){
              const data=Array.from(nationalities);
              for(let index=0;index<data.length;index++){
                if(data[index].ID==item.ID){
                  data.splice(index,1);
                  break;
                }
              }
              setNationalities(data);
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
    const edit_nationality=(item,index)=>{
      return(
        swal({
            text: "Edit Nationality Details",
            buttons: false,
            content:(
              <>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardBody>
                      <CForm>
                        <CFormGroup>
                          <CLabel className="float-left">Name *</CLabel>
                          <CInput value={toEditName} onChange={(event)=>setToEditName(event.target.value)} type="text"/>
                        </CFormGroup>
                        <CFormGroup>
                          <CLabel className="float-left">Sort Order *</CLabel>
                          <CInput type="text" value={toEditOrder} onChange={(event)=>setToEditOrder(event.target.value)}/>
                        </CFormGroup>
                      </CForm>
                    </CCardBody>
                    <CCardFooter>
                    <CButton type="button" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton onClick={reset_form} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                    </CCardFooter>
                  </CCard>
                </CCol>
              </CRow>
              </>
            )
          }
        ))
    }
    useEffect(() => {
      if(window.localStorage.i18nextLng=="ar"){
        API.get('/api/nationality').then((response)=>{
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,ID:element.id,"الاسم":element.name,"الترتيب":element.sortorder,"الحالة":"active"});
            //console.log(element)
          }
          setNationalities(data);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
      }
      else{
        API.get('/api/nationality').then((response)=>{
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,ID:element.id,Name:element.name,Order:element.sortorder,Status:"active"});
            //console.log(element)
          }
          setNationalities(data);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
      }
      
    });

  return (
    <>
    <CRow className="align-items-center">
        <CCol col="2" className="mb-3 mb-xl-0">
            <Link to="/dashboard/basicdata/nationalitycreate"><CButton shape="square" color="success">{t('translations.buttons.Add')}</CButton></Link>
        </CCol>
    </CRow>
    <hr/>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h3>{t('translations.Basic_Data.Nationality.table_headers.header')}</h3>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={nationalities}
              fields={[
                { key: '#', _classes: 'font-weight-bold' },
                t('translations.Basic_Data.Nationality.table_headers.Name'),t('translations.Basic_Data.Nationality.table_headers.Order'),t('translations.Basic_Data.Nationality.table_headers.Status'),{key:"Action",label:"",_style: { width: '12%' },sorter:false,filter:false}
              ]}
              light
              hover
              striped
              columnFilter
              sorter
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'Action':
                  (item,index)=>{
                    return(
                      <td>
                        <CRow>
                          <CCol>
                            <CButton onClick={()=>delete_nationality(index,item)} color="danger">{t('translations.buttons.Delete')}</CButton> <CButton onClick={()=>{history.push({pathname:'/dashboard/basicdata/edit_nationality',item:item})}} color="info">{t('translations.buttons.Edit')}</CButton>
                          </CCol>
                        </CRow>
                      </td>
                    )
                  },
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
export default Nationality;
