const aplication = document.querySelector(".container");
let contentHTML = "";

const url = "https://api.nasa.gov/planetary/apod?api_key=H3iTxbIqBhsJCHwACjDys7RUutUb5XodHZrBa8gk&count=20";

let i = 1;

fetch(url)
.then(response => response.json())
.then((json) =>{
    json.map(card => {
        const dateFull = card.date.split("-");
        const year = dateFull[0];
        const textFull = card.explanation.split("");
        const text = textFull.slice (0, 141);
        if(typeof card.copyright == "undefined"){
            contentHTML += `
                <div class="card" id="card${i}">
                    <div class="img--container">
                        <div class="img-dg--1"></div>
                        <div class="img-dg--2"></div>
                        <div class="img-dg--3"></div>
                        <div class="img-dg--4"></div>
                        <img src="${card.url}" alt="${card.title}"/>
                    </div>
                    <div class="img--text">
                        <h2>"${card.title}"</h2>
                        <p>${text.join("")}...</p>
                        <span>${year}.</span>
                    </div>
                </div>`;
        } else{
            contentHTML += `
                <div class="card" id="card${i}">
                    <div class="img--container">
                        <div class="img-dg--1"></div>
                        <div class="img-dg--2"></div>
                        <div class="img-dg--3"></div>
                        <div class="img-dg--4"></div>
                        <img src="${card.url}" alt="${card.title}"/>
                    </div>
                    <div class="img--text">
                        <h2>"${card.title}"</h2>
                        <p>${text.join("")}...</p>
                        <span>©${card.copyright}. ${year}.</span>
                    </div>
                </div>`;
        }
        i += 1;        
        aplication.innerHTML = contentHTML;
    });
});