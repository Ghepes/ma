import i18n from '../../src/i18n'
export default [
  {
    _tag: 'CSidebarNavItem',
    name: i18n.t('Side_Nav.Dashboard'),
    to: '/dashboard',
    icon: 'cil-speedometer',
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Admin',
    to: '/dashboard/admin',
    icon: 'cil-drop',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Companies',
        to: '/dashboard/admin/companies',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Roles',
        to: '/dashboard/admin/role/list',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Privillege',
        to: '/dashboard/admin/privillege',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Manage Users',
    to: '/dashboard/manageusers',
    icon: 'cil-pencil',
    _children:[
      {
        _tag:'CSidebarNavItem',
        name: 'Users',
        to: '/dashboard/manageusers/users'
      }
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Basic Data',
    route: '/dashboard/basicdata',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Nationality',
        to: '/dashboard/basicdata/nationality',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Salary Config',
        to: '/dashboard/basicdata/salaryconfig',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Leave Type',
        to: '/dashboard/basicdata/leavetypelist',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Education Levels',
        to: '/dashboard/basicdata/educationlevels',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Employment Types',
        to: '/dashboard/basicdata/employeetypes',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Departments',
        to: '/dashboard/basicdata/departments',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Insurance Provider',
        to: '/dashboard/basicdata/insuranceprovider',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Job Titles',
        to: '/dashboard/basicdata/jobtitles',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Holiday',
        to: '/dashboard/basicdata/holiday',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Time Schedule',
        to: '/dashboard/basicdata/timeschedule',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Branch',
        to: '/dashboard/basicdata/branches',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Appraisal Questions',
        to: '/dashboard/basicdata/appraisalquestions',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Employee',
    route: '/dashboard/employee',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Employee List',
        to: '/dashboard/employee/list',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Employee Profile',
        to: '/dashboard/employee/profile',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Appraisal',
    to: '/appraisal',
    icon: 'cil-chart-pie',
    _children:[
      {
        _tag:'CSidebarNavItem',
        name:'Rating',
        to:'/appraisal/rating',
      },
      {
        _tag:'CSidebarNavItem',
        name:'Rating List',
        to:'/appraisal/ratinglist',
      }
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Self Service',
    route: '/dashboard/selfservice',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Entry Request',
        to: '/dashboard/selfservice/entryrequest',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Approve Entry Request',
        to: '/dashboard/selfservice/approveentryrequest',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Leave',
    route: '/dashboard/leave',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Leave List',
        to: '/dashboard/leave/list',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'New Leave',
        to: '/dashboard/leave/new',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Approve Leave',
        to: '/dashboard/leave/approveleaves',
      },
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Loan',
    to: '/dashboard/loan',
    icon: 'cil-calculator',
    badge: {
      color: 'info',
      text: 'NEW',
    },
    _children:[
      {
        _tag:'CSidebarNavItem',
        name:'Loan List',
        to:'/dashboard/loan/list'
      },
      {
        _tag:'CSidebarNavItem',
        name:'New Loan',
        to:'/dashboard/loan/new'
      },
      {
        _tag:'CSidebarNavItem',
        name:'Approve Loan',
        to:'/dashboard/loan/approve'
      }
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Payroll',
    route: '/dashboard/payroll',
    icon : 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Salary Process',
        to: '/dashboard/payroll/salaryprocess',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Salary List',
        to: '/dashboard/payroll/salaries',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Reports',
    icon: 'cil-star',
    badge: {
      color: 'secondary',
      text: 'NEW',
    },
    _children:[
      {
        _tag:'CSidebarNavItem',
        name:'Companies',
        to:'/dashboard/reports/company',
        
      },
      {
        _tag:'CSidebarNavItem',
        name:'Employees',
        to:'/dashboard/reports/employee',
        
      },
      {
        _tag:'CSidebarNavItem',
        name:'Attendance',
        to:'/dashboard/reports/attendance',
        
      },
      {
        _tag:'CSidebarNavItem',
        name:'Leaves',
        to:'/dashboard/reports/leave',
        
      },
      {
        _tag:'CSidebarNavItem',
        name:'Loans',
        to:'/dashboard/reports/loan',
        
      },
      {
        _tag:'CSidebarNavItem',
        name:'Salaries',
        to:'/dashboard/reports/salary',
      }
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Help',
    to: '/dashboard/help',
    icon: 'cil-file'
  },
  
]

