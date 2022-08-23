import React, { useState } from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,CSelect,
    CRow,CForm, CFormGroup, CLabel, CInput, CCardFooter,CNavItem,CNavLink,CTextarea,CTabPane,CNav,CTabs,CTabContent
  } from '@coreui/react';
import {API} from '../../Config'
import CIcon from '@coreui/icons-react'
import {useLocation} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import countries from './Countries';

const EditEmployee=()=>{
    let history = useHistory();
    let location = useLocation();
    const [id,setId]=useState("");
    const [firstName,setFirstName]=useState("");
    const [firstNameError,setFirstNameError]=useState("");

    const [lastName,setLastName]=useState("");
    const [dob,setDob]=useState("");
    const [dobError,setDobError]=useState("");
    const [maritalstatus,setMaritalStatus]=useState(-1);
    const [nationality,setNationality]=useState(-1);
    const [nationalityError,setNationalityError]=useState("");
    const [nationalities,setNationalities]=useState();
    const [country,setCountry]=useState(-1);
    const [countryError,setCountryError]=useState("");
    const [email,setEmail]=useState("");
    const [gender,setGender]=useState(-1);
    const [genderError,setGenderError]=useState("");
    const [homePhone,setHomePhone]=useState("");
    const [emPhone,setEmPhone]=useState("");
    const [address,setAddress]=useState("");
    const [workemail,setWorkEmail]=useState("");
    const [workphone,setWorkPhone]=useState("");

    const [empid,setEmpId]= useState("");
    const [idError,setIdError]=useState("");
    const [joinDate,setJoinDate]=useState("");
    const [joinDateError,setJoinDateError]=useState("");
    const [role,setRole]=useState(-1);
    const [roleError,setRoleError]=useState("");
    const [roles,setRoles]=useState([]);
    const [employmentType,setEmploymentType]=useState(-1);
    const [employmentTypeError,setEmploymentTypeError]=useState("");
    const [employmentTypes,setEmploymentTypes]=useState();
    const [workSchedule,setWorkSchedule]=useState(-1);
    const [schedules,setSchedules]=useState();
    const [manager,setManager]=useState(-1);
    const [managerError,setManagerError]=useState("")
    const [managers,setManagers]=useState([]);
    const [department,setDepartment]=useState(-1);
    const [departmentError,setDepartmentError]=useState("");
    const [departments,setDepartments]=useState([]);
    const [education,setEducation]=useState(-1);
    const [educationError,setEducationError]=useState("");
    const [educationLevels,setEducationLevels]=useState();
    const [totalSalary,setTotalSalary]=useState(0);
    const [totalSalaryError,setTotalSalaryError]=useState("");
    const [housing,setHousing]=useState(0);
    const [basic,setBasic]=useState(0);
    const [transportation,setTransportation]=useState(0);
    const [other, setOther]=useState(0)
    const [educationDescription,setEducationDescription]= useState("");
    const [count,setCount]=useState(0);
    const [salaryConfig,setSalaryConfig]=useState([]);
    let error=[];
    const setSalary=(amount)=>{
        setTotalSalary(amount);
        setBasic((amount*salaryConfig.basicper)/100);
        setHousing((amount*salaryConfig.housingper)/100);
        setTransportation((amount*salaryConfig.transportationper)/100);
        setOther((amount*salaryConfig.other)/100);
    }
    const handleValidation=()=>{
        let errors = [];
        let formIsValid = true;
        //Name
        if(!firstName || firstName=="" || firstName===undefined){
           formIsValid = false;
           errors.push ("First Name Cannot be empty");
           setFirstNameError("First Name Cannot be empty")
        }
        else if(!firstName.match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors.push ("First Name can not have any number");
            setFirstNameError("First Name can not have any number");   
        }
        else{
            setFirstNameError("");
        }
        //gender
        if(gender=="-1"){
            formIsValid = false;
            errors.push ("Gender Cannot be empty");
            setGenderError("Please select gender of new employee")
        }else{
            setGenderError("");
        }
        //id
        if(!id || id=="" || id===undefined){
            setIdError("Please enter a new ID for new employee")
            formIsValid=false;
        }
        else{
            setIdError("");
        }
        //join date
        if(joinDate===undefined || joinDate===""){
            setJoinDateError("Join date needs to be filled up");
            formIsValid=false;
        }
        else{
            setJoinDateError("");
        }
        if(!role||role===""||role===undefined || role=="-1"){
            setRoleError("Please select a job title")
            formIsValid=false;
            errors.push("Please select a job title")
        }
        else{
            setRoleError("");
        }
        if(!dob||dob===""||dob===undefined){
            setDobError("Date Of Birth is required")
            errors.push("Date Of Birth is required")
            formIsValid=false;
        }
        else{
            setDobError("");
        }
        if(!employmentType||employmentType===""||employmentType===undefined||employmentType=="-1"){
            setEmploymentTypeError("Please select an Employment type");
            formIsValid=false;
        }
        else{
            setEmploymentTypeError("");
        }
        if(!totalSalary||totalSalary===""||totalSalary===undefined||totalSalary<=0){
            setTotalSalaryError("Total Salary can not be empty");
            errors.push("Total Salary can not be empty");
            formIsValid=false;
        }
        else{
            setTotalSalaryError("");
        }
        if(!manager||manager===""||manager===undefined){
            setManagerError("Manager Selection is needed")
            errors.push("Manager selection is needed")
            formIsValid=false;
        }
        else{
            setManagerError("");
        }
        if(!department||department===""||department===undefined||department=="-1"){
            setDepartmentError("Department selection is needed")
            formIsValid=false;
            errors.push("Department selection is needed");
        }
        else{
            setDepartmentError("");
        }
        if(!education||education===""||education===undefined||education=="-1"){
            setEducationError("Select an education level for new employee");
            formIsValid=false;
        }
        else{
            setEducationError("");
        }
        if(!nationality||nationality===""||nationality===undefined || nationality=="-1"){
            setNationalityError("Please select nationality")
            formIsValid=false;
            errors.push("Please select nationality");
        }
        else{
            setNationalityError("");
        }
        if(!country||country===""||country===undefined||country=="-1"){
            setCountryError("please select new employee's residence country");
            formIsValid=false;
            errors.push("please select new employee's residence country")
        }
        else{
            setCountryError("");
        }
        error=errors;
        console.log(error)
        return {valid:formIsValid,errors:errors};
    }
    const reset_form=(e)=>{
        setFirstName("");
        setLastName("");
        setDob("");
        setMaritalStatus(-1);
        setNationality(-1);
        setNationalities("");
        setSchedules("");
        setCountry(-1);
        setEmail("");
        setGender(-1);
        setHomePhone("");
        setEmPhone("");
        setEducationDescription("");
        setAddress("");
        setWorkEmail("");
        setWorkPhone("");
        setId("");
        setJoinDate("");
        setDepartments("");
        setRole(-1);
        setRoles([]);
        setSchedules("")
        setEmploymentType(-1);
        setEmploymentTypes("");
        setManager(-1);
        setDepartment(-1);
        setEducation(-1);
        setEducationLevels();
        setTotalSalary("");
        setBasic("");
        setHousing("");
        setTransportation("");
        setOther("");
    }
    React.useEffect(() => {
        if(location.item===undefined){
            history.goBack();
        }
        else{
            setId(location.item.id);
            setEmpId(location.item.EmpId);
            setFirstName(location.item.First_Name||location.item['الاسم الأول']);
            setLastName(location.item.Last_Name||location.item['اسم العائلة']);
            setDob(location.item.dob||location.item['']);
            setGender(location.item.To || location.item['الجنس']);
            setMaritalStatus(location.item);
            setNationality(location.item.nationality);
            setCountry(location.item.Country===undefined?"-1":location.item.Country);
        }
        API.get('/api/salaryconfig').then(response=>{
            setSalaryConfig(response.data[0]);
        }).catch(error=>{
            swal("Failed",error,"error")
        })
        API.get('/api/nationality').then((response)=>{
            var data=[];
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                data.push({id:element.id,name:element.name});
            }
            setNationalities(data);
        }).catch((error)=>{
            swal("Failed!", error.message, "error");
        })
        API.get('/api/employmenttypes').then((response)=>{
            var data=[];
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                data.push({id:element.id,name:element.name});
            }
            setEmploymentTypes(data);
        }).catch((error)=>{
            swal("Failed!", error.message, "error");
        })
        API.get('/api/education').then((response)=>{
            var data=[];
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                data.push({id:element.id,name:element.name});
            }
            setEducationLevels(data);
        }).catch((error)=>{
            swal("Failed!", error.message, "error");
        })
        API.get('/api/timeschedule').then((response)=>{
            var data=[];
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                data.push({id:element.id,intime:element.intime,outtime:element.outtime,shiftname:element.shiftname});
            }
            setSchedules(data);
        }).catch((error)=>{
            swal("Failed!", error.message, "error");
        })
        API.get('/api/employeebasicinfo').then((response)=>{
            var data=[];
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                data.push({id:element.id,empid:element.empid,name:element.empname});
            }
            setManagers(data);
        }).catch((error)=>{
            swal("Failed!", error.message, "error");
        })
        API.get('/api/departments').then((response)=>{
            var data=[];
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                data.push({id:element.id,name:element.name});
            }
            setDepartments(data);
        }).catch((error)=>{
            swal("Failed!", error.message, "error");
        })
        API.get('/api/companyrole').then((response)=>{
            var data=[];
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                data.push({id:element.id,name:element.name});
            }
            setRoles(data);
        }).catch((error)=>{
            swal("Failed!", error.message, "error");
        })
    },[count]);
    const handle_submit=()=>{
        let result=handleValidation();
        if(result.valid===true){
            let profile=JSON.parse(localStorage.getItem('profile'));
            API.put('/api/employeebasicinfo/'+id+'/',JSON.stringify({id:id,empid:id,empname:firstName+" "+lastName,gender:gender,companyrole:role,educationlevels:education,countryofresidence:country,nationality:nationality,employmenttypes:employmentType,departments:department,joiningdate:joinDate,phonenumber:homePhone,contractenddate:joinDate,emergencyphone:emPhone,emailaddrss:email,dateofbirth:dob,manager:manager,totalsalary:totalSalary,basic:basic,housing:housing,transportation:transportation,other:other,updatedby:profile.role,updatedtime:new Date().toJSON()})).then(response=>{
                console.log(response.data);
                if(response.data.success===true){
                    swal("Updated!",response.data.message,"success").then(value=>{
                        history.goBack();
                    })
                }
            }).catch(error=>{

            })
        }
    }
    return(
        <>
        <CRow>
            <CCol xs="12" md="12" className="mb-4">
            <CForm >
                <CCard>
                    <CCardHeader><h3>Edit Employee</h3></CCardHeader>
                    <CCardBody>
                        <CTabs>
                            <CNav variant="tabs">
                                <CNavItem>
                                    <CNavLink>Personal Info</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink>Employment Detail</CNavLink>
                                </CNavItem>
                            </CNav>
                            <CTabContent>
                                <CTabPane>
                                    <hr/>
                                    <CRow>
                                        <CCol xs="12" md="12">
                                            <CCard>
                                                <CCardHeader><h5>Personal Info</h5></CCardHeader>
                                                <CCardBody>
                                                    <CRow>
                                                        <CCol>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="firstName">First Name *</CLabel>
                                                                <CInput onChange={(event)=>setFirstName(event.target.value)} value={firstName} name="firstName" id="firstName" placeholder="First Name" required/>
                                                                {firstNameError!==undefined && <p className="text-danger">{firstNameError}</p>}
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="lastName">Last Name</CLabel>
                                                                <CInput onChange={(event)=>setLastName(event.target.value)} value={lastName} name="lastName" id="lastName" placeholder="Last Name" />
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="gender">Gender *</CLabel>
                                                                <CSelect value={gender} onChange={(event)=>setGender(event.target.value)} name="gender" id="gender" required>
                                                                    <option value="-1">Gender</option>
                                                                    <option value="male">Male</option>
                                                                    <option value="female">Female</option>
                                                                    <option value="other">Other</option>
                                                                </CSelect>
                                                                {genderError!==undefined && <p className="text-danger">{genderError}</p>}
                                                            </CFormGroup>
                                                        </CCol>
                                                        <CCol>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="dob">Date Of Birth *</CLabel>
                                                                <CInput onChange={(event)=>setDob(event.target.value)} value={dob} type="date" id="dob" name="dob" required/>
                                                                {dobError!==undefined && <p className="text-danger">{dobError}</p>}
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="Marital">Marital Status *</CLabel>
                                                                <CSelect value={maritalstatus} onChange={(event)=>setMaritalStatus(event.target.value)} name="Marital" id="Marital" required>
                                                                    <option value="-1">Marital Status</option>
                                                                    <option value="single">Single</option>
                                                                    <option value="married">Married</option>
                                                                    <option value="divorced">Divorced</option>
                                                                    <option value="widowed">Widowed</option>
                                                                    <option value="other">Other</option>
                                                                </CSelect>
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="Nationality">Nationality *</CLabel>
                                                                <CSelect value={nationality} onChange={(event)=>setNationality(event.target.value)} name="Nationality" id="Nationality" required>
                                                                    <option value="-1">Nationality</option>
                                                                    {nationalities!=null && Array.from(nationalities).map((item)=>(<option key={item.id} value={item.id}>{item.name}</option>))}
                                                                </CSelect>
                                                                {nationalityError!==undefined && <p className="text-danger">{nationalityError}</p>}
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="Country">Country of Residence *</CLabel>
                                                                <CSelect value={country} onChange={(event)=>setCountry(event.target.value)} name="Country" id="Country" required>
                                                                    <option value="-1">Country of Residence</option>
                                                                    {countries.map((item)=>(<option key={item.name} value={item.name}>{item.name}</option>))}
                                                                </CSelect>
                                                                {countryError!==undefined && <p className="text-danger">{countryError}</p>}
                                                            </CFormGroup>
                                                        </CCol>
                                                    </CRow>
                                                </CCardBody>
                                            </CCard>
                                        </CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol>
                                            <CCard>
                                                <CCardHeader><h5>Personal Contact Info</h5></CCardHeader>
                                                <CCardBody>
                                                    <CRow>
                                                        <CCol>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="email">Email</CLabel>
                                                                <CInput onChange={(event)=>setEmail(event.target.value)} value={email} type="email" id="email" name="email" placeholder="Personal Email" />
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="homephone">Home Phone Number</CLabel>
                                                                <CInput onChange={(event)=>setHomePhone(event.target.value)} value={homePhone} type="text" id="homephone" name="homephone" placeholder="Home Phone Number" />
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="nf-emphone">Emergency Phone Number</CLabel>
                                                                <CInput onChange={(event)=>setEmPhone(event.target.value)} value={emPhone} type="text" id="nf-emphone" name="nf-emphone" placeholder="Emergency Phone Number" />
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="address">Address</CLabel>
                                                                <CTextarea onChange={(event)=>setAddress(event.target.value)} value={address} type="text" id="address" name="address" placeholder="Address" />
                                                            </CFormGroup>
                                                        </CCol>
                                                    </CRow>
                                                </CCardBody>
                                            </CCard>
                                        </CCol>
                                        <CCol>
                                            <CCard>
                                                <CCardHeader><h5>Work Contact Info</h5></CCardHeader>
                                                <CCardBody>
                                                   
                                                    <CRow>
                                                        <CCol>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="workemail">Work Email</CLabel>
                                                                <CInput onChange={(event)=>setWorkEmail(event.target.value)} value={workemail} type="email" id="workemail" name="workemail" placeholder="Work Email" />
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="workphone">Work Phone Number</CLabel>
                                                                <CInput onChange={(event)=>setWorkPhone(event.target.value)} value={workphone} type="email" id="workphone" name="workphone" placeholder="Work Phone" />
                                                            </CFormGroup>
                                                        </CCol>
                                                    </CRow>
                                                </CCardBody>
                                            </CCard>
                                        </CCol>
                                    </CRow>
                                </CTabPane>
                                <CTabPane>
                                    <hr/>
                                    <CRow>
                                        <CCol>
                                            <CCard>
                                                <CCardHeader>EMPLOYMENT DETAILS</CCardHeader>
                                                <CCardBody>
                                                    <CRow>
                                                        <CCol>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="nf-id">ID *</CLabel>
                                                                <CInput required onChange={(event)=>setId(event.target.value)} type="text" value={id} name="nf-id" id="nf-id" placeholder="Employee ID" required/>
                                                                {idError!==undefined && <p className="text-danger">{idError}</p>}
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="nf-date">Joined On *</CLabel>
                                                                <CInput required onChange={(event)=>setJoinDate(event.target.value)} value={joinDate} type="date" id="nf-date" name="nf-date"/>
                                                                {joinDateError!==undefined && <p className="text-danger">{joinDateError}</p>}
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="nf-type">Employment Type *</CLabel>
                                                                <select required className="selectTag" value={employmentType} onChange={(event)=>setEmploymentType(event.target.value)} id="nf-type" name="nf-type">
                                                                    <option value="-1">Select Employment Type</option>
                                                                    {employmentTypes!=null && Array.from(employmentTypes).map((type)=>(<option key={type.id} value={type.id}>{type.name}</option>)) }
                                                                </select>
                                                                {employmentTypeError!==undefined && <p className="text-danger">{employmentTypeError}</p>}
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="nf-schedule">Work Schedule</CLabel>
                                                                <select className="selectTag" value={workSchedule} onChange={(event)=>setWorkSchedule(event.target.value)} id="nf-schedule" name="nf-schedule">
                                                                    <option value="-1">Select Schedule</option>
                                                                    {schedules!=null && Array.from(schedules).map((type)=>(<option key={type.id} value={type.id}>{type.shiftname} : {type.intime} - {type.outtime}</option>)) }
                                                                </select>
                                                            </CFormGroup>
                                                        </CCol>
                                                        <CCol>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="nf-role">Job Title *</CLabel>
                                                                <CSelect onChange={(event)=>setRole(event.target.value)} value={role} id="nf-role" name="nf-role">
                                                                    <option value="-1">Select Job Title</option>
                                                                    {roles!=null && Array.from(roles).map((item)=>(<option key={item.id} value={item.id}>{item.name}</option>))}
                                                                </CSelect>
                                                                {roleError!==undefined && <p className="text-danger">{roleError}</p>}
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="department">Department *</CLabel>
                                                                <CSelect required onChange={(event)=>setDepartment(event.target.value)}value={department} name="department" id="department">
                                                                    <option value="-1">Select Job Title</option>
                                                                    {departments!=null && Array.from(departments).map((item)=>(<option key={item.id} value={item.id}>{item.name}</option>))}
                                                                </CSelect>
                                                                {departmentError!==undefined && <p className="text-danger">{departmentError}</p>}
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="nf-manager">Manager</CLabel>
                                                                <CSelect onChange={(event)=>setManager(event.target.value)} value={manager} id="nf-manager" name="nf-manager">
                                                                    <option value="-1">Select Manager</option>
                                                                    {managers!=null && Array.from(managers).map((item)=>(<option key={item.id} value={item.id}>{item.name}</option>))}
                                                                </CSelect>
                                                                {managerError!==undefined && <p className="text-danger">{managerError}</p>}
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="education">Level Of Education</CLabel>
                                                                <select className="selectTag" onChange={(event)=>setEducation(event.target.value)} value={education} id="education" name="education">
                                                                    <option value="-1">Education Levels</option>
                                                                    {educationLevels!=null && Array.from(educationLevels).map((item)=>(<option key={item.id} value={item.id}>{item.name}</option>))}
                                                                </select>
                                                                {educationError!==undefined && <p className="text-danger">{educationError}</p>}
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="education">Description Of Education</CLabel>
                                                                <CTextarea value={educationDescription} onChange={(event)=>setEducationDescription(event.target.value)} name="education" id="education" />                                                                </CFormGroup>
                                                        </CCol>
                                                    </CRow>
                                                </CCardBody>
                                            </CCard>
                                        </CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol>
                                            <CCard>
                                                <CCardHeader><h5>Salary Package</h5></CCardHeader>
                                                <CCardBody>
                                                    <CRow>
                                                        <CCol>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="total">Total Salary *</CLabel>
                                                                <CInput required onChange={(event)=>setSalary(event.target.value)} type="number" value={totalSalary} name="total" id="total"/>
                                                                {totalSalaryError!==undefined && <p className="text-danger">{totalSalaryError}</p>}
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="housing">Housing *</CLabel>
                                                                <CInput readOnly onChange={(event)=>setHousing(event.target.value)} type="number" value={housing} name="housing" id="housing"/>
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="basic">Basic *</CLabel>
                                                                <CInput readOnly value={basic} onChange={(event)=>setBasic(event.target.value)} className="selectTag" name="basic" id="basic" type="number"/>
                                                            </CFormGroup>
                                                        </CCol>
                                                        <CCol>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="transportation">Transportation</CLabel>
                                                                <CInput readOnly value={transportation} onChange={(event)=>setTransportation(event.target.value)} type="number" name="transportation" id="transportation"/>
                                                            </CFormGroup>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="other">Other Allowance</CLabel>
                                                                <CInput readOnly value={other} onChange={(event)=>setOther(event.target.value)} type="number" name="other" id="other"/>
                                                            </CFormGroup>
                                                        </CCol>
                                                    </CRow>
                                                </CCardBody>
                                            </CCard>
                                        </CCol>
                                    </CRow>
                                </CTabPane>
                            </CTabContent>
                        </CTabs>
                        
                    </CCardBody>
                    <CCardFooter><CButton type="button" onClick={handle_submit} size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton onClick={reset_form} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton></CCardFooter>
                </CCard>
                </CForm>
            </CCol>
        </CRow>
        </>
    )
}

export default EditEmployee;