import React from 'react'
import {Link, useHistory} from 'react-router-dom';
import './Help.css'
const Help=()=>{
    return (
        <>
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a className="nav-link active" id="v-pills-dashboard-tab" data-toggle="pill" href="#v-pills-dashboard" role="tab" aria-selected="true">Dashboard</a>
            <a className="nav-link" id="v-pills-admin-tab" data-toggle="pill" href="#v-pills-admin" role="tab"  aria-selected="false">Admin</a>
            <a className="nav-link" id="v-pills-manage-users-tab" data-toggle="pill" href="#v-pills-manage-users" role="tab"  aria-selected="false">Manage Users</a>
            <a className="nav-link" id="v-pills-basic-data-tab" data-toggle="pill" href="#v-pills-basic-data" role="tab"  aria-selected="false">Basic Data</a>
            
            <a className="nav-link" id="v-pills-employee-tab" data-toggle="pill" href="#v-pills-employee" role="tab"  aria-selected="false">Employee</a>
            
            <a className="nav-link" id="v-pills-self-service-tab" data-toggle="pill" href="#v-pills-self-service" role="tab"  aria-selected="false">Self Service</a>
            <a className="nav-link" id="v-pills-leave-tab" data-toggle="pill" href="#v-pills-leave" role="tab"  aria-selected="false">Leave</a>
            
            <a className="nav-link" id="v-pills-loan-tab" data-toggle="pill" href="#v-pills-loan" role="tab"  aria-selected="false">Loan</a>
            
            <a className="nav-link" id="v-pills-payroll-tab" data-toggle="pill" href="#v-pills-payroll" role="tab"  aria-selected="false">Payroll</a>
            <a className="nav-link" id="v-pills-reports-tab" data-toggle="pill" href="#v-pills-reports" role="tab"  aria-selected="false">Reports</a>
            </div>
            <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" >
                <div className="doc">
                    <h3># Dashboard Overview</h3>
                    
                    <p>In dashboard, An admin can see a short overview of total employee, total present, absent and leave of employee, Holidays and total salary.</p>
                
                    <p>At bottom right side, there is a button for language swicther. Select a language for translation. It Also support RTL mood for arabic lagnuage.  </p>
                    
                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-admin" role="tabpanel" >
                <div className="doc">
                  <h3># Companies</h3>
                  <p>Go to Admin ->  <Link to="/dashboard/admin/companies">Companies</Link> to view all the company details. Here you can 
                  use Filter option for global search. There is a search box in every column. You can use this too for searching specific column. 
                  You can edit and delete data by using Edit and Delete button. 
                   </p>
                   <p>
                       <b>Add Company:</b> Click on the <Link to="/dashboard/admin/createcompany">ADD</Link> button to create company. It will 
                       redirect to company create page. <br/>
                    There will be a form for create new company and create new user for the new company. Fill up these two forms and click submit button. 
                    Now, you will get a new company and a user against this company.
                   </p>

                   <h3># Roles</h3>
                   <p>Go to Admin -> <Link to="/dashboard/admin/role/list">Roles</Link> to view all roles list.  Here you can 
                  use Filter option for global search. There is a search box in  every column. You can use this too for searching specific column. 
                  You can edit and delete data by using Edit and Delete button. </p>
                  <p>
                       <b>Add Role:</b> Click on the <Link to="/dashboard/admin/role/new">ADD</Link> button to create role. It will 
                       redirect to role create page. <br/>
                    There will be a form for create new role. Fill up the form and click save button to create new role. 
                   </p>
                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-manage-users" role="tabpanel" >
                <div className="doc">
                  <h3># Users</h3>
                  <p>Go to Manage Users ->  <Link to="/dashboard/manageusers/users"> Users</Link> to view all users details. Here you can 
                  use Filter option for global search. There is a search box in every column. You can use this too for searching specific column. 
                  You can edit and delete data by using Edit and Delete button. 
                   </p>
                   <p>
                       <b>Add User:</b> Click on the <Link to="/dashboard/manageusers/createuser">ADD</Link> button to create user. It will 
                       redirect to user create page. <br/>
                    There will be a form for create new user. Fill up the forms and click submit button to create new user.
                    
                   </p>
                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-basic-data" role="tabpanel" >
            <div className="doc">
                  <h3># Nationality</h3>
                  <p>Go to Basic Data ->  <Link to="/dashboard/basicdata/nationality"> Nationality</Link> to view all nationality types. Here you can 
                  use Filter option for global search. There is a search box in every column. You can use this too for searching specific column. 
                  You can edit and delete data by using Edit and Delete button. 
                   </p>
                   <p>
                       <b>Add Nationality:</b> Click on the <Link to="/dashboard/basicdata/nationalitycreate">ADD</Link> button to create nationality. It will 
                       redirect to nationality create page. <br/>
                    There will be a form for create nationality. Fill up the form and click submit button to create new nationality. 
                    Give sort order for sorting nationality. Example: For United Sates, sort order: USA
                    
                   </p>


                   <h3># Salary Configuration</h3>
                  <p>Go to Basic Data ->  <Link to="/dashboard/basicdata/salaryconfig"> Salary Config</Link> to view all salary configuration. Here you can 
                  use Filter option for global search. There is a search box in every column. You can use this too for searching specific column. 
                  You can edit and delete data by using Edit and Delete button. 
                   </p>
                   <p>
                       <b>Add Salary:</b> Click on the <Link to="/dashboard/basicdata/salaryconfigcreate">ADD</Link> button to create salary configuration. It will 
                       redirect to salary configuration create page. <br/>
                    There will be a form for create salary. Fill up the form and click submit button to create new salary. 
                                    
                   </p>

                   <h3># Leave Type</h3>
                  <p>Go to Basic Data ->  <Link to="/dashboard/basicdata/leavetypelist"> Leave Type</Link> to view all leave type. Here you can 
                  use Filter option for global search. There is a search box in every column. You can use this too for searching specific column. 
                  You can edit and delete data by using Edit and Delete button. 
                   </p>
                   <p>
                       <b>Add Leave Type:</b> Click on the <Link to="/dashboard/basicdata/leavetypecreate">ADD</Link> button to create leave type. It will 
                       redirect to leave type create page. <br/>
                    There will be a form for create leave type. Fill up the form and click submit button to create new leave. 
                                    
                   </p>

                   <h3># Education Levels</h3>
                  <p>Go to Basic Data ->  <Link to="/dashboard/basicdata/educationlevels"> Education Levels</Link> to view all education levels. Here you can 
                  use Filter option for global search. There is a search box in every column. You can use this too for searching specific column. 
                  You can edit and delete data by using Edit and Delete button. 
                   </p>
                   <p>
                       <b>Add  Education levels:</b> Click on the <Link to="/dashboard/basicdata/createeducationlevel">ADD</Link> button to create  education levels. It will 
                       redirect to  education levels create page. <br/>
                    There will be a form for create  education levels. Fill up the form and click submit button to create new leave. 
                                    
                   </p>

                   <h3># Employment Types</h3>
                  <p>Go to Basic Data ->  <Link to="/dashboard/basicdata/employeetypes"> Employment Types</Link> to view all employment types. Here you can 
                  use Filter option for global search. There is a search box in every column. You can use this too for searching specific column. 
                  You can edit and delete data by using Edit and Delete button. 
                   </p>
                   <p>
                       <b>Add  Employment Types:</b> Click on the <Link to="/dashboard/basicdata/createemployeetype">ADD</Link> button to create employment types. It will 
                       redirect to  employment types create page. <br/>
                    There will be a form for create  employment types. Fill up the form and click submit button to create new employment types. 
                                    
                   </p>

                   <h3># Departments</h3>
                  <p>Go to Basic Data ->  <Link to="/dashboard/basicdata/departments"> Departments</Link> to view all department details. Here you can 
                  use Filter option for global search. There is a search box in every column. You can use this too for searching specific column. 
                  You can edit and delete data by using Edit and Delete button. 
                   </p>
                   <p>
                       <b>Add  Department:</b> Click on the <Link to="/dashboard/basicdata/createdepartment">ADD</Link> button to create department. It will 
                       redirect to department create page. <br/>
                    There will be a form for create  department. Fill up the form and click submit button to create new department. 
                                    
                   </p>

                   <h3># Insurance Provider</h3>
                  <p>Go to Basic Data ->  <Link to="/dashboard/basicdata/insuranceprovider"> Insurance Provider</Link> to view all insurance providers details. Here you can 
                  use Filter option for global search. There is a search box in every column. You can use this too for searching specific column. 
                  You can edit and delete data by using Edit and Delete button. 
                   </p>
                   <p>
                       <b>Add  Insurance Provider:</b> Click on the <Link to="/dashboard/basicdata/insuranceprovidercreate">ADD</Link> button to create insurance provider. It will 
                       redirect to insurance provider create page. <br/>
                    There will be a form for create  insurance provider. Fill up the form and click submit button to create new insurance provider. 
                                    
                   </p>

                   <h3># Job Titles</h3>
                  <p>Go to Basic Data ->  <Link to="/dashboard/basicdata/jobtitles"> Job Titles</Link> to view all job titles details. Here you can 
                  use Filter option for global search. There is a search box in every column. You can use this too for searching specific column. 
                  You can edit and delete data by using Edit and Delete button. 
                   </p>
                   <p>
                       <b>Add  Job Titles:</b> Click on the <Link to="/dashboard/basicdata/createjobtitle">ADD</Link> button to create job titles. It will 
                       redirect to job titles create page. <br/>
                    There will be a form for create  job titles. Fill up the form and click submit button to create new job titles. 
                                    
                   </p>


                   <h3># Holiday Types</h3>
                  <p>Go to Basic Data ->  <Link to="/dashboard/basicdata/holiday"> Holiday</Link> to view all holiday types details. Here you can 
                  use Filter option for global search. There is a search box in every column. You can use this too for searching specific column. 
                  You can edit and delete data by using Edit and Delete button. 
                   </p>
                   <p>
                       <b>Add  Holiday Type:</b> Click on the <Link to="/dashboard/basicdata/holidaycreate">ADD</Link> button to create holiday types. It will 
                       redirect to holiday type create page. <br/>
                    There will be a form for create  holiday type. Fill up the form and click submit button to create new holiday type. 
                                    
                   </p>

                   <h3># Time Schedules</h3>
                  <p>Go to Basic Data ->  <Link to="/dashboard/basicdata/timeschedule"> Time Schedules</Link> to view all time schedules. Here you can 
                  use Filter option for global search. There is a search box in every column. You can use this too for searching specific column. 
                  You can edit and delete data by using Edit and Delete button. 
                   </p>
                   <p>
                       <b>Add  Time Schedule:</b> Click on the <Link to="/dashboard/basicdata/timeschedulecreate">ADD</Link> button to create time schedule. It will 
                       redirect to time schedule create page. <br/>
                    There will be a form for create  time schedule. Fill up the form and click submit button to create new time schedule. 
                                    
                   </p>

                   <h3># Branch</h3>
                  <p>Go to Basic Data ->  <Link to="/dashboard/basicdata/branches"> Branch</Link> to view all branch list. Here you can 
                  use Filter option for global search. There is a search box in every column. You can use this too for searching specific column. 
                  You can edit and delete data by using Edit and Delete button. 
                   </p>
                   <p>
                       <b>Add  Branch:</b> Click on the <Link to="/dashboard/basicdata/createbranch">ADD</Link> button to create branch. It will 
                       redirect to branch create page. <br/>
                    There will be a form for create  branch. Fill up the form and click submit button to create new branch. 
                                    
                   </p>

                   
                   <h3># Appraisal Questions</h3>
                  <p>Go to Basic Data ->  <Link to="/dashboard/basicdata/appraisalquestions"> Appraisal Questions</Link> to view all appraisal questions. Here you can 
                  use Filter option for global search. There is a search box in every column. You can use this too for searching specific column. 
                  You can edit and delete data by using Edit and Delete button. 
                   </p>
                   <p>
                       <b>Add  Question:</b> Click on the <Link to="/dashboard/basicdata/createappraisalquestion">ADD</Link> button to create question. It will 
                       redirect to question create page. <br/>
                    There will be a form for create  question. Fill up the form and click submit button to create new question. 
                                    
                   </p>




                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-employee" role="tabpanel" >
                <div className="doc">
                    <h3># Employees</h3>
                    <p>Go to Employee ->  <Link to="/dashboard/employee/list"> Employee List</Link> to view all employees details. Here you can 
                    use Filter option for global search. There is a search box in every column. You can use this too for searching specific column. 
                    You can edit and delete data by using Edit and Delete button. 
                    </p>
                    <p>
                        <b>Add  Employee:</b> Click on the <Link to="/dashboard/basicdata/createappraisalquestion">ADD</Link> button or go to Employee -> 
                        <Link to="/dashboard/basicdata/createappraisalquestion">Employee Profile </Link> to create Employee. It will 
                        redirect to Employee create page. <br/>
                       There will be three tab (Perosnal Info, Employee Details, User Details). Fill up these forms and click submit button to create new employee.

                                        
                    </p>

                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-self-service" role="tabpanel" >
                 <div className="doc">
                    <h3># Entry Request</h3>
                    <p>Go to Self Service ->  <Link to="/dashboard/selfservice/entryrequest"> Entry Request</Link> to add entry request. Here you will get a form
                    to create entry request. In the form, select Employee id. Employee Name and Job title will auto populated data depening on the employee id. Then give data time and entry type. 
                    Click submit button to save entry request.   
                    </p>
                    <p>
                        <b>Approve Entry Request:</b> Go to Self Service -> <Link to="/dashboard/selfservice/approveentryrequest">Approve Entry Request </Link> to view and approve entry request.
                        On Approval Status block, you can filter data by entry requests type, date and time. Click on the Load button to view filter data.         
                    </p>

                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-leave" role="tabpanel" >
                 <div className="doc">
                    <h3># Leaves</h3>
                    <p>Go to Leave ->  <Link to="/dashboard/leave/list"> Leave List</Link> to view all leave lists. Here you can 
                    use Filter option for global search. There is a search box in every column. You can use this too for searching specific column. 
                    You can edit and delete data by using Edit and Delete button. 
                    </p>

                    <p>
                        <b>Add New Leave:</b>Click on the <Link to="/dashboard/leave/new">ADD</Link> button or go to Leave -> 
                        <Link to="/dashboard/leave/new"> New Leave </Link> to create leave. It will 
                        redirect to leave create page. There will be a form for create  leave. Fill up the form and click submit button to create new leave. 
                    </p>

                    <h3># Approve Leave</h3>
                    <p>
                       Go to Leave -> <Link to="/dashboard/leave/approveleaves"> Approve Leave </Link> to view and approve leaves.
                        On Approval Status block, you can filter data by selecting leaves type. Click on the Load button to view filter data.     
                    You can edit and delete data by using Edit and Delete button.    
                    </p>

                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-loan" role="tabpanel" >
                 <div className="doc">
                    <h3># Loan</h3>
                    <p>Go to loan ->  <Link to="/dashboard/loan/list"> Loan List</Link> to view all loan lists. Here you can 
                    use Filter option for global search. There is a search box in every column. You can use this too for searching specific column. 
                    You can edit and delete data by using Edit and Delete button. 
                    </p>

                    <p>
                        <b>Add New loan:</b>Click on the <Link to="/dashboard/loan/new">ADD</Link> button or go to Loan -> 
                        <Link to="/dashboard/leave/new"> New loan </Link> to create loan. It will 
                        redirect to loan create page. There will be a form for create  loan. Fill up the form and click submit button to create new loan. 
                    </p>

                    <h3># Approve loan</h3>
                    <p>
                       Go to Loan -> <Link to="/dashboard/loan/approve"> Approve loan </Link> to view and approve loan.
                        On Approval Status block, you can filter data by selecting loan request type. Click on the Load button to view filter data.     
                   
                    </p>

                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-payroll" role="tabpanel" >
                 <div className="doc">
                    <h3># Salary Process</h3>
                    <p>Go to Payroll ->  <Link to="/dashboard/payroll/salaryprocess"> Salary Process</Link> to create new salary process by selecting month and year. Click submit and it will create a new salary process.
                    </p>

                    <p>
                        <b>Add New loan:</b>Click on the <Link to="/dashboard/loan/new">ADD</Link> button or go to Loan -> 
                        <Link to="/dashboard/leave/new"> New loan </Link> to create loan. It will 
                        redirect to loan create page. There will be a form for create  loan. Fill up the form and click submit button to create new loan. 
                    </p>

                    <h3># Salary List</h3>
                    <p>
                       Go to Payroll -> <Link to="/dashboard/payroll/salaries"> Salary List </Link> to view all salary lists. Here you can 
                    use Filter option for global search. c 
                    You can edit and delete data by using Edit and Delete button. 
                    </p>

                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-reports" role="tabpanel" >
                 <div className="doc">
                    <h3># Employees Report</h3>
                    <p>Go to Report ->  <Link to="/dashboard/reports/employee"> Employees</Link> to view all employees report. 
                    On Employee Report block, you can filter employee by job title, ID and employee Name. Click Load button to view filter data. 

                    </p>
                    <p>
                    There is a search box in every column. You can use this too for searching specific column.
                    </p>
                    <p>You can export report data via PDF or Excel file. There is two button at middle right side named PDF and Excel for exporting data.</p>

                    <p>
                        <strong>NOTE: The process of view and export reports is same for every report section.</strong>
                    </p>

                </div>
            </div>
            </div>
        </>
    )
}
export default Help