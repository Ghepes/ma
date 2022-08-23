import { CCard, CCardHeader, CRow,CCol, CCardBody, CCardFooter, CSelect, CLabel,CButton } from '@coreui/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import swal from 'sweetalert';
import { API } from '../../../Config';
import './Privillege.css'
var str2bool = (value) => {
    if (value && typeof value === "string") {
         if (value.toLowerCase() === "true") return true;
         if (value.toLowerCase() === "false") return false;
    }
    return value;
 }
const Privillege =()=>{
    const [modules,setModules]=useState([]);
    const [urls,setURLS]=useState([]);
    const [role,setRole]=useState(-1);
    const [roles,setRoles]=useState("");
    const [count,setCount]=useState(0);
    const [t,i18n]=useTranslation();
    const [all1,setAll1]=useState(false);
    const [all2,setAll2]=useState(false); 
    const [all3,setAll3]=useState(false);
    const [all4,setAll4]=useState(false);
    const [all5,setAll5]=useState(false);
    const [all6,setAll6]=useState(false); 
    const [all7,setAll7]=useState(false);
    const [all8,setAll8]=useState(false);
    const [all9,setAll9]=useState(false);
    const [all10,setAll10]=useState(false);
    const [all11,setAll11]=useState(false);
    const [all12,setAll12]=useState(false); 
    const [all13,setAll13]=useState(false);
    const [all14,setAll14]=useState(false);
    const [all15,setAll15]=useState(false); 
    const [all16,setAll16]=useState(false);
    const [all17,setAll17]=useState(false); 
    const [all18,setAll18]=useState(false);
    const [all19,setAll19]=useState(false); 
    const [all20,setAll20]=useState(false);
    const [all21,setAll21]=useState(false);
    const [all22,setAll22]=useState(false); 
    const [all23,setAll23]=useState(false);
    const [all24,setAll24]=useState(false);
    const [all25,setAll25]=useState(false);
    const [all26,setAll26]=useState(false);
    const [all27,setAll27]=useState(false);
    const [all28,setAll28]=useState(false); 
    const [all29,setAll29]=useState(false);
    const [all30,setAll30]=useState(false);
    const [all31,setAll31]=useState(false);
    const [all32,setAll32]=useState(false);
    const [all33,setAll33]=useState(false);
    const [all34,setAll34]=useState(false);

    const [view1,setView1]=useState(false);
    const [view2,setView2]=useState(false);
    const [view3,setView3]=useState(false);
    const [view4,setView4]=useState(false);
    const [view5,setView5]=useState(false);
    const [view6,setView6]=useState(false);
    const [view7,setView7]=useState(false);
    const [view8,setView8]=useState(false);
    const [view9,setView9]=useState(false);
    const [view10,setView10]=useState(false);
    const [view11,setView11]=useState(false);
    const [view12,setView12]=useState(false);
    const [view13,setView13]=useState(false);
    const [view14,setView14]=useState(false);
    const [view15,setView15]=useState(false);
    const [view16,setView16]=useState(false);
    const [view17,setView17]=useState(false);
    const [view18,setView18]=useState(false);
    const [view19,setView19]=useState(false);
    const [view20,setView20]=useState(false);
    const [view21,setView21]=useState(false);
    const [view22,setView22]=useState(false);
    const [view23,setView23]=useState(false);
    const [view24,setView24]=useState(false);
    const [view25,setView25]=useState(false);
    const [view26,setView26]=useState(false);
    const [view27,setView27]=useState(false);
    const [view28,setView28]=useState(false);
    const [view29,setView29]=useState(false);
    const [view30,setView30]=useState(false);
    const [view31,setView31]=useState(false);
    const [view32,setView32]=useState(false);
    const [view33,setView33]=useState(false);
    const [view34,setView34]=useState(false);

    const [add1,setAdd1]=useState(false);
    const [add2,setAdd2]=useState(false);
    const [add3,setAdd3]=useState(false);
    const [add4,setAdd4]=useState(false);
    const [add5,setAdd5]=useState(false);
    const [add6,setAdd6]=useState(false);
    const [add7,setAdd7]=useState(false);
    const [add8,setAdd8]=useState(false);
    const [add9,setAdd9]=useState(false);
    const [add10,setAdd10]=useState(false);
    const [add11,setAdd11]=useState(false);
    const [add12,setAdd12]=useState(false);
    const [add13,setAdd13]=useState(false);
    const [add14,setAdd14]=useState(false);
    const [add15,setAdd15]=useState(false);
    const [add16,setAdd16]=useState(false);
    const [add17,setAdd17]=useState(false);
    const [add18,setAdd18]=useState(false);
    const [add19,setAdd19]=useState(false);
    const [add20,setAdd20]=useState(false);
    const [add21,setAdd21]=useState(false);
    const [add22,setAdd22]=useState(false);
    const [add23,setAdd23]=useState(false);
    const [add24,setAdd24]=useState(false);
    const [add25,setAdd25]=useState(false);
    const [add26,setAdd26]=useState(false);
    const [add27,setAdd27]=useState(false);
    const [add28,setAdd28]=useState(false);
    const [add29,setAdd29]=useState(false);
    const [add30,setAdd30]=useState(false);
    const [add31,setAdd31]=useState(false);
    const [add32,setAdd32]=useState(false);
    const [add33,setAdd33]=useState(false);
    const [add34,setAdd34]=useState(false);

    const [edit1,setEdit1]=useState(false);
    const [edit2,setEdit2]=useState(false); 
    const [edit3,setEdit3]=useState(false);
    const [edit4,setEdit4]=useState(false);
    const [edit5,setEdit5]=useState(false);
    const [edit6,setEdit6]=useState(false); 
    const [edit7,setEdit7]=useState(false);
    const [edit8,setEdit8]=useState(false);
    const [edit9,setEdit9]=useState(false);
    const [edit10,setEdit10]=useState(false);
    const [edit11,setEdit11]=useState(false);
    const [edit12,setEdit12]=useState(false); 
    const [edit13,setEdit13]=useState(false);
    const [edit14,setEdit14]=useState(false);
    const [edit15,setEdit15]=useState(false); 
    const [edit16,setEdit16]=useState(false);
    const [edit17,setEdit17]=useState(false); 
    const [edit18,setEdit18]=useState(false);
    const [edit19,setEdit19]=useState(false); 
    const [edit20,setEdit20]=useState(false);
    const [edit21,setEdit21]=useState(false);
    const [edit22,setEdit22]=useState(false); 
    const [edit23,setEdit23]=useState(false);
    const [edit24,setEdit24]=useState(false);
    const [edit25,setEdit25]=useState(false);
    const [edit26,setEdit26]=useState(false);
    const [edit27,setEdit27]=useState(false);
    const [edit28,setEdit28]=useState(false); 
    const [edit29,setEdit29]=useState(false);
    const [edit30,setEdit30]=useState(false);
    const [edit31,setEdit31]=useState(false);
    const [edit32,setEdit32]=useState(false);
    const [edit33,setEdit33]=useState(false);
    const [edit34,setEdit34]=useState(false);

    const [delete1,setDelete1]=useState(false);
    const [delete2,setDelete2]=useState(false);
    const [delete3,setDelete3]=useState(false);
    const [delete4,setDelete4]=useState(false);
    const [delete5,setDelete5]=useState(false);
    const [delete6,setDelete6]=useState(false);
    const [delete7,setDelete7]=useState(false);
    const [delete8,setDelete8]=useState(false);
    const [delete9,setDelete9]=useState(false);
    const [delete10,setDelete10]=useState(false);
    const [delete11,setDelete11]=useState(false);
    const [delete12,setDelete12]=useState(false);
    const [delete13,setDelete13]=useState(false);
    const [delete14,setDelete14]=useState(false);
    const [delete15,setDelete15]=useState(false);
    const [delete16,setDelete16]=useState(false);
    const [delete17,setDelete17]=useState(false);
    const [delete18,setDelete18]=useState(false);
    const [delete19,setDelete19]=useState(false);
    const [delete20,setDelete20]=useState(false);
    const [delete21,setDelete21]=useState(false);
    const [delete22,setDelete22]=useState(false);
    const [delete23,setDelete23]=useState(false);
    const [delete24,setDelete24]=useState(false);
    const [delete25,setDelete25]=useState(false);
    const [delete26,setDelete26]=useState(false);
    const [delete27,setDelete27]=useState(false);
    const [delete28,setDelete28]=useState(false);
    const [delete29,setDelete29]=useState(false);
    const [delete30,setDelete30]=useState(false);
    const [delete31,setDelete31]=useState(false);
    const [delete32,setDelete32]=useState(false);
    const [delete33,setDelete33]=useState(false);
    const [delete34,setDelete34]=useState(false);
    const reset_form=()=>{
        
    }
    const handle_save=()=>{
        let data_array=[];
        if(view1===true){
            data_array.push({id: 2, module_type_id: 2,url_id:get_url_id('company','GET'), url: "company", request_method: "GET"})
        }
        if(add1===true){
            data_array.push({id: 2, module_type_id: 2,url_id:get_url_id('company','POST') ,url: "company", request_method: "POST"})
        }
        if(edit1===true){
            data_array.push({id: 2, module_type_id: 2,url_id:get_url_id('company','PUT') , url: "company", request_method: "PUT"})
        }
        if(delete1===true){
            data_array.push({id: 2, module_type_id: 2,url_id:get_url_id('company','DELETE') , url: "company", request_method: "DELETE"})
        }
        if(view2===true){
            data_array.push({id: 2, module_type_id: 2,url_id:get_url_id('role','GET'), url: "role", request_method: "GET"})
        }
        if(add2===true){
            data_array.push({id: 2, module_type_id: 2,url_id:get_url_id('role','POST'), url: "role", request_method: "POST"})
        }
        if(edit2===true){
            data_array.push({id: 2, module_type_id: 2,url_id:get_url_id('role','PUT'), url: "role", request_method: "PUT"})
        }
        if(delete2===true){
            data_array.push({id: 2, module_type_id: 2,url_id:get_url_id('role','DELETE'), url: "role", request_method: "DELETE"})
        }
        if(view3===true){
            data_array.push({id: 4, module_type_id: 3, url_id: get_url_id("user","GET"), request_method: "GET"})
        }
        if(add3===true){
            data_array.push({id: 4, module_type_id: 3, url_id: get_url_id("signup","POST"), request_method: "POST"})
        }
        if(edit3==true){
            data_array.push({id: 4, module_type_id: 3, url_id: get_url_id("profileupdate","PUT"), request_method: "PUT"})
        }
        if(delete3==true){
            data_array.push({id: 4, module_type_id: 3, url_id: get_url_id("profiledelete","DELETE"), request_method: "DELETE"})
        }
        if(view4==true){
            data_array.push({id: 5, module_type_id: 4, url_id: get_url_id("nationality","GET"), request_method: "GET"})
        }
        if(add4==true){
            data_array.push({id: 5, module_type_id: 4, url_id: get_url_id("nationality","POST"), request_method: "POST"})
        }
        if(edit4==true){
            data_array.push({id: 5, module_type_id: 4, url_id: get_url_id("nationality","PUT"), request_method: "PUT"})
        }
        if(delete4==true){
            data_array.push({id: 5, module_type_id: 4, url_id: get_url_id("nationality","DELETE"), request_method: "DELETE"})
        }
        if(view5==true){
            data_array.push({id: 6, module_type_id: 4, url_id:get_url_id("salaryconfig","GET"), request_method: "GET"})
        }
        if(add5==true){
            data_array.push({id: 6, module_type_id: 4, url_id:get_url_id("salaryconfig","POST"), request_method: "POST"})
        }
        if(edit5==true){
            data_array.push({id: 6, module_type_id: 4, url_id:get_url_id("salaryconfig","PUT"), request_method: "PUT"})
        }
        if(delete5==true){
            data_array.push({id: 6, module_type_id: 4, url_id:get_url_id("salaryconfig","DELETE"), request_method: "DELETE"})
        }
        if(view6==true){
            data_array.push({id: 7, module_type_id: 4, url_id: get_url_id("leavetype","GET"), request_method: "GET"})
        }
        if(add6==true){
            data_array.push({id: 7, module_type_id: 4, url_id: get_url_id("leavetype","POST"), request_method: "POST"})
        }
        if(edit6==true){
            data_array.push({id: 7, module_type_id: 4, url_id: get_url_id("leavetype","PUT"), request_method: "PUT"})
        }
        if(delete6==true){
            data_array.push({id: 7, module_type_id: 4, url_id: get_url_id("leavetype","DELETE"), request_method: "DELETE"})
        }
        if(view33==true){
            data_array.push({id:8, module_type_id: 4, url_id:get_url_id("education","GET"), request_method: "GET"})
        }
        if(add33==true){
            data_array.push({id:8, module_type_id: 4, url_id:get_url_id("education","POST"), request_method: "POST"})
        }
        if(edit33==true){
            data_array.push({id:8, module_type_id: 4, url_id:get_url_id("education","PUT"), request_method: "PUT"})
        }
        if(delete33==true){
            data_array.push({id:8, module_type_id: 4, url_id:get_url_id("education","DELETE"), request_method: "DELETE"})
        }
        if(view34==true){
            data_array.push({id:9, module_type_id: 4, url_id:get_url_id("employmenttypes","GET"), request_method: "GET"})
        }
        if(add34==true){
            data_array.push({id:9, module_type_id: 4, url_id:get_url_id("employmenttypes","POST"), request_method: "POST"})
        }
        if(edit34==true){
            data_array.push({id:9, module_type_id: 4, url_id:get_url_id("employmenttypes","PUT"), request_method: "PUT"})
        }
        if(delete34==true){
            data_array.push({id:9, module_type_id: 4, url_id:get_url_id("employmenttypes","DELETE"), request_method: "DELETE"})
        }
        if(view12==true){
            data_array.push({id:10, module_type_id: 4, url_id: get_url_id("departments","GET"), request_method: "GET"})
        }
        if(add12==true){
            data_array.push({id:10, module_type_id: 4, url_id: get_url_id("departments","POST"), request_method: "POST"})
        }
        if(edit12==true){
            data_array.push({id:10, module_type_id: 4, url_id: get_url_id("departments","PUT"), request_method: "PUT"})
        }
        if(delete12==true){
            data_array.push({id:10, module_type_id: 4, url_id: get_url_id("departments","DELETE"), request_method: "DELETE"})
        }
        if(view7==true){
            data_array.push({id: 11, module_type_id: 4, url_id: get_url_id("insurancerenew","GET"), request_method: "GET"})
        }
        if(add7==true){
            data_array.push({id: 11, module_type_id: 4, url_id: get_url_id("insurancerenew","POST"), request_method: "POST"})
        }
        if(edit7==true){
            data_array.push({id: 11, module_type_id: 4, url_id: get_url_id("insurancerenew","PUT"), request_method: "PUT"})
        }
        if(delete7==true){
            data_array.push({id: 11, module_type_id: 4, url_id: get_url_id("insurancerenew","DELETE"), request_method: "DELETE"})
        }
        if(view8==true){
            data_array.push({id:12, module_type_id: 4, url_id:get_url_id("companyrole","GET"), request_method: "GET"})
        }
        if(add8==true){
            data_array.push({id:12, module_type_id: 4, url_id:get_url_id("companyrole","POST"), request_method: "POST"})
        }
        if(edit8==true){
            data_array.push({id:12, module_type_id: 4, url_id:get_url_id("companyrole","PUT"), request_method: "PUT"})
        }
        if(delete8==true){
            data_array.push({id:12, module_type_id: 4, url_id:get_url_id("companyrole","DELETE"), request_method: "DELETE"})
        }
        if(view9==true){
            data_array.push({id:13, module_type_id: 4, url_id: get_url_id("holiday","GET"), request_method: "GET"})
        }
        if(add9==true){
            data_array.push({id:13, module_type_id: 4, url_id: get_url_id("holiday","POST"), request_method: "POST"})
        }
        if(edit9==true){
            data_array.push({id:13, module_type_id: 4, url_id: get_url_id("holiday","PUT"), request_method: "PUT"})
        }
        if(delete9==true){
            data_array.push({id:13, module_type_id: 4, url_id: get_url_id("holiday","DELETE"), request_method: "DELETE"})
        }
        if(view10==true){
            data_array.push({id:14, module_type_id: 4, url_id: get_url_id("timeschedule","GET"), request_method: "GET"})
        }
        if(add10==true){
            data_array.push({id:14, module_type_id: 4, url_id: get_url_id("timeschedule","POST"), request_method: "POST"})
        }
        if(edit10==true){
            data_array.push({id:14, module_type_id: 4, url_id: get_url_id("timeschedule","PUT"), request_method: "PUT"})
        }
        if(delete10==true){
            data_array.push({id:14, module_type_id: 4, url_id: get_url_id("timeschedule","DELETE"), request_method: "DELETE"})
        }
        if(view11==true){
            data_array.push({id:15, module_type_id: 4, url_id: get_url_id("branch","GET"), request_method: "GET"})
        }
        if(add11==true){
            data_array.push({id:15, module_type_id: 4, url_id: get_url_id("branch","POST"), request_method: "POST"})
        }
        if(edit11==true){
            data_array.push({id:15, module_type_id: 4, url_id: get_url_id("branch","PUT"), request_method: "PUT"})
        }
        if(delete11==true){
            data_array.push({id:15, module_type_id: 4, url_id: get_url_id("branch","DELETE"), request_method: "DELETE"})
        }
        if(view13==true){
            data_array.push({id:16, module_type_id: 4, url_id: get_url_id("appraisalquestions","GET"), request_method: "GET"})
        }
        if(add13==true){
            data_array.push({id:16, module_type_id: 4, url_id: get_url_id("appraisalquestions","POST"), request_method: "POST"})
        }
        if(edit13==true){
            data_array.push({id:16, module_type_id: 4, url_id: get_url_id("appraisalquestions","PUT"), request_method: "PUT"})
        }
        if(delete13==true){
            data_array.push({id:16, module_type_id: 4, url_id: get_url_id("appraisalquestions","DELETE"), request_method: "DELETE"})
        }
        if(view14==true){
            data_array.push({id:17, module_type_id: 5, url_id: get_url_id("employeebasicinfo","GET"), request_method: "GET"})
        }
        if(add14==true){
            data_array.push({id:17, module_type_id: 5, url_id: get_url_id("employeebasicinfo","POST"), request_method: "POST"})
        }
        if(view17==true){
            data_array.push({id:19, module_type_id: 6, url_id:get_url_id ("attendance","GET"), request_method: "GET"})
        }
        if(add17==true){
            data_array.push({id:19, module_type_id: 6, url_id:get_url_id ("attendance","POST"), request_method: "POST"})
        }
        if(add18==true){
            data_array.push({id:20, module_type_id: 6, url_id: get_url_id("attendanceapproval","POST"), request_method: "POST"})
        }
        if(view19==true){
            data_array.push({id:22, module_type_id: 7, url_id: get_url_id("leavemaster","GET"), request_method: "GET"})
        }
        if(add19==true){
            data_array.push({id:22, module_type_id: 7, url_id: get_url_id("leavemaster","POST"), request_method: "POST"})
        }
        if(edit19==true){
            data_array.push({id:22, module_type_id: 7, url_id: get_url_id("leavemaster","PUT"), request_method: "PUT"})
        }
        if(delete19==true){
            data_array.push({id:22, module_type_id: 7, url_id: get_url_id("leavemaster","DELETE"), request_method: "DELETE"})
        }
        if(all21==true){
            data_array.push({id:23, module_type_id: 7, url_id: get_url_id("leaveapproval","POST"), request_method: "POST"})
        }
        if(add22==true){
            data_array.push({id:24, module_type_id: 8, url_id: get_url_id("loan","POST"), request_method: "POST"});
        }
        if(view22==true){
            data_array.push({id:24, module_type_id: 8, url_id: get_url_id("loan","GET"), request_method: "GET"});
        }
        if(edit22==true){
            data_array.push({id:24, module_type_id: 8, url_id: get_url_id("loan","PUT"), request_method: "PUT"});
        }
        if(delete22==true){
            data_array.push({id:24, module_type_id: 8, url_id: get_url_id("loan","DELETE"), request_method: "DELETE"});
        }
        if(add24==true){
            data_array.push({id:26, module_type_id: 8, url_id: get_url_id("loanpproval","POST"), request_method: "POST"})
        }
        if(add25==true){
            data_array.push({id:27, module_type_id: 9, url_id: get_url_id("salaryprocess","POST"), request_method: "POST"})
        }
        if(add26==true){
            data_array.push({id:28, module_type_id: 9, url_id: get_url_id("salarylist","POST"), request_method: "POST"});
        }
        let packet={
            role_id:role,
            user_id:localStorage.getItem('userid'),
            createdby:JSON.parse(localStorage.getItem('profile')).id,
            createdtime:(new Date()).toISOString().replace(/T/, ' ').replace(/\..+/, ''),
            data:data_array
        }
        API.post('/api/privileged',JSON.stringify(packet)).then(response=>{
            if(response.data.success===true){
                swal("Saved!",response.data.message,"success");
            }
            else{
                
            }
        })
    }
    const get_url_id=(module,method)=>{
        let url_id="";
        urls.forEach((url)=>{
            if(url.url==module && url.request_method==method){
                url_id=url.id;
            }
        })
        return url_id;
    }
    React.useEffect(()=>{
        API.get('/api/moduleurl').then(response=>{
            console.log('module urls')
            console.log(response.data)
            setURLS(response.data.modulename);
          })
        API.get('/api/modulename').then(response=>{
            console.log('module names')
            console.log(response.data)
            var data=[];
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                //data.push(JSON.stringify({element.id:element.id});)
                data.push({"roleid":element.id,empid:element.empid,name:element.empname});
            }
            setModules(data);
        })
        API.get('/api/role').then((response)=>{
            var data=[];
            for (let index = 0; index < response.data.length; index++) {
              const element = response.data[index];
              data.push({'#':index+1,id:element.id,name:element.name,description:element.description,status:element.isactive});
            }
            setRoles(data);
          }).catch((error)=>{
            
          })
    },[count]);
    const handle_role_change=(value)=>{
        if(value==1){
            setView1(true);
            setEdit1(true);
            setAll1(true);
            setAdd1(true);
            setDelete1(true);
            setView2(true);
            setEdit2(true);
            setAll2(true);
            setAdd2(true);
            setDelete2(true);
        }
        else{
            setView1(false);
            setEdit1(false);
            setAll1(false);
            setDelete1(false);
            setView2(false);
            setEdit2(false);
            setAll2(false);
            setDelete2(false);
            setAdd1(false);
            setAdd2(false);
        }
        setRole(value);
    }
    return(
        <>
        <CRow>
            <CCol md="6">
                <CCard>
                    <CCardHeader><h3>{t("translations.Admin.Privilege.card_header")}</h3></CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol>
                            {/* <CLabel htmlFor="role_select">{t("Admin.Privilege.select_label")}</CLabel> */}
                            <CSelect value={role} onChange={(event)=>handle_role_change(event.target.value)} name="role_select" id="role_select" >
                                <option value="-1">Select Role</option>
                                {roles!==undefined && Array.from(roles).map((item)=>(<option key={item.id} value={item.id}>{item.name}</option>)) }
                            </CSelect>
                            </CCol>
                        </CRow>
                        
                    </CCardBody>
                    <CCardFooter>
                        <CButton onClick={handle_save} color="primary">Save</CButton>
                    </CCardFooter>
                </CCard>
            </CCol>
        </CRow>
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">{t("translations.Side_Nav.Dashboard")}</a>
            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">{t("translations.Side_Nav.Admin.name")}</a>
            <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">{t("translations.Side_Nav.Manage_Users.name")}</a>
            <a className="nav-link" id="v-pills-basic-tab" data-toggle="pill" href="#v-pills-basic" role="tab" aria-controls="v-pills-basic" aria-selected="false">{t("translations.Side_Nav.Basic_Data.name")}</a>
            <a className="nav-link" id="v-pills-employees-tab" data-toggle="pill" href="#v-pills-employees" role="tab" aria-controls="v-pills-employees" aria-selected="false">{t("translations.Side_Nav.Employee.name")}</a>
            <a className="nav-link" id="v-pills-self-service-tab" data-toggle="pill" href="#v-pills-self-service" role="tab" aria-controls="v-pills-self-service" aria-selected="false">{t("translations.Side_Nav.Self_Service.name")}</a>
            <a className="nav-link" id="v-pills-leave-tab" data-toggle="pill" href="#v-pills-leave" role="tab" aria-controls="v-pills-leave" aria-selected="false">{t("translations.Side_Nav.Leave.name")}</a>
            <a className="nav-link" id="v-pills-loan-tab" data-toggle="pill" href="#v-pills-loan" role="tab" aria-controls="v-pills-loan" aria-selected="false">{t("translations.Side_Nav.Loan.name")}</a>
            <a className="nav-link" id="v-pills-payroll-tab" data-toggle="pill" href="#v-pills-payroll" role="tab" aria-controls="v-pills-payroll" aria-selected="false">{t("translations.Side_Nav.Payroll.name")}</a>
            <a className="nav-link" id="v-pills-report-tab" data-toggle="pill" href="#v-pills-report" role="tab" aria-controls="v-pills-report" aria-selected="false">{t("translations.Side_Nav.Reports.name")}</a>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                <img/>
            </div>
            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <div className="card ">
                    <div className="card-status card-status-left bg-blue"></div>
                    <div className="card-header">
                        <h3 className="card-title">{t("translations.Side_Nav.Admin.name")}</h3>
                        <div className="card-options">
                            <a href="#" className="card-options-collapse" data-toggle="card-collapse">
                                <i className="fe fe-chevron-up"></i>
                            </a>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped mb-0">
                            <thead>
                                <tr>
                                    <th>{t('translations.Privilege.feature')}</th>
                                    <th>All</th>
                                    <th>View</th>
                                    <th>Add</th>
                                    <th>Edit This</th>
                                    <th>Delete This</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Create Company<input data-detlid="" type="hidden" value="101" className="allInput" id="id1"/></td>
                                    <td><input checked={all1} onChange={(event)=>{setView1(event.target.checked);setAdd1(str2bool(event.target.checked));setEdit1(str2bool(event.target.checked));setAll1(str2bool(event.target.checked));setDelete1(str2bool(event.target.checked))}} type="checkbox" className="allSel" /></td>
                                    <td><input checked={view1} onChange={(event)=>setView1(str2bool(event.target.checked))} type="checkbox" className="allSel" id="view1"/></td>
                                    <td><input checked={add1} onChange={(event)=>setAdd1(str2bool(event.target.checked))} type="checkbox" className="allSel" id="add1"/></td>
                                    <td><input checked={edit1} onChange={(event)=>setEdit1(str2bool(event.target.checked))} type="checkbox" className="allSel" id="edit1"/></td>
                                    <td><input checked={delete1} onChange={(event)=>setDelete1(str2bool(event.target.checked))} type="checkbox" className="allSel" id="delete1"/></td>
                                </tr>
                                <tr>
                                    <td>Create Roles <input data-detlid="" type="hidden" value="102" className="allInput" id="id2"/></td>
                                    <td><input checked={all2} onChange={(event)=>{setAll2(event.target.checked);setView2(event.target.checked);setEdit2(event.target.checked);setDelete2(event.target.checked);setAdd2(event.target.checked)}} type="checkbox" className="allSel" /></td>
                                    <td><input checked={view2} onChange={(event)=>setView2(event.target.checked)} type="checkbox" className="allSel" id="view2"/></td>
                                    <td><input checked={add2} onChange={(event)=>setAdd2(event.target.checked)} type="checkbox" className="allSel" id="add2"/></td>
                                    <td><input checked={edit2} onChange={(event)=>setEdit2(event.target.checked)} type="checkbox" className="allSel" id="edit2"/></td>
                                    <td><input checked={delete2} onChange={(event)=>setDelete2(event.target.checked)} type="checkbox" className="allSel" id="delete2"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                <div className="card ">
                    <div className="card-status card-status-left bg-blue"></div>
                    <div className="card-header">
                        <h3 className="card-title">Manage User</h3>
                        <div className="card-options">
                            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped mb-0">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>All</th>
                                    <th>View</th>
                                    <th>Add</th>
                                    <th>Edit This</th>
                                    <th>Delete This</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Create Users <input data-detlid="" type="hidden" value="201" className="allInput" id="id3"/></td>
                                    <td><input checked={all3} onChange={(event)=>{setAll3(event.target.checked);setView3(event.target.checked);setAdd3(event.target.checked);setDelete3(event.target.checked);setEdit3(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view3} onChange={(event)=>setView3(event.target.checked)} type="checkbox" className="allSel" id="view3"/></td>
                                    <td><input checked={add3} onChange={(event)=>setAdd3(event.target.checked)} type="checkbox" className="allSel" id="add3"/></td>
                                    <td><input checked={edit3} onChange={(event)=>setEdit3(event.target.checked)} type="checkbox" className="allSel" id="edit3"/></td>
                                    <td><input checked={delete3} onChange={(event)=>setDelete3(event.target.checked)} type="checkbox" className="allSel" id="delete3"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-basic" role="tabpanel" aria-labelledby="v-pills-basic-tab">
                <div className="card ">
                    <div className="card-status card-status-left bg-blue"></div>
                    <div className="card-header">
                        <h3 className="card-title">Basic Data</h3>
                        <div className="card-options">
                            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped mb-0">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>All</th>
                                    <th>View</th>
                                    <th>Add</th>
                                    <th>Edit This</th>
                                    <th>Delete This</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nationality <input data-detlid="" type="hidden" value="301" className="allInput" id="id4"/></td>
                                    <td><input checked={all4} onChange={(event)=>{setAll4(event.target.checked);setView4(event.target.checked);setEdit4(event.target.checked);setDelete4(event.target.checked);setAdd4(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view4} onChange={(event)=>setView4(event.target.checked)} type="checkbox" className="allSel" id="view4"/></td>
                                    <td><input checked={add4} onChange={(event)=>setAdd4(event.target.checked)} type="checkbox" className="allSel" id="add4"/></td>
                                    <td><input checked={edit4} onChange={(event)=>setEdit4(event.target.checked)} type="checkbox" className="allSel" id="edit4"/></td>
                                    <td><input checked={delete4} onChange={(event)=>setDelete4(event.target.checked)} type="checkbox" className="allSel" id="delete4"/></td>
                                </tr>
                                <tr>
                                    <td>Salary Config <input data-detlid="" type="hidden" value="302" className="allInput" id="id5"/></td>
                                    <td><input checked={all5} onChange={(event)=>{setAll5(event.target.checked);setView5(event.target.checked);setEdit5(event.target.checked);setAdd5(event.target.checked);setDelete5(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view5} onChange={(event)=>setView5(event.target.checked)} type="checkbox" className="allSel" id="view5"/></td>
                                    <td><input checked={add5} onChange={(event)=>setAdd5(event.target.checked)} type="checkbox" className="allSel" id="add5"/></td>
                                    <td><input checked={edit5} onChange={(event)=>setEdit5(event.target.checked)} type="checkbox" className="allSel" id="edit5"/></td>
                                    <td><input checked={delete5} onChange={(event)=>setDelete5(event.target.checked)} type="checkbox" className="allSel" id="delete5"/></td>
                                </tr>
                                <tr>
                                    <td>Leave Type <input data-detlid="" type="hidden" value="303" className="allInput" id="id6"/></td>
                                    <td><input checked={all6} onChange={(event)=>{setAll6(event.target.checked);setEdit6(event.target.checked);setAdd6(event.target.checked);setDelete6(event.target.checked);setView6(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view6} onChange={(event)=>setView6(event.target.checked)} type="checkbox" className="allSel" id="view6"/></td>
                                    <td><input checked={add6} onChange={(event)=>setAdd6(event.target.checked)} type="checkbox" className="allSel" id="add6"/></td>
                                    <td><input checked={edit6} onChange={(event)=>setEdit6(event.target.checked)} type="checkbox" className="allSel" id="edit6"/></td>
                                    <td><input checked={delete6} onChange={(event)=>setDelete6(event.target.checked)} type="checkbox" className="allSel" id="delete6"/></td>
                                </tr>
                                <tr>
                                    <td>Education levels <input data-detlid="" type="hidden" value="310" className="allInput" /></td>
                                    <td><input checked={all33} onChange={(event)=>{setAll33(event.target.checked);setEdit33(event.target.checked);setDelete33(event.target.checked);setAdd33(event.target.checked);setView33(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view33} onChange={(event)=>setView33(event.target.checked)} type="checkbox" className="allSel" /></td>
                                    <td><input checked={add33} onChange={(event)=>setAdd33(event.target.checked)} type="checkbox" className="allSel" /></td>
                                    <td><input checked={edit33} onChange={(event)=>setEdit33(event.target.checked)} type="checkbox" className="allSel" /></td>
                                    <td><input checked={delete33} onChange={(event)=>setDelete33(event.target.checked)} type="checkbox" className="allSel"/></td>
                                </tr>
                                <tr>
                                    <td>Employment Type <input data-detlid="" type="hidden" value="310" className="allInput"/></td>
                                    <td><input checked={all34} onChange={(event)=>{setAll34(event.target.checked);setEdit34(event.target.checked);setDelete34(event.target.checked);setAdd34(event.target.checked);setView34(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view34} onChange={(event)=>setView34(event.target.checked)} type="checkbox" className="allSel" /></td>
                                    <td><input checked={add34} onChange={(event)=>setAdd34(event.target.checked)} type="checkbox" className="allSel" /></td>
                                    <td><input checked={edit34} onChange={(event)=>setEdit34(event.target.checked)} type="checkbox" className="allSel" /></td>
                                    <td><input checked={delete34} onChange={(event)=>setDelete34(event.target.checked)} type="checkbox" className="allSel"/></td>
                                </tr>
                                <tr>
                                    <td>Department <input data-detlid="" type="hidden" value="310" className="allInput" id="id13"/></td>
                                    <td><input checked={all12} onChange={(event)=>{setAll12(event.target.checked);setEdit12(event.target.checked);setDelete12(event.target.checked);setAdd12(event.target.checked);setView12(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view12} onChange={(event)=>setView12(event.target.checked)} type="checkbox" className="allSel" id="view12"/></td>
                                    <td><input checked={add12} onChange={(event)=>setAdd12(event.target.checked)} type="checkbox" className="allSel" id="add12"/></td>
                                    <td><input checked={edit12} onChange={(event)=>setEdit12(event.target.checked)} type="checkbox" className="allSel" id="edit12"/></td>
                                    <td><input checked={delete12} onChange={(event)=>setDelete12(event.target.checked)} type="checkbox" className="allSel" id="delete12"/></td>
                                </tr>
                                <tr>
                                    <td>Insurance Provider <input data-detlid="" type="hidden" value="304" className="allInput" id="id7"/></td>
                                    <td><input checked={all7} onChange={(event)=>{setAll7(event.target.checked);setEdit7(event.target.checked);setDelete7(event.target.checked);setAdd7(event.target.checked);setView7(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view7} onChange={(event)=>setView7(event.target.checked)} type="checkbox" className="allSel" id="view7"/></td>
                                    <td><input checked={add7} onChange={(event)=>setAdd7(event.target.checked)} type="checkbox" className="allSel" id="add7"/></td>
                                    <td><input checked={edit7} onChange={(event)=>setEdit7(event.target.checked)} type="checkbox" className="allSel" id="edit7"/></td>
                                    <td><input checked={delete7} onChange={(event)=>setDelete7(event.target.checked)} type="checkbox" className="allSel" id="delete7"/></td>
                                </tr>
                                <tr>
                                    <td>Job Title<input data-detlid="" type="hidden" value="305" className="allInput" id="id8"/></td>
                                    <td><input checked={all8} onChange={(event)=>{setAll8(event.target.checked);setEdit8(event.target.checked);setDelete8(event.target.checked);setAdd8(event.target.checked);setView8(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view8} onChange={(event)=>setView8(event.target.checked)} type="checkbox" className="allSel" id="view8"/></td>
                                    <td><input checked={add8} onChange={(event)=>setAdd8(event.target.checked)} type="checkbox" className="allSel" id="add8"/></td>
                                    <td><input checked={edit8} onChange={(event)=>setEdit8(event.target.checked)} type="checkbox" className="allSel" id="edit8"/></td>
                                    <td><input checked={delete8} onChange={(event)=>setDelete8(event.target.checked)} type="checkbox" className="allSel" id="delete8"/></td>
                                </tr>
                                <tr>
                                    <td>Holiday<input data-detlid="" type="hidden" value="306" className="allInput" id="id9"/></td>
                                    <td><input checked={all9} onChange={(event)=>{setAll9(event.target.checked);setEdit9(event.target.checked);setDelete9(event.target.checked);setAdd9(event.target.checked);setView9(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view9} onChange={(event)=>setView9(event.target.checked)} type="checkbox" className="allSel" id="view9"/></td>
                                    <td><input checked={add9} onChange={(event)=>setAdd9(event.target.checked)} type="checkbox" className="allSel" id="add9"/></td>
                                    <td><input checked={edit9} onChange={(event)=>setEdit9(event.target.checked)} type="checkbox" className="allSel" id="edit9"/></td>
                                    <td><input checked={delete9} onChange={(event)=>setDelete9(event.target.checked)} type="checkbox" className="allSel" id="delete9"/></td>
                                </tr>
                                <tr>
                                    <td>Time Schedule<input data-detlid="" type="hidden" value="307" className="allInput" id="id10"/></td>
                                    <td><input checked={all10} onChange={(event)=>{setAll10(event.target.checked);setEdit10(event.target.checked);setDelete10(event.target.checked);setAdd10(event.target.checked);setView10(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view10} onChange={(event)=>setView10(event.target.checked)} type="checkbox" className="allSel" id="view10"/></td>
                                    <td><input checked={add10} onChange={(event)=>setAdd10(event.target.checked)} type="checkbox" className="allSel" id="add10"/></td>
                                    <td><input checked={edit10} onChange={(event)=>setEdit10(event.target.checked)} type="checkbox" className="allSel" id="edit10"/></td>
                                    <td><input checked={delete10} onChange={(event)=>setDelete10(event.target.checked)} type="checkbox" className="allSel" id="delete10"/></td>
                                </tr>
                                <tr>
                                    <td>Branch<input data-detlid="" type="hidden" value="308" className="allInput" id="id11"/></td>
                                    <td><input checked={all11} onChange={(event)=>{setAll11(event.target.checked);setEdit11(event.target.checked);setDelete11(event.target.checked);setAdd11(event.target.checked);setView11(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view11} onChange={(event)=>setView11(event.target.checked)} type="checkbox" className="allSel" id="view11"/></td>
                                    <td><input checked={add11} onChange={(event)=>setAdd11(event.target.checked)} type="checkbox" className="allSel" id="add11"/></td>
                                    <td><input checked={edit11} onChange={(event)=>setEdit11(event.target.value)} type="checkbox" className="allSel" id="edit11"/></td>
                                    <td><input checked={delete11} onChange={(event)=>setDelete11(event.target.checked)} type="checkbox" className="allSel" id="delete11"/></td>
                                </tr>
                                <tr>
                                    <td>Appraisal Questions<input data-detlid="" type="hidden" value="309" className="allInput" id="id12"/></td>
                                    <td><input checked={all13} onChange={(event)=>{setAll13(event.target.checked);setEdit13(event.target.checked);setDelete13(event.target.checked);setAdd13(event.target.checked);setView13(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view13} onChange={(event)=>setView13(event.target.checked)} type="checkbox" className="allSel" id="view13"/></td>
                                    <td><input checked={add13} onChange={(event)=>setAdd13(event.target.checked)} type="checkbox" className="allSel" id="add13"/></td>
                                    <td><input checked={edit13} onChange={(event)=>setEdit13(event.target.checked)} type="checkbox" className="allSel" id="edit13"/></td>
                                    <td><input checked={delete13} onChange={(event)=>setDelete13(event.target.checked)} type="checkbox" className="allSel" id="delete13"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-employees" role="tabpanel" aria-labelledby="v-pills-employees-tab">
                <div className="card ">
                    <div className="card-status card-status-left bg-blue"></div>
                    <div className="card-header">
                        <h3 className="card-title">Employee</h3>
                        <div className="card-options">
                            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped mb-0">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>All</th>
                                    <th>View</th>
                                    <th>Add</th>
                                    <th>Edit This</th>
                                    <th>Delete This</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Employee <input data-detlid="" type="hidden" value="401" className="allInput" id="id14"/></td>
                                    <td><input checked={all14} onChange={(event)=>{setAll14(event.target.checked);setEdit14(event.target.checked);setDelete14(event.target.checked);setAdd14(event.target.checked);setView14(event.target.checked)}} type="checkbox" className="allSel" onchange="SelectAll(this)"/></td>
                                    <td><input checked={view14} onChange={(event)=>setView14(event.target.checked)} type="checkbox" className="allSel" id="view14"/></td>
                                    <td><input checked={add14} onChange={(event)=>setAdd14(event.target.checked)} type="checkbox" className="allSel" id="add14"/></td>
                                    <td><input checked={edit14} onChange={(event)=>setEdit14(event.target.checked)} type="checkbox" className="allSel" id="edit14"/></td>
                                    <td><input checked={delete14} onChange={(event)=>setDelete14(event.target.checked)} type="checkbox" className="allSel" id="delete14"/></td>
                                </tr>
                                {/* <tr>
                                    <td>Employee Profile <input data-detlid="" type="hidden" value="402" className="allInput" id="id15"/></td>
                                    <td><input checked={all15} onChange={(event)=>{setAll15(event.target.checked);setEdit15(event.target.checked);setDelete15(event.target.checked);setAdd15(event.target.checked);setView15(event.target.checked)}} type="checkbox" className="allSel" onchange="SelectAll(this)"/></td>
                                    <td><input checked={view15} onChange={(event)=>setView15(event.target.checked)} type="checkbox" className="allSel" id="view15"/></td>
                                    <td><input checked={add15} onChange={(event)=>setAdd15(event.target.checked)} type="checkbox" className="allSel" id="add15"/></td>
                                    <td><input checked={edit15} onChange={(event)=>setEdit15(event.target.checked)} type="checkbox" className="allSel" id="edit15"/></td>
                                    <td><input checked={delete15} onChange={(event)=>setDelete15(event.target.checked)} type="checkbox" className="allSel" id="delete15"/></td>
                                </tr> */}
                                {/* <tr>
                                    <td>Approve Employee <input data-detlid="" type="hidden" value="403" className="allInput" id="id16"/></td>
                                    <td><input checked={all16} onChange={(event)=>{setAll16(event.target.checked);setEdit16(event.target.checked);setDelete16(event.target.checked);setAdd16(event.target.checked);setView16(event.target.checked)}} type="checkbox" className="allSel" onchange="SelectAll(this)"/></td>
                                    <td><input checked={view16} onChange={(event)=>setView16(event.target.checked)} type="checkbox" className="allSel" id="view16"/></td>
                                    <td><input checked={add16} onChange={(event)=>setAdd16(event.target.checked)} type="checkbox" className="allSel" id="add16"/></td>
                                    <td><input checked={edit16} onChange={(event)=>setEdit16(event.target.checked)} type="checkbox" className="allSel" id="edit16"/></td>
                                    <td><input checked={delete16} onChange={(event)=>setDelete16(event.target.checked)} type="checkbox" className="allSel" id="delete16"/></td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-self-service" role="tabpanel" aria-labelledby="v-pills-self-service">
                <div className="card ">
                    <div className="card-status card-status-left bg-blue"></div>
                    <div className="card-header">
                        <h3 className="card-title">Self Service</h3>
                        <div className="card-options"><a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a></div>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped mb-0">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>All</th>
                                    <th>View</th>
                                    <th>Add</th>
                                    <th>Edit This</th>
                                    <th>Delete This</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Entry Request <input data-detlid="" type="hidden" value="705" className="allInput" id="id19"/></td>
                                    <td><input checked={all17} onChange={(event)=>{setAll17(event.target.checked);setEdit17(event.target.checked);setDelete17(event.target.checked);setAdd17(event.target.checked);setView17(event.target.checked)}} type="checkbox" className="allSel" /></td>
                                    <td><input checked={view17} onChange={(event)=>setView17(event.target.checked)} type="checkbox" className="allSel" id="view19"/></td>
                                    <td><input checked={add17} onChange={(event)=>setAdd17(event.target.checked)} type="checkbox" className="allSel" id="add19"/></td>
                                    <td><input checked={edit17} onChange={(event)=>setEdit17(event.target.checked)} type="checkbox" className="allSel" id="edit19"/></td>
                                    <td><input checked={delete17} onChange={(event)=>setDelete17(event.target.checked)} type="checkbox" className="allSel" id="delete19"/></td>
                                </tr>
                                <tr>
                                    <td>Approve Entry Request <input data-detlid="" type="hidden" value="706" className="allInput" id="id20"/></td>
                                    {/* <td><input checked={all18} onChange={(event)=>{setAll18(event.target.checked);setEdit18(event.target.checked);setDelete18(event.target.checked);setAdd18(event.target.checked);setView18(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view18} onChange={(event)=>setView18(event.target.checked)} type="checkbox" className="allSel" id="view20"/></td> */}
                                    <td><input checked={add18} onChange={(event)=>setAdd18(event.target.checked)} type="checkbox" className="allSel" id="add20"/></td>
                                    {/* <td><input checked={edit18} onChange={(event)=>setEdit18(event.target.checked)} type="checkbox" className="allSel" id="edit20"/></td>
                                    <td><input checked={delete18} onChange={(event)=>setDelete18(event.target.checked)} type="checkbox" className="allSel" id="delete20"/></td> */}
                                </tr>
                                {/* <tr>
                                    <td>VISA Renew <input data-detlid="" type="hidden" value="701" className="allInput" id="id21"/></td>
                                    <td><input type="checkbox" className="allSel" onchange="SelectAll(this)"/></td>
                                    <td><input type="checkbox" className="allSel" id="view21"/></td>
                                    <td><input type="checkbox" className="allSel" id="add21"/></td>
                                    <td><input type="checkbox" className="allSel" id="edit21"/></td>
                                    <td><input type="checkbox" className="allSel" id="delete21"/></td>
                                </tr>
                                <tr>
                                    <td>Approve VISA Renew <input data-detlid="" type="hidden" value="702" className="allInput" id="id22"/></td>
                                    <td><input type="checkbox" className="allSel" onchange="SelectAll(this)"/></td>
                                    <td><input type="checkbox" className="allSel" id="view22"/></td>
                                    <td><input type="checkbox" className="allSel" id="add22"/></td>
                                    <td><input type="checkbox" className="allSel" id="edit22"/></td>
                                    <td><input type="checkbox" className="allSel" id="delete22"/></td>
                                </tr>
                                <tr>
                                    <td>Insurance Renew <input data-detlid="" type="hidden" value="703" className="allInput" id="id23"/></td>
                                    <td><input type="checkbox" className="allSel" onchange="SelectAll(this)"/></td>
                                    <td><input type="checkbox" className="allSel" id="view23"/></td>
                                    <td><input type="checkbox" className="allSel" id="add23"/></td>
                                    <td><input type="checkbox" className="allSel" id="edit23"/></td>
                                    <td><input type="checkbox" className="allSel" id="delete23"/></td>
                                </tr>
                                <tr>
                                    <td>Approve Insurance Renew <input data-detlid="" type="hidden" value="704" className="allInput" id="id24"/></td>
                                    <td><input type="checkbox" className="allSel" onchange="SelectAll(this)"/></td>
                                    <td><input type="checkbox" className="allSel" id="view24"/></td>
                                    <td><input type="checkbox" className="allSel" id="add24"/></td>
                                    <td><input type="checkbox" className="allSel" id="edit24"/></td>
                                    <td><input type="checkbox" className="allSel" id="delete24"/></td>
                                </tr>
                                <tr>
                                    <td>Request Resignation <input data-detlid="" type="hidden" value="707" className="allInput" id="id25"/></td>
                                    <td><input type="checkbox" className="allSel" onchange="SelectAll(this)"/></td>
                                    <td><input type="checkbox" className="allSel" id="view25"/></td>
                                    <td><input type="checkbox" className="allSel" id="add25"/></td>
                                    <td><input type="checkbox" className="allSel" id="edit25"/></td>
                                    <td><input type="checkbox" className="allSel" id="delete25"/></td>
                                </tr>
                                <tr>
                                    <td>Approve Resignation <input data-detlid="" type="hidden" value="708" className="allInput" id="id26"/></td>
                                    <td><input type="checkbox" className="allSel" onchange="SelectAll(this)"/></td>
                                    <td><input type="checkbox" className="allSel" id="view26"/></td>
                                    <td><input type="checkbox" className="allSel" id="add26"/></td>
                                    <td><input type="checkbox" className="allSel" id="edit26"/></td>
                                    <td><input type="checkbox" className="allSel" id="delete26"/></td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-leave" role="tabpanel" aria-labelledby="v-pills-leave">
                <div className="card ">
                    <div className="card-status card-status-left bg-blue"></div>
                    <div className="card-header">
                        <h3 className="card-title">Leave</h3>
                        <div className="card-options"><a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a></div>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped mb-0">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>All</th>
                                    <th>View</th>
                                    <th>Add</th>
                                    <th>Edit This</th>
                                    <th>Delete This</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Leave List <input data-detlid="" type="hidden" value="401" className="allInput" id="id27"/></td>
                                    <td><input checked={all19} onChange={(event)=>{setAll19(event.target.checked);setEdit19(event.target.checked);setDelete19(event.target.checked);setAdd19(event.target.checked);setView19(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view19} onChange={(event)=>setView19(event.target.checked)} type="checkbox" className="allSel" id="view27"/></td>
                                    <td><input checked={add19} onChange={(event)=>setAdd19(event.target.checked)} type="checkbox" className="allSel" id="add27"/></td>
                                    <td><input checked={edit19} onChange={(event)=>setEdit19(event.target.checked)} type="checkbox" className="allSel" id="edit27"/></td>
                                    <td><input checked={delete19} onChange={(event)=>setDelete19(event.target.checked)} type="checkbox" className="allSel" id="delete27"/></td>
                                </tr>
                                {/* <tr>
                                    <td>New Leave <input data-detlid="" type="hidden" value="402" className="allInput" id="id28"/></td>
                                    <td><input checked={all20} onChange={(event)=>{setAll20(event.target.checked);setEdit20(event.target.checked);setDelete20(event.target.checked);setAdd20(event.target.checked);setView20(event.target.checked)}} type="checkbox" className="allSel" /></td>
                                    <td><input checked={view20} onChange={(event)=>setView20(event.target.checked)} type="checkbox" className="allSel" id="view28"/></td>
                                    <td><input checked={add20} onChange={(event)=>setAdd20(event.target.checked)} type="checkbox" className="allSel" id="add28"/></td>
                                    <td><input checked={edit20} onChange={(event)=>setEdit20(event.target.checked)} type="checkbox" className="allSel" id="edit28"/></td>
                                    <td><input checked={delete20} onChange={(event)=>setDelete20(event.target.checked)} type="checkbox" className="allSel" id="delete28"/></td>
                                </tr> */}
                                <tr>
                                    <td>Approve Leave <input data-detlid="" type="hidden" value="403" className="allInput" id="id29"/></td>
                                    <td><input checked={all21} onChange={(event)=>{setAll21(event.target.checked);setEdit21(event.target.checked);setDelete21(event.target.checked);setAdd21(event.target.checked);setView21(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    {/* <td><input checked={view21} onChange={(event)=>setView21(event.target.checked)} type="checkbox" className="allSel" id="view29"/></td>
                                    <td><input checked={add21} onChange={(event)=>setAdd21(event.target.checked)} type="checkbox" className="allSel" id="add29"/></td>
                                    <td><input checked={edit21} onChange={(event)=>setEdit21(event.target.checked)} type="checkbox" className="allSel" id="edit29"/></td>
                                    <td><input checked={delete21} onChange={(event)=>setDelete21(event.target.checked)} type="checkbox" className="allSel" id="delete29"/></td> */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-loan" role="tabpanel" aria-labelledby="v-pills-loan-tab">
                <div className="card ">
                    <div className="card-status card-status-left bg-blue"></div>
                    <div className="card-header">
                        <h3 className="card-title">Loan</h3>
                        <div className="card-options"><a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a></div>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped mb-0">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>All</th>
                                    <th>View</th>
                                    <th>Add</th>
                                    <th>Edit This</th>
                                    <th>Delete This</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Loan List <input data-detlid="" type="hidden" value="601" className="allInput" id="id30"/></td>
                                    <td><input checked={all22} onChange={(event)=>{setAll22(event.target.checked);setEdit22(event.target.checked);setDelete22(event.target.checked);setAdd22(event.target.checked);setView22(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view22} onChange={(event)=>setView22(event.target.checked)} type="checkbox" className="allSel" id="view30"/></td>
                                    <td><input checked={add22} onChange={(event)=>setAdd22(event.target.checked)} type="checkbox" className="allSel" id="add30"/></td>
                                    <td><input checked={edit22} onChange={(event)=>setEdit22(event.target.checked)} type="checkbox" className="allSel" id="edit30"/></td>
                                    <td><input checked={delete22} onChange={(event)=>setDelete22(event.target.checked)} type="checkbox" className="allSel" id="delete30"/></td>
                                </tr>
                                {/* <tr>
                                    <td>New Loan <input data-detlid="" type="hidden" value="602" className="allInput" id="id31"/></td>
                                    <td><input checked={all23} onChange={(event)=>{setAll23(event.target.checked);setEdit23(event.target.checked);setDelete23(event.target.checked);setAdd23(event.target.checked);setView23(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view23} onChange={(event)=>setView23(event.target.checked)} type="checkbox" className="allSel" id="view31"/></td>
                                    <td><input checked={add23} onChange={(event)=>setAdd23(event.target.checked)} type="checkbox" className="allSel" id="add31"/></td>
                                    <td><input checked={edit23} onChange={(event)=>setEdit23(event.target.checked)} type="checkbox" className="allSel" id="edit31"/></td>
                                    <td><input checked={delete23} onChange={(event)=>setDelete23(event.target.checked)} type="checkbox" className="allSel" id="delete31"/></td>
                                </tr> */}
                                <tr>
                                    <td>Approve Loan <input data-detlid="" type="hidden" value="603" className="allInput" id="id32"/></td>
                                    <td><input checked={all24} onChange={(event)=>{setAll24(event.target.checked);setEdit24(event.target.checked);setDelete24(event.target.checked);setAdd24(event.target.checked);setView24(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view24} onChange={(event)=>setView24(event.target.checked)} type="checkbox" className="allSel" id="view32"/></td>
                                    <td><input checked={add24} onChange={(event)=>setAdd24(event.target.checked)} type="checkbox" className="allSel" id="add32"/></td>
                                    <td><input checked={edit24} onChange={(event)=>setEdit24(event.target.checked)} type="checkbox" className="allSel" id="edit32"/></td>
                                    <td><input checked={delete24} onChange={(event)=>setDelete24(event.target.checked)} type="checkbox" className="allSel" id="delete32"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-payroll" role="tabpanel" aria-labelledby="v-pills-payroll-tab">
                <div className="card ">
                    <div className="card-status card-status-left bg-blue"></div>
                    <div className="card-header">
                        <h3 className="card-title">Payroll</h3>
                        <div className="card-options"><a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a></div>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped mb-0">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>All</th>
                                    <th>View</th>
                                    <th>Add</th>
                                    <th>Edit This</th>
                                    <th>Delete This</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Salary Process <input data-detlid="" type="hidden" value="801" className="allInput" id="id33"/></td>
                                    <td><input checked={all25} onChange={(event)=>{setAll25(event.target.checked);setEdit25(event.target.checked);setDelete25(event.target.checked);setAdd25(event.target.checked);setView25(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view25} onChange={(event)=>setView25(event.target.checked)} type="checkbox" className="allSel" id="view33"/></td>
                                    <td><input checked={add25} onChange={(event)=>setAdd25(event.target.checked)} type="checkbox" className="allSel" id="add33"/></td>
                                    <td><input checked={edit25} onChange={(event)=>setEdit25(event.target.checked)} type="checkbox" className="allSel" id="edit33"/></td>
                                    <td><input checked={delete25} onChange={(event)=>setDelete25(event.target.checked)} type="checkbox" className="allSel" id="delete33"/></td>
                                </tr>
                                <tr>
                                    <td>Salary List <input data-detlid="" type="hidden" value="802" className="allInput" id="id34"/></td>
                                    <td><input checked={all26} onChange={(event)=>{setAll26(event.target.checked);setEdit26(event.target.checked);setDelete26(event.target.checked);setAdd26(event.target.checked);setView26(event.target.checked)}} type="checkbox" className="allSel" /></td>
                                    <td><input checked={view26} onChange={(event)=>setView26(event.target.checked)} type="checkbox" className="allSel" id="view34"/></td>
                                    <td><input checked={add26} onChange={(event)=>setAdd26(event.target.checked)} type="checkbox" className="allSel" id="add34"/></td>
                                    <td><input checked={edit26} onChange={(event)=>setEdit26(event.target.checked)} type="checkbox" className="allSel" id="edit34"/></td>
                                    <td><input checked={delete26} onChange={(event)=>setDelete26(event.target.checked)} type="checkbox" className="allSel" id="delete34"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-report" role="tabpanel" aria-labelledby="v-pills-report-tab">
                <div className="card ">
                    <div className="card-status card-status-left bg-blue"></div>
                    <div className="card-header">
                        <h3 className="card-title">Reports</h3>
                        <div className="card-options"><a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a></div>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped mb-0">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>All</th>
                                    <th>View</th>
                                    <th>Add</th>
                                    <th>Edit This</th>
                                    <th>Delete This</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Employees <input data-detlid="" type="hidden" value="901" className="allInput" id="id35"/></td>
                                    <td><input checked={all27} onChange={(event)=>{setAll27(event.target.checked);setEdit27(event.target.checked);setDelete27(event.target.checked);setAdd27(event.target.checked);setView27(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view27} onChange={(event)=>setView27(event.target.checked)} type="checkbox" className="allSel" id="view35"/></td>
                                    <td><input checked={add27} onChange={(event)=>setAdd27(event.target.checked)} type="checkbox" className="allSel" id="add35"/></td>
                                    <td><input checked={edit27} onChange={(event)=>setEdit27(event.target.checked)} type="checkbox" className="allSel" id="edit35"/></td>
                                    <td><input checked={delete27} onChange={(event)=>setDelete27(event.target.checked)} type="checkbox" className="allSel" id="delete35"/></td>
                                </tr>
                                <tr>
                                    <td>Loans <input data-detlid="" type="hidden" value="903" className="allInput" id="id38"/></td>
                                    <td><input checked={all28} onChange={(event)=>{setAll28(event.target.checked);setEdit28(event.target.checked);setDelete28(event.target.checked);setAdd28(event.target.checked);setView28(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view28} onChange={(event)=>setView28(event.target.checked)} type="checkbox" className="allSel" id="view38"/></td>
                                    <td><input checked={add28} onChange={(event)=>setAdd28(event.target.checked)} type="checkbox" className="allSel" id="add38"/></td>
                                    <td><input checked={edit28} onChange={(event)=>setEdit28(event.target.checked)} type="checkbox" className="allSel" id="edit38"/></td>
                                    <td><input checked={delete28} onChange={(event)=>setDelete28(event.target.checked)} type="checkbox" className="allSel" id="delete38"/></td>
                                </tr>
                                <tr>
                                    <td>Attendance<input data-detlid="" type="hidden" value="906" className="allInput" id="id41"/></td>
                                    <td><input checked={all29} onChange={(event)=>{setAll29(event.target.checked);setEdit29(event.target.checked);setDelete29(event.target.checked);setAdd29(event.target.checked);setView29(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view29} onChange={(event)=>setView29(event.target.checked)} type="checkbox" className="allSel" id="view41"/></td>
                                    <td><input checked={add29} onChange={(event)=>setAdd29(event.target.checked)} type="checkbox" className="allSel" id="add41"/></td>
                                    <td><input checked={edit29} onChange={(event)=>setEdit29(event.target.checked)} type="checkbox" className="allSel" id="edit41"/></td>
                                    <td><input checked={delete29} onChange={(event)=>setDelete29(event.target.checked)} type="checkbox" className="allSel" id="delete41"/></td>
                                </tr>
                                <tr>
                                    <td>Insurance Re-new Records <input data-detlid="" type="hidden" value="908" className="allInput" id="id43"/></td>
                                    <td><input checked={all30} onChange={(event)=>{setAll30(event.target.checked);setEdit30(event.target.checked);setDelete30(event.target.checked);setAdd30(event.target.checked);setView30(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view30} onChange={(event)=>setView30(event.target.checked)} type="checkbox" className="allSel" id="view43"/></td>
                                    <td><input checked={add30} onChange={(event)=>setAdd30(event.target.checked)} type="checkbox" className="allSel" id="add43"/></td>
                                    <td><input checked={edit30} onChange={(event)=>setEdit30(event.target.checked)} type="checkbox" className="allSel" id="edit43"/></td>
                                    <td><input checked={delete30} onChange={(event)=>setDelete30(event.target.checked)} type="checkbox" className="allSel" id="delete43"/></td>
                                </tr>
                                <tr>
                                    <td>Resignation Records <input data-detlid="" type="hidden" value="909" className="allInput" id="id44"/></td>
                                    <td><input checked={all31} onChange={(event)=>{setAll31(event.target.checked);setEdit31(event.target.checked);setDelete31(event.target.checked);setAdd31(event.target.checked);setView31(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view31} onChange={(event)=>setView31(event.target.checked)} type="checkbox" className="allSel" id="view44"/></td>
                                    <td><input checked={add31} onChange={(event)=>setAdd31(event.target.checked)} type="checkbox" className="allSel" id="add44"/></td>
                                    <td><input checked={edit31} onChange={(event)=>setEdit31(event.target.checked)} type="checkbox" className="allSel" id="edit44"/></td>
                                    <td><input checked={delete31} onChange={(event)=>setDelete31(event.target.checked)} type="checkbox" className="allSel" id="delete44"/></td>
                                </tr>
                                <tr>
                                    <td>Salaries <input data-detlid="" type="hidden" value="910" className="allInput" id="id45"/></td>
                                    <td><input checked={all32} onChange={(event)=>{setAll32(event.target.checked);setEdit32(event.target.checked);setDelete32(event.target.checked);setAdd32(event.target.checked);setView32(event.target.checked)}} type="checkbox" className="allSel"/></td>
                                    <td><input checked={view32} onChange={(event)=>setView32(event.target.checked)} type="checkbox" className="allSel" id="view45"/></td>
                                    <td><input checked={add32} onChange={(event)=>setAdd32(event.target.checked)} type="checkbox" className="allSel" id="add45"/></td>
                                    <td><input checked={edit32} onChange={(event)=>setEdit32(event.target.checked)} type="checkbox" className="allSel" id="edit45"/></td>
                                    <td><input checked={delete32} onChange={(event)=>setDelete32(event.target.checked)} type="checkbox" className="allSel" id="delete45"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Privillege;