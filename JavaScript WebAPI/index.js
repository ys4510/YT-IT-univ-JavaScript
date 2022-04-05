async function callApi() {
  const res = await window.fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);
}

callApi();