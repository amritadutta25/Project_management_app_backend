# Project Description

Projectr is a beautifully designed full-stack project manager app built for teams. <br>
The project roadmap is set in stages where we begin as a simple to-do list and gradually expand functionalities.<br>

## Deployed Site
https://project-management-app-backend-zfh0.onrender.com

## Roadmap

| status | version | functionality         | notes                                                                               |
| ------ | ------- | --------------------- | ----------------------------------------------------------------------------------- |
|        | v1      | Project managment CRUD app  | Full CRUD app. Each project get their own view and projects can hold subtasks. Subtasks will be be grouped together by the status. The prorities and assignees are shown on the each subtasks' show page. |
|        | v2 (Nice to have)| sharing               | users can now share projects with other users                                       |

## Data models

| Project Model                | Task Model                  | User Model                           |
| ---------------------------- | --------------------------- | ------------------------------------ |
| "project": String, Required  | "project": String, Required |                                      |
| "username": String, Required | "username":String, Required | "username": String, Required, Unique |
|                              |                             | "password": String, Required         |
|                              |                             | "created_on": Date.now()             |
|                              |                             | "\_id":                              |
|                              | "task": String              |                                      |
|                              | "status": String            |                                      |
|                              | "category": String          |                                      |
|                              | "guests": [String]          |                                      |
|                              | "priority": Nummber         |                                      |
|                              | "assigned_to": String       |                                      |
|                              | "department": String        |                                      |
|                              | "created_on": Date.now()    |                                      |
|                              | "finished_on": Date.now()   |                                      |
|                              | "deadline": Date            |                                      |
|                              | "\_id":                     |                                      |
| "status": String             |                             |                                      |
| "guests": [String]           |                             |                                      |
| "created_on": Date.now()     |                             |                                      |
| "finished_on": Date.now()    |                             |                                      |
| "deadline": Date             |                             |                                      |
| "\_id":                      | "projectId":                |                                      |

## Route Map

| HTTP Method | Endpoint            | Description                          |
| ----------- | ------------------- | ------------------------------------ |
| GET         | /projects           | Get all projects                     |
| POST        | /projects           | Create a new project                 |
| GET         | /projects/:id       | Show project's page and its subtasks |
| PUT         | /projects/:id       | Update a project                     |
| DELETE      | /projects/:id       | Delete a project                     |
| GET         | /projects/tasks     | Get all tasks                        |
| POST        | /projects/tasks     | Create a new task                    |
| GET         | /projects/tasks/:id | Show the task's details              |
| PUT         | /projects/tasks/:id | Update a task                        |
| DELETE      | /projects/tasks/:id | Delete a task                        |

/user/signin<br>
/user/signup<br>
<br>
/projects<br>
Shows all projects<br>
<br>
/projects/:id/<br>
Dedicated page for the selected project, showing more details<br>
