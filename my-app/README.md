# W09D03

## The packages used:
**npx create-react-app my-app**
**npm i axios**
**npm i dotenv**
**npm i react**
**npm i sweetalert2**
**npm i react-redux**
**npm i redux-devtools-extersion**


## Description

**the description** 
It is a link between backend and frontend and fetching the task from Mongoose Data Base, and before all that, you have to register and login to view your tags


##How to use

- **Signup:** At first, you need to register a new account
- **Login:** As a user I can login to the platform so that I can log my exit points
- **Logout:** As a user I can logout from the platform so no one else can use it
- **Add a new task** You can create as many stickers as you want
- **Edit task** You can also add if you add a task and want to modify it
- **delete task** As a user I can add players to a tournament


## React Router Routes (React App)

| Path             | Component            | Permissions                | Behavior                                                     |
| ---------------- | -------------------- | -------------------------- | ------------------------------------------------------------ |
| `/`              | SplashPage           | public `<Route>`           | Home page                                                    |
| `//resgister`    | SignupPage           | anon only `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup|
| `/login`         | LoginPage            | anon only `<AnonRoute>`    | Login form, link to signup, navigate to homepage after login |
|  `/taskdelet/id` |  delete task         |                            |                                                              |
| `/tasks`         |ShowAllTasksForTheUser| user only `<PrivateRoute>` | Edits a exit points                                          |
| `/task`          | add a task           | user only `<PrivateRoute>` | Details of a exit points to edit                             |
|`/tasksupdeta/id` | Editing the task     | user only `<PrivateRoute>` | Delete exit points                                           |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |

































![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)

