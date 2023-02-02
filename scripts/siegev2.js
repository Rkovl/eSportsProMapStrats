let data = {
    bank:[
        {
            name: 'Default',
            id: '0',
            image: ['../../images/siege/bank/R6S_Bank_Default_1.jpg','../../images/siege/bank/R6S_Bank_Default_2.jpg','../../images/siege/bank/R6S_Bank_Default_3.jpg']
        },
        {
            name: 'B Lockers/B CCTV Room',
            id: '1',
            image: []
        },
        {
            name: '1F Teller\'s Office/1F Archives',
            id: '2',
            image: []
        },
        {
            name: '1F Staff Room/1F Open Area',
            id: '3',
            image: []
        },
        {
            name: '2F Executive Lounge/2F CEO Office',
            id: '4',
            image: []
        }
    ],
    border:[
        {
            name: 'Default',
            id: '1',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        }
    ],
    chalet:[
        {
            name: 'Default',
            id: '1',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        }
    ],
    clubHouse:[
        {
            name: 'Default',
            id: '1',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        }
    ],
    kafe:[
        {
            name: 'Default',
            id: '1',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        }
    ],
    oregon:[
        {
            name: 'Default',
            id: '1',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        }
    ],
    skyscraper:[
        {
            name: 'Default',
            id: '1',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        }
    ],
    themePark:[
        {
            name: 'Default',
            id: '1',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        }
    ],
    villa:[
        {
            name: 'Default',
            id: '1',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        },
        {
            name: '',
            image: []
        }
    ],

};


let URI = document.querySelector('html').baseURI
console.log(URI, "URI")
let imageContainer = document.querySelector('#imageContainer')
let navContainer = document.querySelector('#navContainer')
let mapSub
let uriID

function displayMap(id) {
    imageContainer.innerHTML = ``
    console.log("inside onclick", uriID, Number(id))
    for(const image of data[uriID][id].image){
        imageContainer.innerHTML +=`
        <div class="card bg-dark text-white col p-1 border">
            <img class="img-fluid" src="${image}" alt="">
        </div>
        `
    }
    
}

if(URI.includes("bank")){
    console.log("inside bank if")
    uriID = "bank"
    for(const map of data.bank){
        console.log(map)

        if(map.name == 'Default'){
            navContainer.innerHTML =`
            <button class="nav-link active" id="${map.id}" data-bs-toggle="tab"  type="button" role="tab"  aria-selected="true" onclick="displayMap(this.id)">${map.name}</button>
            `
            for(const image of map.image){
                imageContainer.innerHTML +=`
                <div class="card bg-dark text-white col p-1 border">
                    <img class="img-fluid" src="${image}" alt="">
                </div>
                `
            }
        }
        else{
            navContainer.innerHTML +=`
            <button class="nav-link" id="${map.id}" data-bs-toggle="tab"  type="button" role="tab"  aria-selected="false" onclick="displayMap(this.id)">${map.name}</button>
            `
        }

    }

}