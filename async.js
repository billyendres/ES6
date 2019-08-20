const myFunc = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello"), 1000);
  });
  const error = true;
  if (!error) {
    const res = await promise;
    return res;
  } else {
    await Promise.reject(new Error("something went wrong"));
  }
};

myFunc()
  .then(res => console.log(res))
  .catch(err => console.log(err));

//ASYNC with fetch
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  return data;
};

getUsers().then(users => console.log(users));
