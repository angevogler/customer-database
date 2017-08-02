let superLiteral = '';
// const title = document.createElement("h1");

for (let i = 0; i < customers.results.length; i++) {

  const profiles = `

  <section>
    <div class="user-profile">
      <img class="user-photo" src=${customers.results[i].picture.large}>
      <h3 class="user-name">${customers.results[i].name.first} ${customers.results[i].name.last}</h3>
      <div class="user-email">
        ${customers.results[i].email}
      </div>
      <ul class="user-contact">
        <li>${customers.results[i].location.street}</li>
        <li>${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode}</li>
        <li>${customers.results[i].cell}</li>
      </ul>
      <div class="user-ssn">
        ${customers.results[i].id.value}
      </div>
    </div
  </section>
  `;

  superLiteral += profiles;
}
  const body = document.querySelector("body");
  body.innerHTML += `<h1 class="header">Internal Company Directory</h1>`;
  body.innerHTML += superLiteral;
