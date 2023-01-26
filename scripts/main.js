let data = {
	R6S: [
		{
			name: "Bank",
			dataname: "bank",
			desc: "",
			img: "../images/R6S_Bank.webp",
            updated: "January 24, 2023"
		},
		{
			name: "Border",
			dataname: "border",
			desc: "",
			img: "../images/R6S_Border.webp",
            updated: "January 24, 2023"
		},
		{
			name: "Chalet",
			dataname: "chalet",
			desc: "",
			img: "../images/R6S_Chalet.webp",
            updated: "January 24, 2023"
		},
		{
			name: "Club House",
			dataname: "club_house",
			desc: "",
			img: "../images/R6S_Club_House.webp",
            updated: "January 24, 2023"
		},
		{
			name: "Kafe",
			dataname: "kafe",
			desc: "",
			img: "../images/R6S_Kafe.webp",
            updated: "January 24, 2023"
		},
		{
			name: "Oregon",
			dataname: "oregon",
			desc: "",
			img: "../images/R6S_Oregon.webp",
            updated: "January 24, 2023"
		},
		{
			name: "Skyscraper",
			dataname: "skyscraper",
			desc: "",
			img: "../images/R6S_Skyscraper.webp",
            updated: "January 24, 2023"
		},
		{
			name: "Theme Park",
			dataname: "theme_park",
			desc: "",
			img: "../images/R6S_Theme_Park.webp",
            updated: "January 24, 2023"
		},
		{
			name: "Villa",
			dataname: "villa",
			desc: "",
			img: "../images/R6S_Villa.webp",
            updated: "January 24, 2023"
		}
	],
	VAL: []
};

let URI = document.querySelector('html').baseURI
console.log(URI, "URI")
let cardContainer = document.querySelector('#cardContainer')

if(URI.includes("siege")){
    console.log("inside siege if")
    for(const card of data.R6S){
        cardContainer.innerHTML += `
        <div class="col" >
            <a href="./siege/${card.dataname}.html" class="text-decoration-none text-black">
                <div class="card h-100">
                    <img src="${card.img}" class="card-img-top card-height" alt="${card.name} image">
                    <div class="card-body">
                    <h5 class="card-title">${card.name}</h5>
                    <p class="card-text">${card.desc}</p>
                    </div>
                    <div class="card-footer">
                        <small>Last updated ${card.updated}</small>
                    </div>        
                </div>
            </a>
        </div>`
    }
}