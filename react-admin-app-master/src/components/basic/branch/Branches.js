import React from 'react';
import {
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
const fields = ['#','CODE','NAME', 'ADDRESS','CONTACT', 'ACTIONS']
const Branches= ()=>{
    const align_row={
        float: "left",
        content: "",
        padding: "1%"
    }
    const [branches,setBranches]=React.useState();
    const [t,i18n]=useTranslation();
    const [count, setCount] = React.useState(0);
    let history=useHistory();
    React.useEffect(() => {
      if(window.localStorage.i18nextLng=="ar"){
        API.get('/api/branch').then((response)=>{
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,id:element.id,"الرمز":element.code,"الاسم":element.name,"العنوان":element.address, "الاتصال":element.contact});
          }
          setBranches(data);
          setCount(100);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
      }
      else if(window.localStorage.i18nextLng=="en"){
        API.get('/api/branch').then((response)=>{
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,id:element.id,Code:element.code,Name:element.name,Address:element.address, Contact:element.contact});
          }
          setBranches(data);
          setCount(100);
        }).catch((error)=>{
          swal("Failed!", error.message, "error");
        })
      }
      
    });
    const delete_branch=(id)=>{
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this  record!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          API.delete('/api/branch/'+id+"/").then(response=>{
            if(response.data.success==true){
              const data=Array.from(branches);
              for(let index=0;index<data.length;index++){
                if(data[index].id==id){
                  data.splice(index,1);
                  break;
                }
              }
              setBranches(data);
              swal("Your selected loan record has been deleted!", {
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
    return(
        <>
        <CRow className="align-items-center">
        <CCol col="2" className="mb-3 mb-xl-0">
            <Link to="/dashboard/basicdata/createbranch"><CButton shape="square" color="success">{t('translations.buttons.Add')}</CButton></Link>
        </CCol>
    </CRow>
    <hr></hr>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <h3>{t('translations.Basic_Data.Branches.table_headers.header')}</h3>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={branches}
                fields={[
                  { key: '#', _classes: 'font-weight-bold' },
                  t('translations.Basic_Data.Branches.table_headers.code'),t('translations.Basic_Data.Branches.table_headers.name'),t('translations.Basic_Data.Branches.table_headers.address'),t('translations.Basic_Data.Branches.table_headers.contact'),{key:'Action',label:'',_style: { width: '12%' },sorter:false,filter:false}
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
                            <CButton onClick={()=>delete_branch(item.id)} type="button" color="danger">{t('translations.buttons.Delete')}</CButton> <CButton onClick={()=>{history.push({pathname:'/dashboard/basicdata/edit_branch',item:item})}} type="button" color="info">{t('translations.buttons.Edit')}</CButton>
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

export default Branches;