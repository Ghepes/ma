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
import {Link} from 'react-router-dom';
import swal from 'sweetalert'
import {API} from '../../Config'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['#','EMPLOYEE','APPLY_DATE', 'AMOUNT', 'INSTALLMENT','START_MONTH_AND_YEAR','AMOUNT_PER_MONTH','ACTIONS'];
const align_row={
    float: "left",
    content: "",
    padding: "1%"
}
const get_month_name=(month_number)=>{
    var month="";
    switch(month_number) {
      case 1:
        month="January"
        break;
      case 2:
        month="February"
        break;
      case 3:
        month="March"
        break;
      case 4:
        month="April"
        break;
      case 5:
        month="May"
        break;
      case 6:
        month="June"
        break;
      case 7:
        month="July"
        break;
      case 8:
        month="August"
        break;
      case 9:
        month="September"
        break;
      case 10:
        month="October"
        break;
      case 11:
        month="November"
        break;
      case 12:
        month="December"
        break;
      default:
        month="";
        break;
    }
    return month;
  }
const Loans = () => {
  const [loans,setLoans]=React.useState();
  const [count, setCount] = React.useState(0);
  const delete_loan=(id)=>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this  record!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        API.delete('/api/loan/'+id+"/").then(response=>{
          if(response.data.success==true){
            const data=Array.from(loans);
            for(let index=0;index<data.length;index++){
              if(data[index].id==id){
                data.splice(index,1);
                break;
              }
            }
            setLoans(data);
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
  React.useEffect(() => {
    API.get('/api/loan').then((response)=>{
      var data=[];
      console.log(response.data)
      for (let index = 0; index < response.data.length; index++) {
        const element = response.data[index];
        data.push({'#':index+1,id:element.id,EMPLOYEE:element.employeebasicInfo,APPLY_DATE:element.applydate,AMOUNT:element.loanamount, INSTALLMENT:element.installment,START_MONTH_AND_YEAR:get_month_name(element.startmonth)+" "+element.startyear});
      }
      setLoans(data);
      setCount(100);
    }).catch((error)=>{
      swal("Failed!", error.message, "error");
    })
  },[]);
  return (
    <>
    <CRow className="align-items-center">
        <CCol col="2" className="mb-3 mb-xl-0 text-left">
            <Link to="/dashboard/loan/new"><CButton shape="square" color="success">Add</CButton></Link>
        </CCol>
    </CRow>
    <hr></hr>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <h3>Loans</h3>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={loans}
              fields={fields}
              light
              hover
              striped
              sorter
              columnFilter
              tableFilter
              bordered
              itemsPerPageSelect
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'ACTIONS':
                  (item)=>(
                    <>
                      <td>
                        <CRow>
                          <CCol>
                            <CButton onClick={()=>delete_loan(item.id)} size="sm" color="danger">Delete</CButton>
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
export default Loans;
