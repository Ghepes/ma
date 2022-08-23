import React from 'react';
import {API} from '../../Config';
import swal from 'sweetalert';
import {
    CRow,CButton,CDataTable,
    CCol,CCard, CCardBody, CForm, CFormGroup, CLabel, CInput, CSelect, CCardHeader, CBadge
  } from '@coreui/react';
const fields = ['#','APPRAISAL_QUESTIONS','RATING'];

const Rating =()=>{
    const [questions,setQuestions]=React.useState();
    const [employees,setEmployees]=React.useState();
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        let one = "/api/questions"
        let two = "/api/employeedetail"
        API.get(one).then(response=>{
            var data=[];
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                data.push({'#':index+1,APPRAISAL_QUESTIONS:element.questions,rating:"0"});
            }
            setQuestions(data);
        }).catch(error=>{

        })
        API.get(two).then(response=>{
            var data=[];
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                data.push({'#':index+1,id:element.id,empid:element.empid,name:element.empname,companyrole_id:element.companyrole_id,companyrole:element.companyrole});
            }
            setEmployees(data);
        }).catch(error=>{
            
        })
        setCount(100);
    },[]);
    return(
        <>
        <CRow>
            <CCol md="12">
                <CCard>
                    <CCardBody>
                        <CForm>
                            <CFormGroup row>
                                <CCol md="4">
                                    <CLabel htmlFor="ratingdate">Rating Date *</CLabel>
                                    <CInput type="date" id="ratingdate" name="ratingdate" />
                                </CCol>
                                <CCol md="4">
                                    <CLabel htmlFor="ratingdate">Employee Name *</CLabel>
                                    <CSelect>
                                    {employees!=null && employees.map((employee)=>(<option key={employee.id} value={employee.id}>{employee.name}</option>))}
                                    </CSelect>
                                </CCol>
                            </CFormGroup>
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
        <CRow>
            <CCol md="12">
                <CCard>
                    <CCardHeader>Rating</CCardHeader>
                    <CCardBody>
                    <CDataTable className="questions_class"
                        items={questions}
                        fields={[
                        { key: '#', _classes: 'font-weight-bold' },
                            'APPRAISAL QUESTION','RATING'
                        ]}
                        light
                        hover
                        striped
                        bordered
                        sorter
                        columnFilter
                        tableFilter
                        itemsPerPage={10}
                        scopedSlots = {{
                            'RATING':
                            (item)=>(
                                <>
                                <td>
                                    <CRow>
                                        <CCol md="4">
                                            <CInput onChange={(event)=>{item.rating=event.target.value}} value={item.rating} type="number"/>
                                        </CCol>
                                    </CRow>
                                </td>
                                </>
                            )
                            }
                        }
                        />
                        <hr/>
                        <CRow>
                            <CCol sm="2">
                                <CButton block variant="outline" color="primary">Save</CButton>
                            </CCol>
                            <CCol sm="10"></CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default Rating;