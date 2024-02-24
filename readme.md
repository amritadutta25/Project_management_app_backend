# Project Description

Projectr is a beautifully designed full-stack project manager app built for teams. <br>
The project roadmap is set in stages where we begin as a simple to-do list and gradually expand functionalities.<br>

## Roadmap

| status | version | functionality         | notes                                                                               |
| ------ | ------- | --------------------- | ----------------------------------------------------------------------------------- |
|        | v1      | simple to do list     | full CRUD                                                                           |
|        | v2      | subtasks              | projects introduced. each project get their own view and projects can hold subtasks |
|        | v3      | status                | projects and tasks can show statuses, side quest: click+drag kanban interface       |
|        | v4      | sharing               | user auth introduced. users can now share projects with other users                 |
|        | v5      | priority & assignment | users can set priorities and assign tasks to other users                            |

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

| HTTP Method | Endpoint            | Description          |
| ----------- | ------------------- | -------------------- |
| GET         | /projects           | Get all projects     |
| POST        | /projects           | Create a new project |
| PUT         | /projects/:id       | Update a project     |
| DELETE      | /projects/:id       | Delete a project     |
| GET         | /projects/tasks     | Get all tasks        |
| POST        | /projects/tasks     | Create a new task    |
| PUT         | /projects/tasks/:id | Update a task        |
| DELETE      | /projects/tasks/:id | Delete a task        |

/user/signin<br>
/user/signup<br>
<br>
/projects<br>
Shows all projects<br>
<br>
/projects/:id/<br>
Dedicated page for the selected project, showing more details<br>
