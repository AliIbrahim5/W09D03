# W09D03

## UML Daigram (frontEnd)
![Untitled Diagram-Page-5 drawio 33](https://user-images.githubusercontent.com/92247967/145352278-39dc9843-b574-40ee-afad-54ee04bd5def.png)


## The packages used:
- [React](https://reactjs.org/) A JavaScript library for building user interfaces.

- [axios](https://www.npmjs.com/package/axios) is a promise based HTTP client for the browser and node.js.

- [redux](https://www.npmjs.com/package/redux) is a predictable state container for JavaScript apps.

- [react-redux](https://www.npmjs.com/package/react-redux) is a React bindings for Redux.

- [redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension) is a debugging platform for Redux apps.

- [react-icons](https://react-icons.github.io/react-icons/) Include popular icons in your React projects easily with react-icons.

- [sweetalert2](https://sweetalert2.github.io/) A Beautiful, Responsive, Customizable, Accessible (Wai-aria) Replacement For Javascript's Popup Boxes.



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
| `/tasks`         |ShowAllTasksForTheUser| user only `<PrivateRoute>` |   Delete exit                                             |
| `/task`          | add a task           | user only `<PrivateRoute>` | Details of a exit  to edit                             |
|`/tasksupdeta/id` | Editing the task     | user only `<PrivateRoute>` | Edits a exit                                          |


## components

**login**
**register**
**task**




# Server / Backend


## Models




schema task

``` 
{
const mongoose = require("mongoose");


const task = new mongoose.Schema({
  name: { type: String },
  isDelete: { type: String, default: false },
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Taskss", task);
}
```




schema user

``` 
{
const mongoose = require("mongoose");
const user = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, require: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
});

module.exports = mongoose.model("User", user);

}
```



schema role

``` 
{
const mongoose = require("mongoose");

const role = new mongoose.Schema({
  role: { type: String },
  permossion: { type: Array },
});
module.exports = mongoose.model("Role", role);
}
```







 ## LINKEDIN:  https://www.linkedin.com/in/ali-i-alyahya/







![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)

