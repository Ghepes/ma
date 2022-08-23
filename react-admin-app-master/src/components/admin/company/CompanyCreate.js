import React, {useState} from 'react';
import {
    CFormGroup,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CRow,
    CCol,
    CForm,
    CInput,CInputGroup,CFormText,CInputGroupAppend,
    CLabel,CSelect,CCollapse,
    CCardFooter,
  } from '@coreui/react';
import CIcon from '@coreui/icons-react'
import swal from 'sweetalert'
import {API} from '../../../Config'
import { useTranslation } from 'react-i18next';
const get_gender=(gender)=>{
    var value="";
    switch(gender){
        case 'Male':
            value="M";break;
        case 'Female':
            value="F";break;
        case 'Others':
            value="O";break;
        default:
            value="N/A";break;
    }
    return value;
}
const CompanyCreate=()=>{
    const [t,i18n]=useTranslation();
    const [accordion,setAccordion]=useState("");
    const [code,setCode]= useState("");
    const [codeError,setCodeError]=useState("");
    const [userEmail,setUserEmail]=useState("");
    const [companyname,setCompanyName]=useState("");
    const [password,setPassword]= useState("");
    const [passwordError,setPasswordError]=useState("");
    const [confirm_password,setConfirmPassword]=useState("");
    const [confirm_password_error,setConfirmPasswordError]=useState("");
    const [title,setTitle]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [firstNameError,setFirstNameError]=useState("");
    const [email,setEmail]=useState("");
    const [emailError,setEmailError]=useState("");
    const [phone,setPhone]=useState("");
    const [phoneError,setPhoneError]=useState("");
    const [licenseName,setLicenseName]=useState("");
    const [licensenameError,setLicenseNameError]=useState("");
    const [licenseNo,setLicenseNo]=useState("");
    const [licenseNoError,setLicenseNoError]=useState("");
    const [licenseExpDate,setLicenseExpDate]=useState("");
    const [licenseexpdateError,setLicenseExpDateError]=useState("");
    const [role,setRole]=useState(-1);
    const [roles,setRoles]=useState([]);
    const [count,setCount]=useState(0);
    const [gender,setGender]=useState(-1);
    const reset_form=(e)=>{
        setCode("");
        setUserEmail("");
        setCode("");
        setCompanyName("");
        setPassword("");
        setFirstName("");
        setPassword("");
        setConfirmPassword("");
        setPasswordError("");
        setConfirmPasswordError("");
        setEmail("");
        setPhone("");
        setLicenseExpDate("");
        setLicenseName("");
        setLicenseNo("");
        setRole(-1);
        setGender(-1);
    }
    const handleValidation=()=>{
        let formIsValid=true;
        let errors=[];
        if(!code||code===""||code===undefined){
            formIsValid=false;
            setCodeError("Company code is needed!");
        }
        else{
            setCodeError("");
        }
        if(!password||password==""||password===undefined){
            formIsValid=false;
            setPasswordError("Please set a password");
        }
        else{
            setPasswordError("")
        }
        if(password!==confirm_password){
            formIsValid=false;
            setConfirmPasswordError("Please enter the same password again");
        }
        else{
            setConfirmPasswordError("");
        }
        if(!licenseName||licenseName==""||licenseName===undefined){
            formIsValid=false;
            setLicenseNameError("Enter Subscription description")
        }
        else{
            setLicenseNameError("");
        }
        if(!licenseNo||licenseNo==""||licenseNo===undefined){
            formIsValid=false;
            setLicenseNoError("Please enter subscription price");
        }
        else{
            setLicenseNoError("");
        }
        if(!licenseExpDate||licenseExpDate==""||licenseExpDate===undefined){
            formIsValid=false;
            setLicenseExpDateError("Please enter subscription ending date")
        }
        else{
            setLicenseExpDateError("")
        }
        if(!firstName||firstName==""||firstName===undefined){
            formIsValid=false;
            setFirstNameError("Please enter first name");
        }
        else{
            setFirstNameError("");
        }
        if(!phone||phone==""||phone===undefined||phone.length<10 || phone.length>20){
            formIsValid=false;
            setPhoneError("Please enter valid phone number")
        }
        else{
            setPhoneError("");
        }
        if(!email||email===undefined||email==""){
            formIsValid=false;
            setEmailError("Please enter valid email");
        }
        else{
            setEmailError("");
        }
        return {valid:formIsValid,errors:errors};
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

    const handle_submit=()=>{
        let result=handleValidation();
        if(result.valid===true){
            let profile=JSON.parse(localStorage.getItem("profile"))
            let data1=JSON.stringify({code:code,companyname:companyname,discreption:licenseName,price:licenseNo,expirydate:licenseExpDate,emails:email,licensename:licenseName,licenseno:licenseNo,licenseexpdate:licenseExpDate,createdby:profile.role.toString(),createdtime:(new Date()).toISOString().slice(0, 19).replace("T", " "),profile:{email:email,password:password,first_name:firstName,last_name:lastName,phone_number:phone,title:title,age:"100",address:"Demo address",gender:get_gender(gender),role:parseInt(role)}})
            console.log(data1);
            API.post('/api/company',data1).then((response)=>{
                console.log(response.data)
                if(response.data.success===true){
                    reset_form();
                    swal("Created!", "A new Company has been created", "success");
                }
                if(response.data.success===false){
                    swal("Failed!", response.data.message, "error");
                }
            }).catch((error)=>{
                swal("Failed!", error.message, "error");
            })
            var data2=JSON.stringify({company:localStorage.getItem('company_id'),email:email,password:password,profile:{first_name:firstName,last_name:lastName,phone_number:phone,title:title,age:"100",address:"",gender:get_gender(gender),role:role.toString()}});
            console.log(data2)
            // API.post('/api/signup',data2).then((response)=>{
            //     console.log(response.data);
            //     if(response.data.success===true){
            //         reset_form();
            //         swal("Created!",response.data.message,"success");
            //     }
            //     else if(response.data.success==='false'){
            //         swal("Failed",response.data.message,"error");
            //     }
            // }).catch(error=>{
            //     console.log(error);
            // })
        }
        
    }
    const check_company_code=(code)=>{
        API.get('/api/validation/companycode/'+code+'/').then(response=>{
            console.log(response.data);
            if(response.data.success===true){
                swal("Valid!","Continue creating company with this Code","success");
            }
            else if(response.data.success===false){
                swal("Invalid!","Please change the code","error");
            }
        }).catch(error=>{

        })
    }
    const check_user_email=(email)=>{
        API.get('/api/validation/companycode/'+code+'/').then(response=>{
            console.log(response.data);
            if(response.data.success===true){
                swal("Valid!","Continue creating user with this Email","success");
            }
            else if(response.data.success===false){
                swal("Invalid!","Please change the Email","error");
            }
        }).catch(error=>{

        })
    }
    return(
        <>
        <CRow>
            <CCol xs="12" md="6">
                <CCard>
                    <CCardHeader><h3>{t('translations.Admin.Companies.Create.header')}</h3></CCardHeader>
                    <CCardBody>
                        <CForm>
                            <CRow>
                                <CCol>
                                    <CFormGroup row>
                                        <CCol>
                                            <CLabel htmlFor="text-input">{t('translations.Admin.Companies.Create.Company_Code')} *</CLabel>
                                            <CInputGroup>
                                                <CInput value={code} onChange={(event)=>setCode(event.target.value)} id="text-input" name="text-input" placeholder="Enter code for new Company.." />
                                                <CInputGroupAppend>
                                                    <CButton onClick={()=>check_company_code(code)} type="button" color="primary">Check</CButton>
                                                </CInputGroupAppend>
                                            </CInputGroup>
                                            {codeError!==undefined && <p className="text-danger">{codeError}</p>}
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row>
                                        <CCol>
                                            <CLabel htmlFor="lastname-input">{t('translations.Admin.Companies.Create.Company_Name')} *</CLabel>
                                            <CInput value={companyname} onChange={(event)=>setCompanyName(event.target.value)} type="text" id="lastname-input" name="lastname-input" placeholder="Enter Name for new Company.."/>
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row>
                                        <CCol>
                                            <CLabel htmlFor="email-input">{t('translations.Admin.Companies.Create.Email')}</CLabel>
                                            <CInput value={email} onChange={(event)=>setEmail(event.target.value)} type="email" id="email-input" name="email-input" autoComplete="email" placeholder="Enter new company's email"/>
                                        </CCol>
                                    </CFormGroup>
                                    <CCard>
                                        <div id="accordion">
                                            <CCardHeader>
                                                <CButton block color="link" className="text-left m-0 p-0" onClick={() => setAccordion(accordion === 0 ? null : 0)}>
                                                    <h5>{t('translations.Admin.Companies.Create.Subscription.name')}</h5>
                                                </CButton>
                                            </CCardHeader>
                                            <CCollapse show={accordion === 0}>
                                                <CCardBody>
                                                    <CRow>
                                                        <CCol>
                                                            <CFormGroup row>
                                                                <CCol>
                                                                    <CLabel htmlFor="license-name">{t('translations.Admin.Companies.Create.Subscription.Description')} *</CLabel>
                                                                    <CInput value={licenseName} onChange={(event)=>setLicenseName(event.target.value)} type="text" id="license-name" name="license-name" placeholder="Enter Subscription Description"/>
                                                                    {licensenameError!==undefined && <p className="text-danger">{licenseNoError}</p>}
                                                                </CCol>
                                                            </CFormGroup>
                                                            <CFormGroup row>
                                                                <CCol>
                                                                    <CLabel htmlFor="license-date">{t('translations.Admin.Companies.Create.Subscription.Expiry_Date')} *</CLabel>
                                                                    <CInput value={licenseExpDate} onChange={(event)=>setLicenseExpDate(event.target.value)} type="date" id="license-date" name="license-date" placeholder=""/>
                                                                    {licenseexpdateError!==undefined && <p className="text-danger">{licenseexpdateError}</p>}
                                                                </CCol>
                                                            </CFormGroup>
                                                        </CCol>
                                                        <CCol>
                                                            <CFormGroup row>
                                                                <CCol>
                                                                    <CLabel htmlFor="license-no">{t('translations.Admin.Companies.Create.Subscription.Price')} *</CLabel>
                                                                    <CInput value={licenseNo} onChange={(event)=>setLicenseNo(event.target.value)} type="number" id="license-no" name="license-no" placeholder="Enter Subscription Price"/>
                                                                    {licenseNoError!==undefined && <p className="text-danger">{licenseNoError}</p>}
                                                                </CCol>
                                                            </CFormGroup>
                                                        </CCol>
                                                    </CRow>
                                                </CCardBody>
                                            </CCollapse>
                                        </div>
                                    </CCard>
                                </CCol>
                            </CRow>
                        </CForm>
                    </CCardBody>
                    <CCardFooter>
                        <CButton onClick={handle_submit} type="button" size="sm" color="primary"><CIcon name="cil-scrubber" /> {t('translations.buttons.Submit')}</CButton> <CButton type="reset" onClick={reset_form} size="sm" color="danger"><CIcon name="cil-ban" /> {t('translations.buttons.Reset')}</CButton>
                    </CCardFooter>
                </CCard>
            </CCol>
            <CCol>
                <CCard>
                    <CCardHeader><h3>{t('translations.Admin.Companies.Create.User.name')}</h3></CCardHeader>
                    <CCardBody>
                        <CForm>
                            <CRow>
                            <CCol>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="select">{t('translations.Admin.Companies.Create.User.Select_Title')}</CLabel>
                                        <CSelect value={title} onChange={(event)=>setTitle(event.target.value)} custom name="select" id="select">
                                            <option value="-1">Select Title</option>
                                            <option value="Mr.">Mr.</option>
                                            <option value="Mrs.">Mrs.</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="password-input">{t('translations.Admin.Companies.Create.User.First_Name')} *</CLabel>
                                        <CInput value={firstName} onChange={(event)=>setFirstName(event.target.value)} type="text" id="password-input" name="password-input" placeholder="Enter First name.."/>
                                        {firstNameError!==undefined && <p className="text-danger">{firstNameError}</p>}
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="lastname-input">{t('translations.Admin.Companies.Create.User.Last_Name')}</CLabel>
                                        <CInput value={lastName} onChange={(event)=>setLastName(event.target.value)} type="text" id="lastname-input" name="lastname-input" placeholder="Enter last name.."/>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="text-input">{t('translations.Admin.Companies.Create.User.Email')} *</CLabel>
                                        <CInput value={userEmail} onChange={(event)=>setUserEmail(event.target.value)} id="text-input" name="text-input" placeholder="Enter Email for username" />
                                        {emailError!==undefined && <p className="text-danger">{emailError}</p>}
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="phone-input">{t('translations.Admin.Companies.Create.User.Phone')} *</CLabel>
                                        <CInput value={phone} onChange={(event)=>setPhone(event.target.value)} id="phone-input" name="phone-input" placeholder="Enter Phone number" />
                                        {phoneError!==undefined && <p className="text-danger">{phoneError}</p>}
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="selectRole">{t('translations.Admin.Companies.Create.User.Select_Role')}</CLabel>
                                        <CSelect value={role} onChange={(event)=>setRole(event.target.value)} name="selectRole" id="selectRole">
                                            <option value="-1">Select Job Title</option>
                                            {roles!==undefined && Array.from(roles).map((role)=>(<option key={role.id} value={role.id}>{role.name}</option>))}
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="selectRole">{t('translations.Admin.Companies.Create.User.Select_Gender')}</CLabel>
                                        <CSelect value={gender} onChange={(event)=>setGender(event.target.value)}>
                                            <option value="-1">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="password-input">{t('translations.Admin.Companies.Create.User.Password')} *</CLabel>
                                        <CInput value={password} onChange={(event)=>setPassword(event.target.value)} type="password" id="password-input" name="password-input" placeholder="Enter password"/>
                                        <CFormText className="help-block">Enter a complex password</CFormText>
                                        {passwordError!==undefined && <p className="text-danger">{passwordError}</p>}
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="pass-confirm-input">{t('translations.Admin.Companies.Create.User.Confirm_Password')} *</CLabel>
                                        <CInput value={confirm_password} onChange={(event)=>setConfirmPassword(event.target.value)} type="password" id="pass-confirm-input" name="pass-confirm-input" placeholder="Enter password again"/>
                                        <CFormText className="help-block">Enter password again</CFormText>
                                        {confirm_password_error!==undefined && <p className="text-danger">{confirm_password_error}</p>}
                                    </CCol>
                                </CFormGroup>
                            </CCol>
                            </CRow>
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
        
        </>
    )
}

export default CompanyCreate;