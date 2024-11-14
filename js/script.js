const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Inizio con inizializzare il contenitore generale per le carte
const cardContainer = document.querySelector(".row");
// console.log(cardContainer);

// Seguo leggendo l'array dell'oggetto con cui andrò a lavorare
for (let i = 0; i < teamMembers.length; i++) {
  // salvo l'oggetto corrente in una variabile
  const curObject = teamMembers[i];
  // console.log(curObject);
  // prendo le proprietà dell'oggetto così come sono e le associo alla nuova variabile
  const { name, role, email, img } = curObject;
  // console.log(name);

  // creo una variabile in cui inserisco come valore in stringa il codice HTML con i relativi valori all'interno 
  const cardElem1 = `
          <div class="card">
            <div class="cardImg"><img src="./${img}" alt="" /></div>
            <div class="cardText">
              <span class="spanNome">${name}</span>
              <p class="spanRole">${role}</p>
              <a href="">${email}</a>
            </div>
          </div>
  `;
  // console.log(cardElem1);

// aggiungo una card ad ogni iterazione all'html di row
  cardContainer.innerHTML += cardElem1;
}

