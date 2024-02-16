//Initialization
var body = document.body;
var foot = document;

// var test = $("#insert-span");
// test.text("Works");
// console.log("import of jq  done : ",test.text());
var insertSpan = document.getElementById("insert-span");
insertSpan.innerHTML =(`
    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
    <symbol id="check2" viewBox="0 0 16 16">
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
    </symbol>
    <symbol id="circle-half" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
    </symbol>
    <symbol id="moon-stars-fill" viewBox="0 0 16 16">
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
    </symbol>
    <symbol id="sun-fill" viewBox="0 0 16 16">
    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
    </symbol>
    </svg>

    <div id="dark-toggle" class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
    <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
            id="bd-theme"
            type="button"
            aria-expanded="false"
            data-bs-toggle="dropdown"
            aria-label="Toggle theme (auto)">
    <svg class="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
    <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
    </button>
    <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
    <li>
        <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
        <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
        Light
        <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
        </button>
    </li>
    <li>
        <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
        <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
        Dark
        <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
        </button>
    </li>
    <li>
        <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
        <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg>
        Auto
        <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
        </button>
    </li>
    </ul>
    </div>`);


//Artists Section.................................................
// Create a 2D array to store names and their home countries
var artistsArray = [
    ["The Beatles", "Liverpool, England"],
    ["Led Zeppelin", "London, England"],
    ["Queen", "London, England"],
    ["Pink Floyd", "London, England"],
    ["Nirvana", "Seattle, Washington, USA"],
    ["The Rolling Stones", "London, England"],
    ["AC/DC", "Sydney, Australia"],
    ["Guns N' Roses", "Los Angeles, California, USA"],
    ["Radiohead", "Abingdon, Oxfordshire, England"],
    ["U2", "Dublin, Ireland"],
    // Pop artists
    ["Michael Jackson", "Gary, Indiana, USA"],
    ["Madonna", "Bay City, Michigan, USA"],
    ["Whitney Houston", "Newark, New Jersey, USA"],
    ["Prince", "Minneapolis, Minnesota, USA"],
    ["Elvis Presley", "Tupelo, Mississippi, USA"],
    ["Beyoncé", "Houston, Texas, USA"],
    ["Rihanna", "Saint Michael, Barbados"],
    ["Taylor Swift", "Reading, Pennsylvania, USA"],
    ["Ariana Grande", "Boca Raton, Florida, USA"],
    ["Justin Bieber", "Stratford, Ontario, Canada"],
    // Hip-hop artists
    ["Tupac Shakur", "Brooklyn, New York, USA"],
    ["The Notorious B.I.G.", "Brooklyn, New York, USA"],
    ["Jay-Z", "Brooklyn, New York, USA"],
    ["Nas", "Queens, New York, USA"],
    ["Eminem", "Detroit, Michigan, USA"],
    ["Kendrick Lamar", "Compton, California, USA"],
    ["Drake", "Toronto, Ontario, Canada"],
    ["Kanye West", "Chicago, Illinois, USA"],
    ["Nicki Minaj", "Queens, New York, USA"],
    ["Cardi B", "The Bronx, New York, USA"],
    // Country artists
    ["Johnny Cash", "Kingsland, Arkansas, USA"],
    ["Dolly Parton", "Sevierville, Tennessee, USA"],
    ["Elvis Presley", "Tupelo, Mississippi, USA"],
    ["Willie Nelson", "Abbott, Texas, USA"],
    ["Garth Brooks", "Tulsa, Oklahoma, USA"],
    ["Tim McGraw", "Delhi, Louisiana, USA"],
    ["Faith Hill", "Star, Mississippi, USA"],
    ["Carrie Underwood", "Checotah, Oklahoma, USA"],
    ["Blake Shelton", "Ada, Oklahoma, USA"],
    ["Taylor Swift", "Reading, Pennsylvania, USA"],
    // R&B artists
    ["Marvin Gaye", "Washington, D.C., USA"],
    ["Aretha Franklin", "Detroit, Michigan, USA"],
    ["Stevie Wonder", "Saginaw, Michigan, USA"],
    ["Ray Charles", "Albany, Georgia, USA"],
    ["James Brown", "Barnwell, South Carolina, USA"]
];

// Accessing elements in the 2D array
console.log(artistsArray[0][0] + " (" + artistsArray[0][1] + ")");
console.log(artistsArray[10][0] + " (" + artistsArray[10][1] + ")");
console.log(artistsArray[20][0] + " (" + artistsArray[20][1] + ")");
console.log(artistsArray[30][0] + " (" + artistsArray[30][1] + ")");
console.log(artistsArray[40][0] + " (" + artistsArray[40][1] + ")");

var artistsArrayPlane = "";
for (let i = 0; i < artistsArray.length; i++) {
    const element = artistsArray[i];
    artistsArrayPlane += `
    <div class="artist-menu-item">
        <a href=""><div class="artist-photo">
            <img class="img-fluid" src="media/dynamic/images/artists/500x500_DSP-profile.jpg" alt="artist-image">
        </div> </a>
        <div class="artist-caption">
            <p>_</p>
            <p class="artist-name">${artistsArray[i][0]}</p>
            <p class="artist-location">${artistsArray[i][1]}</p>
            <p><a href="" class="artist-link">VIEW ARTIST</a></p>
        </div>
    </div>`;
}
(document.querySelector(".artist-menu")).innerHTML += artistsArrayPlane;