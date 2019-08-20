const http = new EasyHTTP();

//get users
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then(data => console.log(data))
  .catch(err => console.log(err));
// console.log(users);

//User data
const data = {
  name: "Billy",
  username: "Billy123",
  email: "endres63@hotmail.com"
};

//post
http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

//put
http
  .put("https://jsonplaceholder.typicode.com/users/2", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

//Delete
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then(data => console.log(data))
  .catch(err => console.log(err));
