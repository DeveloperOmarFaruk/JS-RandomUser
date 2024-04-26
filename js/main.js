const randomUsersLoad = () => {
  fetch("https://randomuser.me/api/?results=22")
    .then((res) => res.json())
    .then((data) => displayData(data));
};
randomUsersLoad();

const displayData = (data) => {
  const userData = data.results;
  const userDiv = document.getElementById("users-card");
  for (const user of userData) {
    const div = document.createElement("div");
    div.classList.add("user-card-container");
    div.innerHTML = `
    <img class="card-imge" src="${user.picture.medium}"/>
    <h2><span class="card-title">ID:</span> ${user.id.name} ${user.id.value} </h2>
      <h4><span class="card-title">Name:</span> ${user.name.title} ${user.name.first} ${user.name.last}</h4>
      <p><span class="card-title">Gender:</span> ${user.gender} </p>
      <p><span class="card-title">Age:</span> ${user.dob.age} </p>
      <p><span class="card-title">Email:</span> ${user.email} </p>
      <p><span class="card-title">Phone:</span> ${user.cell} </p>
      <p><span class="card-title">Adress:</span> ${user.location.street.number} - ${user.location.street.name}, ${user.location.postcode}, ${user.location.city}, ${user.location.state}, ${user.location.country}  </p>

      `;
    userDiv.appendChild(div);
  }
};
