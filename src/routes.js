import React from 'react';

const Dashboard=React.lazy(()=>import('./components/dashboard/Dashboard'));
const Nationality = React.lazy(() => import('./components/basic/nationality/Nationality'));
const NationalityCreate=React.lazy(()=>import('./components/basic/nationality/NationalityCreate'));
const EditNationality = React.lazy(()=>import('./components/basic/nationality/Edit'));

const SalaryConfig=React.lazy(()=>import('./components/basic/salary/SalaryConfig'));
const SalaryConfigCreate= React.lazy(()=>import('./components/basic/salary/SalaryConfigCreate'));
const EditConfiguration = React.lazy(()=>import('./components/basic/salary/Edit'));

const EmployeeTypes=React.lazy(()=>import('./components/basic/employeetypes/View'));
const CreateEmployeeType=React.lazy(()=>import('./components/basic/employeetypes/Create'));
const EditEmpType=React.lazy(()=>import('./components/basic/employeetypes/Edit'));

const EducationLevels=React.lazy(()=>import('./components/basic/educationlevels/View'));
const CreateEducationLevel=React.lazy(()=>import('./components/basic/educationlevels/Create'));
const EditEduLevel=React.lazy(()=>import('./components/basic/educationlevels/Edit'));

const Departments=React.lazy(()=>import('./components/basic/departments/View'));
const CreateDepartment =React.lazy(()=>import('./components/basic/departments/Create'));
const EditDepartment = React.lazy(()=>import('./components/basic/departments/Edit'));

const LeaveType =React.lazy(()=>import('./components/basic/leavetype/LeaveType'));
const LeaveTypeCreate =React.lazy(()=>import('./components/basic/leavetype/LeaveTypeCreate'));
const EditLeaveType = React.lazy(()=>import('./components/basic/leavetype/Edit'));
const InsuranceProvider = React.lazy(()=>import('./components/basic/insurance/InsuranceProvider'));
const InsuranceProviderCreate = React.lazy(()=>import('./components/basic/insurance/InsuranceProviderCreate'));
const EditInsuranceProvider = React.lazy(()=>import('./components/basic/insurance/Edit'));
const Role = React.lazy(()=>import('./components/basic/role/Role'));
const RoleCreate = React.lazy(()=> import('./components/basic/role/RoleCreate'));
const EditRole = React.lazy(()=>import('./components/basic/role/Edit'));
const Holiday = React.lazy(()=>import('./components/basic/holiday/Holiday'));
const HolidayCreate= React.lazy(()=>import('./components/basic/holiday/HolidayCreate'));
const EditHoliday = React.lazy(()=>import('./components/basic/holiday/Edit'));
const TimeSchedule=React.lazy(()=>import('./components/basic/timeSchedule/TimeSchedule'));
const TimeScheduleCreate=React.lazy(()=>import('./components/basic/timeSchedule/TimeScheduleCreate'));
const EditTimeSchedule=React.lazy(()=>import('./components/basic/timeSchedule/Edit'));
const CreateUser = React.lazy(()=>import('./components/manage_users/CreateUser'));
const Users= React.lazy(()=>import('./components/manage_users/Users'));
const Branches=React.lazy(()=>import('./components/basic/branch/Branches'));
const CreateBranch= React.lazy(()=>import('./components/basic/branch/CreateBranch'));
const EditBranch = React.lazy(()=>import('./components/basic/branch/Edit'));
const AppraisalQuestions = React.lazy(()=>import('./components/basic/appraisal_questions/AppraisalQuestions'));
const CreateAppraisalQuestion=React.lazy(()=>import('./components/basic/appraisal_questions/CreateAppraisalQuestions'));
const EditQuestion = React.lazy(()=>import('./components/basic/appraisal_questions/Edit'));
const Loans= React.lazy(()=>import('./components/loan/Loans'));
const NewLoan= React.lazy(()=>import('./components/loan/NewLoan'));
const ApproveLoan=React.lazy(()=>import('./components/loan/ApproveLoan'));
const Leaves= React.lazy(()=>import('./components/leave/Leaves'));
const NewLeave= React.lazy(()=>import('./components/leave/NewLeave'));
const ApproveLeaves=React.lazy(()=>import('./components/leave/ApproveLeaves'));
const AllRoles = React.lazy(()=>import('./components/admin/role/Roles'));
const CreateRoleMaster= React.lazy(()=>import('./components/admin/role/CreateRole'));
const EditCompanyRole = React.lazy(()=>import('./components/admin/role/Edit'));
const Employees=React.lazy(()=>import('./components/employee/Employees'));
const EmployeeProfile=React.lazy(()=>import('./components/employee/EmployeeProfile'));
const EditEmployee = React.lazy(()=>import('./components/employee/Edit'));
const Rating= React.lazy(()=>import('./components/appraisal/Rating'));
const RatingList = React.lazy(()=>import('./components/appraisal/RatingList'));
const SalaryProcess = React.lazy(()=>import('./components/payroll/SalaryProcess'));
const Salaries = React.lazy(()=>import('./components/payroll/Salaries'));
const Companies=React.lazy(()=>import('./components/admin/company/Companies'));
const CompanyCreate=React.lazy(()=>import('./components/admin/company/CompanyCreate'));
const EditCompany=React.lazy(()=>import('./components/admin/company/Edit'));

const EntryRequest=React.lazy(()=>import('./components/self_services/EntryRequest'));
const ApproveEntryRequest = React.lazy(() => import('./components/self_services/ApproveEntryRequest'));
const EmployeeReport = React.lazy(()=>import('./components/reports/EmployeeReport'));
const SalaryReport = React.lazy(()=>import('./components/reports/SalaryReport'));
const LoanReport = React.lazy(()=>import('./components/reports/LoanReport'));
const CompanyReport = React.lazy(()=>import('./components/reports/CompanyReport'));
const LeaveReport = React.lazy(()=>import('./components/reports/LeaveReport'));
const AttendanceReport = React.lazy(()=>import('./components/reports/AttendanceReport'));
const Help = React.lazy(() => import('./components/help/Help'));
const Privillege = React.lazy(()=>import('./components/admin/privillege/Privillege'));
const Translation = React.lazy(()=>import('./components/translation/Translation'));
const routes = [
  // { path: '/', exact: true, name: 'Home'},
  { path: '/dashboard/admin/companies', name:"Companies", component:Companies},
  { path: '/dashboard/admin/createcompany', name:"Create Company", component:CompanyCreate},
  { path: '/dashboard/admin/edit_company', name:"Edit Company", component:EditCompany},
  { path: '/dashboard', exact:true, name:'Dashboard', component:Dashboard},
  { path: '/dashboard/basicdata/salaryconfig', name: 'Salary Config', component: SalaryConfig },
  { path: '/dashboard/basicdata/salaryconfigcreate', name: 'Salary Config Create', component: SalaryConfigCreate},
  { path: '/dashboard/basicdata/edit_salary_configuration', name:"Edit Salary Configuration", component: EditConfiguration},
  { path: '/dashboard/basicdata/leavetypelist', name: 'Leave Type List', component: LeaveType },
  { path: '/dashboard/basicdata/leavetypecreate', name: 'Leave Type Create', component: LeaveTypeCreate},
  { path: '/dashboard/basicdata/edit_leavetype', name: 'Edit Leave Type', component:EditLeaveType},
  { path: '/dashboard/basicdata/educationlevels', name: 'Education Levels', component:EducationLevels},
  { path: '/dashboard/basicdata/createeducationlevel', name:'Create Education Level', component:CreateEducationLevel},
  { path: '/dashboard/basicdata/edit_edulevel', name:"Edit Education Level", component:EditEduLevel},
  { path: '/dashboard/basicdata/departments', name:'Departments', component:Departments},
  { path: '/dashboard/basicdata/createdepartment', name:'Create Department', component:CreateDepartment},
  { path: '/dashboard/basicdata/edit_department', name:'Edit Department Details', component:EditDepartment},
  { path: '/dashboard/basicdata/insuranceprovider', name: 'Insurance Provider List', component: InsuranceProvider },
  { path: '/dashboard/basicdata/insuranceprovidercreate', name:'Create Insurance Provider', component: InsuranceProviderCreate},
  { path: '/dashboard/basicdata/edit_insurance_provider', name:'Edit Insurance Provider', component:EditInsuranceProvider},
  { path: '/dashboard/basicdata/jobtitles', name: 'Job Titles', component: Role },
  { path: '/dashboard/basicdata/createjobtitle', name:"Create Job Title", component: RoleCreate},
  { path: '/dashboard/basicdata/edit_job_title', name:"Edit Job Title", component:EditRole},
  { path: '/dashboard/basicdata/holiday', name: 'Holiday List', component: Holiday},
  { path: '/dashboard/basicdata/holidaycreate', name: 'Create Holiday', component: HolidayCreate},
  { path: '/dashboard/basicdata/edit_holiday', name:'Edit Holiday', component:EditHoliday},
  { path: '/dashboard/basicdata/timeschedule', name: 'Time Schedule', component: TimeSchedule },
  { path: '/dashboard/basicdata/timeschedulecreate', name: 'Create Time Schedule', component: TimeScheduleCreate },
  { path: '/dashboard/basicdata/edit_time_schedule', name: 'Edit Time Schedule', component:EditTimeSchedule},
  { path: '/dashboard/basicdata/nationality', name: 'Nationality', component: Nationality },
  { path: '/dashboard/basicdata/nationalitycreate', name:'Nationality Create', component: NationalityCreate},
  { path: '/dashboard/basicdata/edit_nationality', name:"Edit Nationality", component:EditNationality},
  { path: '/dashboard/manageusers/createuser', name:'Create User', component: CreateUser},
  { path: '/dashboard/manageusers/users', name:'Users', component: Users},
  { path: '/dashboard/basicdata/branches', name:'Branches', component: Branches},
  { path: '/dashboard/basicdata/employeetypes', name:'Employee Types', component:EmployeeTypes},
  { path: '/dashboard/basicdata/createemployeetype', name:'Create Employee Type', component:CreateEmployeeType},
  { path: '/dashboard/basicdata/edit_employee_type', name:'Edit Employee Type', component:EditEmpType},
  { path: '/dashboard/basicdata/createbranch', name:'Create Branch', component: CreateBranch},
  { path: '/dashboard/basicdata/edit_branch', name:'Edit Branch Details', component: EditBranch},
  { path: '/dashboard/basicdata/appraisalquestions', name:'Appraisal Questions', component:AppraisalQuestions},
  { path: '/dashboard/basicdata/createappraisalquestion', name:'Create Appraisal Question', component: CreateAppraisalQuestion},
  { path: '/dashboard/basicdata/edit_appraisal_question', name:'Edit Appraisal Question', component:EditQuestion},
  { path: '/dashboard/loan/list', name:'Loans',component:Loans},
  { path: '/dashboard/loan/new', name:'New Loan', component: NewLoan},
  { path: '/dashboard/loan/approve', name:'Approve Loan', component:ApproveLoan},
  { path: '/dashboard/leave/list', name:'Leaves',component:Leaves},
  { path: '/dashboard/leave/new', name:'Create Leave', component:NewLeave },
  { path: '/dashboard/leave/approveleaves', name:'Approve Leaves', component:ApproveLeaves},
  { path: '/dashboard/admin/role/list', name:'Roles', component:AllRoles},
  { path: '/dashboard/admin/role/new',name:'Create a Role', component:CreateRoleMaster},
  { path: '/dashboard/admin/role/edit', name:'Edit Company Role', component:EditCompanyRole},
  { path: '/dashboard/admin/privillege', name:'Privillege', component:Privillege},
  { path: '/dashboard/employee/list', name:'Employees', component:Employees},
  { path: '/dashboard/employee/profile', name:'Employee Profile', component:EmployeeProfile},
  { path: '/dashboard/employee/edit', name:'Edit Employee', component:EditEmployee},  
  { path: '/dashboard/appraisal/rating', name:'Rating', component:Rating},
  { path: '/dashboard/appraisal/ratinglist', name:'Rating List', component:RatingList},
  { path: '/dashboard/payroll/salaries', name:'Salaries', component:Salaries},
  { path: '/dashboard/payroll/salaryprocess', name:'Salary Process', component:SalaryProcess},
  { path: '/dashboard/selfservice/entryrequest', name:'Entry Request', component:EntryRequest},
  { path: '/dashboard/selfservice/approveentryrequest', name:'Approve Entry Request', component:ApproveEntryRequest},
  { path: '/dashboard/reports/employee', name:'Employee Report', component:EmployeeReport},
  { path: '/dashboard/reports/salary', name:'Salary Report', component:SalaryReport},
  { path: '/dashboard/reports/loan', name:'Loan Report', component:LoanReport},
  { path: '/dashboard/reports/company', name:'Company Report', component:CompanyReport},
  { path: '/dashboard/reports/leave', name:'Leave Report', component:LeaveReport},
  { path: '/dashboard/reports/attendance', name:'Attendance Report', component:AttendanceReport},
  { path: '/dashboard/help', name:'Help', component:Help},
  { path: '/dashboard/translation', name:'Translation',component:Translation}
];

export default routes;
