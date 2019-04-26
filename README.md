
# Team-Builder-BE
=======

Welcome to the Team-Builders API!

Here you can create a Project and create Roles for that project such as Frontend Developer etc. Each Role should be assigned to a project. 

### Installation. 
1. git clone into your repo
1. yarn install to download dependencies
1. send your requests to the followin endpoints


### Endpoints
 
 ~/api/register
 ~/api/login
 ~/api/projects
 ~/api/roles

### Methods 

post to '/api/register' for register
post to '/api/login' for login

get to '/api/projects' for getting all projects;
get to '/api/projects/:id for gettting projects by ID
post to '/api/projects' for adding projects
put to '/api/projects/:id' for updating projects
delete to '/api/projects/:id' for deleting projects

get to '/api/roles' for getting all roles
post to '/api/roles' for adding a new role
get to '/api/roles/:id' for getting a role by ID
put to '/api/roles/:id' for  updating a role
delete to '/api/roles/:id' for deleting a role

