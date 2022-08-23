import { CCol, CRow, CProgress,CWidgetProgressIcon} from '@coreui/react';
import React from 'react';
import CIcon from '@coreui/icons-react'
import {API} from '../../Config'
import { useTranslation } from 'react-i18next';
const Dashboard=()=>{
    const [employeecount,setEmployeeCount]=React.useState("");
    const [presentCount,setPresentCount]=React.useState("");
    const [absentCount,setAbsentCount]=React.useState("");
    const [leaveCount,setLeaveCount]=React.useState("");
    const [holidaysCount,setHolidaysCount]=React.useState("");
    const [totalSalaryCount,setTotalSalaryCount]=React.useState("");
    const [count,setCount]=React.useState(0);
    const [t,i18n]=useTranslation();
    React.useEffect(() => {
        API.get('/api/employeecount').then((response)=>{
            setEmployeeCount(response.data.count);
        })
        API.get('/api/present').then((response)=>{
        setPresentCount(response.data.count);
        })
        API.get('/api/absent').then((response)=>{
        setAbsentCount(response.data.count.length);
        })
        API.get('/api/leaveholidays').then((response)=>{
        setLeaveCount(response.data.count.length);
        })
        API.get('/api/holidays').then((response)=>{
            setHolidaysCount(response.data.count);
            })
        API.get('/api/totalsalary').then((response)=>{
            setTotalSalaryCount(response.data.count.gross__sum);
            })
        setCount(100);
      },[]);
    return(
        <>
        <CRow>
            <CCol sm="6" md="2">
                <CWidgetProgressIcon header={`${employeecount}`} text={t('translations.dashboard.Employee')} color="gradient-info">
                    <CIcon name="cil-people" height="36"/>
                </CWidgetProgressIcon>
            </CCol>
            <CCol sm="6" md="2">
                <CWidgetProgressIcon header={`${presentCount}`} text={t('translations.dashboard.Present')} color="gradient-success">
                    <CIcon name="cil-userFollow" height="36"/>
                </CWidgetProgressIcon>
            </CCol>
            <CCol sm="6" md="2">
                <CWidgetProgressIcon header={`${absentCount}`} text={t('translations.dashboard.Absent')} color="gradient-warning">
                    <CIcon name="cil-basket" height="36"/>
                </CWidgetProgressIcon>
            </CCol >
            <CCol sm="6" md="2">
                <CWidgetProgressIcon header={`${leaveCount}`} text={t('translations.dashboard.Leave')}>
                    <CIcon name="cil-chartPie" height="36"/>
                </CWidgetProgressIcon>
            </CCol>
            <CCol sm="6" md="2">
                <CWidgetProgressIcon header={`${holidaysCount}`} text={t('translations.dashboard.Holiday')} color="gradient-danger" progressSlot={<CProgress color="danger" size="xs" value={holidaysCount} animated className="my-3"/>}>
                    <CIcon name="cil-speedometer" height="36"/>
                </CWidgetProgressIcon>
            </CCol>
            <CCol sm="6" md="2">
                <CWidgetProgressIcon header={`${totalSalaryCount}`} text={t('translations.dashboard.Total_Salary')} color="gradient-danger" progressSlot={<CProgress color="danger" size="xs" value={totalSalaryCount} animated className="my-3"/>}>
                    <CIcon name="cil-speedometer" height="36"/>
                </CWidgetProgressIcon>
            </CCol>
        </CRow>

        </>
    )
}

export default Dashboard;