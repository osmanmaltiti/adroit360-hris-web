STACK USED:

- FRONTEND -:
  - Angular
  - Ngrx
  - Tailwindcss
- BACKEND -:
  - NodeJS/ExpressJS
- DATABASE
  - MongoDB

Route: '/'
Maps to the login page to the employee module

Route: '/auth_manager'
Maps to the login page to the manager module

Route: '/auth_manager/signup'
Signup page for a line manager

Route: '/employee'

- Maps to the employee module's dashboard
- Development and Performance Goal buttons opens a modal from creating new objectives
- ACTIVE OBJECTIVES
  - shows active objectives created
  - user must complete objective before submission for appraisal
  - deletes on successful submission

Route: '/employee/feedback'

- Notification icon on the navbar of the employee dashboard
- Shows appraised submission sent back by the line manager

Route: '/manager'

- Maps to the manager module's dashboard
- View Employee buttons opens a modal for viewing employees under current manager
- PENDING REVIEWS
  - shows unreviewed submission from employees
  - manager must score and rate submission
  - deletes on successful appraisal
- REVIEW HISTORY
  - shows history of all reviewed submission

Route: '/manager/review'

- page review and appraisal
