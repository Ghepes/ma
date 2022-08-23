import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {CSidebar,CSidebarBrand,CSidebarNav,CSidebarMinimizer,CSidebarNavDropdown,CSidebarNavItem} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useTranslation } from 'react-i18next'
const get_menu_item=(module_name)=>{
  let result=false;
  Array.from(JSON.parse(localStorage.getItem('menu'))).forEach((module)=>{
    if(module.module_type===module_name){
      result=true;
    }
  })
  return {result:result};
}
const get_sub_menu=(module_name,module_url)=>{
  let result=false;
  Array.from(JSON.parse(localStorage.getItem('menu'))).forEach((module)=>{
    if(module.moduleurl.url===module_name && module.moduleurl.method===module_url){
      result=true;
    }
  })
  return result;
}
const is_admin=()=>{
  if(localStorage.getItem('roleid')==1){
    return true;
  }
  return false;
}
const TheSidebar = () => {
  const [t,i18n]=useTranslation();
  const dispatch = useDispatch();
  const show = useSelector(state => state.sidebarShow)
  React.useEffect(()=>{
    console.log(JSON.parse(localStorage.getItem('menu')));
  })
  return (
    <>
    <CSidebar show={show} onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}>
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon className="c-sidebar-brand-full" name="logo-negative" height={35}/>
        <CIcon className="c-sidebar-brand-minimized" name="sygnet" height={35}/>
      </CSidebarBrand>
      <CSidebarNav>
        <CSidebarNavItem to="/dashboard" name={t('translations.Side_Nav.Dashboard')} icon="cil-speedometer"></CSidebarNavItem>
        {get_menu_item('Admin').result &&<CSidebarNavDropdown name={t('translations.Side_Nav.Admin.name')} icon="cil-drop">
          {get_sub_menu('company','GET') && <CSidebarNavItem to="/dashboard/admin/companies" name={t('translations.Side_Nav.Admin.Companies')}/>}
          {get_sub_menu('role','GET') && <CSidebarNavItem to="/dashboard/admin/role/list" name={t('translations.Side_Nav.Admin.Roles')}/>}
          {is_admin() && <CSidebarNavItem to="/dashboard/admin/privillege" name={t('translations.Side_Nav.Admin.Privilege')}/>}
        </CSidebarNavDropdown>}
        {get_menu_item('Manage Users').result && <CSidebarNavDropdown name={t('translations.Side_Nav.Manage_Users.name')} icon="cil-drop">
          {get_sub_menu('user','GET') && <CSidebarNavItem to="/dashboard/manageusers/users" name={t('translations.Side_Nav.Manage_Users.Users')} />}
        </CSidebarNavDropdown>}
        {get_menu_item('Basic Data').result && <CSidebarNavDropdown name={t('translations.Side_Nav.Basic_Data.name')} icon="cil-puzzle">
          {get_sub_menu('nationality','GET') && <CSidebarNavItem to="/dashboard/basicdata/nationality" name={t('translations.Side_Nav.Basic_Data.Nationality')}/>}
          {get_sub_menu('salaryconfig','GET') && <CSidebarNavItem to="/dashboard/basicdata/salaryconfig" name={t('translations.Side_Nav.Basic_Data.Salary_Config')}/>}
          {get_sub_menu('leavetype','GET') && <CSidebarNavItem to="/dashboard/basicdata/leavetypelist" name={t('translations.Side_Nav.Basic_Data.Leave_Type')} />}
          {get_sub_menu('education','GET') && <CSidebarNavItem to="/dashboard/basicdata/educationlevels" name={t('translations.Side_Nav.Basic_Data.Education_Levels')}/>}
          {get_sub_menu('employmenttypes','GET') && <CSidebarNavItem to="/dashboard/basicdata/employeetypes" name={t('translations.Side_Nav.Basic_Data.Employment_Types')}/>}
          {get_sub_menu('departments','GET') && <CSidebarNavItem to="/dashboard/basicdata/departments" name={t('translations.Side_Nav.Basic_Data.Departments')} />}
          {get_sub_menu('insurancerenew','GET') && <CSidebarNavItem to="/dashboard/basicdata/insuranceprovider" name={t('translations.Side_Nav.Basic_Data.Insurance_Providers')} />}
          {get_sub_menu('companyrole','GET') && <CSidebarNavItem to="/dashboard/basicdata/jobtitles" name={t('translations.Side_Nav.Basic_Data.Job_Titles')} />}
          {get_sub_menu('holiday','GET') && <CSidebarNavItem to="/dashboard/basicdata/holiday" name={t('translations.Side_Nav.Basic_Data.Holiday')} />}
          {get_sub_menu('timeschedule','GET') && <CSidebarNavItem to="/dashboard/basicdata/timeschedule" name={t('translations.Side_Nav.Basic_Data.Time_Schedules')} />}
          {get_menu_item('branch','GET') && <CSidebarNavItem to="/dashboard/basicdata/branches" name={t('translations.Side_Nav.Basic_Data.Branch')} />}
          {get_sub_menu('appraisalquestions','GET') && <CSidebarNavItem to="/dashboard/basicdata/appraisalquestions" name={t('translations.Side_Nav.Basic_Data.Appraisal_Questions')}/>}
        </CSidebarNavDropdown>}

        {get_menu_item('Employee').result && <CSidebarNavDropdown name={t('translations.Side_Nav.Employee.name')} icon="cil-cursor" >
          {get_sub_menu('employeebasicinfo','GET') && <CSidebarNavItem to="/dashboard/employee/list" name={t('translations.Side_Nav.Employee.Employee_List')} />}
          {get_sub_menu('employeebasicinfo','POST') &&<CSidebarNavItem to="/dashboard/employee/profile" name={t('translations.Side_Nav.Employee.Employee_Profile')}/>}
        </CSidebarNavDropdown>}
        {get_menu_item('Self Service').result && <CSidebarNavDropdown name={t('translations.Side_Nav.Self_Service.name')} icon="cil-star" >
          {get_sub_menu('attendance','GET') && <CSidebarNavItem to="/dashboard/selfservice/entryrequest" name={t('translations.Side_Nav.Self_Service.Entry_Request')} />}
          {get_sub_menu('attendanceapproval','GET') && <CSidebarNavItem to="/dashboard/selfservice/approveentryrequest" name={t('translations.Side_Nav.Self_Service.Approve_Entry_Request')}/>}
        </CSidebarNavDropdown>}
        {get_menu_item('Leave').result && <CSidebarNavDropdown name={t('translations.Side_Nav.Leave.name')} icon="cil-bell" >
          {get_sub_menu('leavemaster','GET') && <CSidebarNavItem to="/dashboard/leave/list" name={t('translations.Side_Nav.Leave.Leave_List')} />}
          {get_sub_menu('leavemaster','POST') && <CSidebarNavItem to="/dashboard/leave/new" name={t('translations.Side_Nav.Leave.New_Leave')}/>}
          {get_sub_menu('leaveapproval','POST') && <CSidebarNavItem to="/dashboard/leave/approveleaves" name={t('translations.Side_Nav.Leave.Approve_Leave')}/>}
        </CSidebarNavDropdown>}
        {get_menu_item('Loan').result && <CSidebarNavDropdown name={t('translations.Side_Nav.Loan.name')} icon="cil-calculator" >
          {get_sub_menu('loan','GET') &&<CSidebarNavItem to="/dashboard/loan/list" name={t('translations.Side_Nav.Loan.Loan_List')} />}
          {get_sub_menu('loan','POST') && <CSidebarNavItem to="/dashboard/loan/new" name={t('translations.Side_Nav.Loan.New_Loan')}/>}
          {get_sub_menu('loanpproval','POST') && <CSidebarNavItem to="/dashboard/loan/approve" name={t('translations.Side_Nav.Loan.Approve_Loan')}/>}
        </CSidebarNavDropdown>}
        {get_menu_item('Payroll').result && <CSidebarNavDropdown name={t('translations.Side_Nav.Payroll.name')} icon="cil-calculator" >
          {get_sub_menu('salaryprocess','POST') && <CSidebarNavItem to="/dashboard/payroll/salaryprocess" name={t('translations.Side_Nav.Payroll.Salary_Process')} />}
          {get_sub_menu('salarylist','POST') && <CSidebarNavItem to="/dashboard/payroll/salaries" name={t('translations.Side_Nav.Payroll.Salary_List')}/>}
        </CSidebarNavDropdown>}
        {JSON.parse(localStorage.getItem('profile')).role===1 && <CSidebarNavDropdown name={t('translations.Side_Nav.Reports.name')} icon="cil-file" >
          <CSidebarNavItem to="/dashboard/reports/company" name={t('translations.Side_Nav.Reports.Company')} />
          <CSidebarNavItem to="/dashboard/reports/employee" name={t('translations.Side_Nav.Reports.Employee')}/>
          <CSidebarNavItem to="/dashboard/reports/attendance" name={t('translations.Side_Nav.Reports.Attendance')} />
          <CSidebarNavItem to="/dashboard/reports/leave" name={t('translations.Side_Nav.Reports.Leave')}/>
          <CSidebarNavItem to="/dashboard/reports/loan" name={t('translations.Side_Nav.Reports.Loan')} />
          <CSidebarNavItem to="/dashboard/reports/salary" name={t('translations.Side_Nav.Reports.Salary')}/>
        </CSidebarNavDropdown>}
        <CSidebarNavItem to="/dashboard/help" name={t('translations.Side_Nav.Help.name')} icon="cill-file"/>
        {JSON.parse(localStorage.getItem('profile')).role===1 && <CSidebarNavItem to="/dashboard/translation" name={t('translations.Side_Nav.Translation.name')} icon="cill-file"/>}
        {/* <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        /> */}
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
    </>
  )
}

export default React.memo(TheSidebar)
