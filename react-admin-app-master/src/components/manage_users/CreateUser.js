import React, { useState } from 'react'
import {
    CRow,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CLabel,
    CFormGroup,
    CSelect,
    CCardFooter,CInputGroup,CInputGroupAppend,
    CInput,CFormText,CForm,
  } from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {API} from '../../Config'
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';
const CreateUser=()=>{
    const [id,setId]=useState("")
    const [password,setPassword]=useState("")
    const [title,setTitle]=useState(-1)
    const [firstName,setFirstName]=useState("")
    const [firstNameError,setFirstNameError]=useState("");
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [contact,setContact]=useState("")
    const [contactError,setContactError]=useState("");
    const [role,setRole]=useState(-1)
    const [gender,setGender]=useState("M");
    const [roles,setRoles]=useState("");
    const [count,setCount]=useState(0);
    const [t,i18n]=useTranslation();
    const reset_form=()=>{
        setId("");
        setPassword("");
        setTitle("Mr.");
        setFirstName("");
        setLastName("")
        setEmail("");
        setContact("");
        setRole(-1);
        setGender(-1)
        setContactError("")
    }
    React.useEffect(() => {
        API.get('/api/role').then((response)=>{
          var data=[];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            data.push({'#':index+1,id:element.id,name:element.name});
          }
          setRoles(data);
        }).catch((error)=>{
          //swal("Failed!", error.message, "error");
        })
        setCount(100);
      },[]);
    const handleValidation=()=>{
        let formIsValid=true;
        let errors=[];
        if(!contact||contact.length!=10||contact===""||contact===undefined){
            formIsValid=false;
            errors.push("Phone number can not be more than 10 digits");
            setContactError("Phone number can not be more than 10 digits");
        }
        else{
            setContactError("");
        }
        if(!firstName||firstName===""||firstName===undefined){
            setFirstNameError("Please enter first name")
            errors.push("Please enter first name");
            formIsValid=false;
        }
        else{
            setFirstNameError("");
        }
        return {valid:formIsValid,errors:errors};
    } 
    const handleSubmit=(e)=>{
        let result=handleValidation();
        if(result.valid===true){
            var data=JSON.stringify({email:email,password:password,profile:{first_name:firstName,last_name:lastName,phone_number:contact,title:title,age:"100",address:"",gender:gender,role:role.toString()}});
            console.log(data)
            API.post('/api/signup',data).then((response)=>{
                console.log(response.data);
                if(response.data.success==="True"){
                    reset_form();
                    swal("Created!",response.data.message,"success");
                }
                else if(response.data.success==='false'){
                    swal("Failed",response.data.message,"error");
                }
            }).catch(error=>{
                console.log(error);
            })
        }
    }
    const checkID=()=>{
        
        //var postData=JSON.stringify([id:])
    }
    return(
        <>
            <CRow>
                <CCol xs="12" md="6">
                    <CCard>
                        <CCardHeader><h3>{t('translations.Manage_Users.Users.Create.header')}</h3></CCardHeader>
                        <CCardBody>
                            <CForm className="form-horizontal">
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="text-input">{t('translations.Manage_Users.Users.Create.User_ID')} *</CLabel>
                                        <CInputGroup>
                                            <CInput value={id} onChange={(event)=>setId(event.target.value)} id="text-input" name="text-input" placeholder="Enter ID for new user" />
                                            <CInputGroupAppend>
                                                <CButton onClick={checkID} type="button" color="primary">{t('translations.Manage_Users.Users.Create.Check')}</CButton>
                                            </CInputGroupAppend>
                                        </CInputGroup>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="email-input">{t('translations.Manage_Users.Users.Create.Password')} *</CLabel>
                                        <CInput value={password} onChange={(event)=>setPassword(event.target.value)} type="text" id="email-input" name="email-input" placeholder="Enter password for new user"/>
                                        <CFormText className="help-block">Enter a complex password</CFormText>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="select">{t('translations.Manage_Users.Users.Create.Select_Title')}</CLabel>
                                        <CSelect value={title} onChange={(event)=>setTitle(event.target.value)} custom name="select" id="select">
                                            <option value="-1">{t('translations.Manage_Users.Users.Create.Select_Title')}</option>
                                            <option value="Mr.">Mr.</option>
                                            <option value="Mrs.">Mrs.</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="password-input">{t('translations.Manage_Users.Users.Create.First_Name')} *</CLabel>
                                        <CInput value={firstName} onChange={(event)=>setFirstName(event.target.value)} type="text" id="password-input" name="password-input" placeholder={t('translations.Manage_Users.Users.Create.First_Name_Placeholder')}/>
                                        {firstNameError!==undefined && <p className="text-danger">{firstNameError}</p>}
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="lastname-input">{t('translations.Manage_Users.Users.Create.Last_Name')}</CLabel>
                                        <CInput value={lastName} onChange={(event)=>setLastName(event.target.value)} type="text" id="lastname-input" name="lastname-input" placeholder={t('translations.Manage_Users.Users.Create.Last_Name_Placeholder')}/>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="date-input">{t('translations.Manage_Users.Users.Create.Email')}</CLabel>
                                        <CInput value={email} onChange={(event)=>setEmail(event.target.value)} type="email" id="date-input" name="date-input" placeholder={t('translations.Manage_Users.Users.Create.Email_Placeholder')} />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="selectRole">{t('translations.Manage_Users.Users.Create.Select_Role')}</CLabel>
                                        <CSelect value={role} onChange={(event)=>setRole(event.target.value)} name="selectRole" id="selectRole">
                                            <option value="-1">{t('translations.Manage_Users.Users.Create.Select_Role')}</option>
                                            {roles!==undefined && Array.from(roles).map((role)=>(<option key={role.id} value={role.id}>{role.name}</option>))}
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="selectRole">{t('translations.Manage_Users.Users.Create.Select_Gender')}</CLabel>
                                        <CSelect value={gender} onChange={(event)=>setGender(event.target.value)}>
                                            <option value="-1">{t('translations.Manage_Users.Users.Create.Select_Gender')}</option>
                                            <option value="M">Male</option>
                                            <option value="F">Female</option>
                                            <option value="O">Other</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="contact-input">{t('translations.Manage_Users.Users.Create.Phone')}</CLabel>
                                        <CInput value={contact} onChange={(event)=>setContact(event.target.value)} type="text" id="contact-input" name="contact-input" placeholder={t('translations.Manage_Users.Users.Create.Phone_Placeholder')} />
                                        {/* <CLabel><small>Please make sure this is 10 digit contact number</small></CLabel> */}
                                        {contactError!==undefined && <p className="text-danger">{contactError}</p>}
                                    </CCol>
                                </CFormGroup>
                            </CForm>
                        </CCardBody>
                        <CCardFooter>
                                <CButton type="button" onClick={handleSubmit} size="sm" color="primary"><CIcon name="cil-scrubber" /> {t('translations.buttons.Submit')}</CButton> <CButton type="reset" onClick={reset_form} size="sm" color="danger"><CIcon name="cil-ban" /> {t('translations.buttons.Reset')}</CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default CreateUser;