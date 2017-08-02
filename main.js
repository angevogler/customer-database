for (let i = 0; i < customers.results.length; i++) {

  const profiles = `
  <header>
    <h1>International Company Directory</h1>
  </header>

  <section>
    <div class="user-profile">
      <img class="user-photo" src=${customers.results[i].picture.large}>
      <h3 class="user-name">${customers.results[i].name.first} ${customers.results[0].name.last}</h3>
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

  const container = document.querySelector("body");
  container.innerHTML = profiles;
}

// const profiles = `
// <header>
//   <h1>International Company Directory</h1>
// </header>
//
// <section>
//   <div class="user-profile">
//     <img class="user-photo" src=${customers.results[0].picture.large}>
//     <h3 class="user-name">${customers.results[0].name.first} ${customers.results[0].name.last}</h3>
//     <div class="user-email">
//       ${customers.results[0].email}
//     </div>
//     <ul class="user-contact">
//       <li>${customers.results[0].location.street}</li>
//       <li>${customers.results[0].location.city}, ${customers.results[0].location.state} ${customers.results[0].location.postcode}</li>
//       <li>${customers.results[0].cell}</li>
//     </ul>
//     <div class="user-ssn">
//       ${customers.results[0].id.value}
//     </div>
//   </div
// </section>
// `;

// const container = document.querySelector("body");
// container.innerHTML = profiles;
