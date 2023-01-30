let data = {
    bank:[
        {
            name: 'Default',
            id: 'mapA',
            image: ['../../images/siege/bank/R6S_Bank_Default_1.jpg','../../images/siege/bank/R6S_Bank_Default_2.jpg','../../images/siege/bank/R6S_Bank_Default_3.jpg']
        },
        {
            name: 'B Lockers/B CCTV Room',
            id: 'mapB',
            image: []
        },
        {
            name: '1F Teller\'s Office/1F Archives',
            id: 'mapC',
            image: []
        },
        {
            name: '1F Staff Room/1F Open Area',
            id: 'mapD',
            image: []
        },
        {
            name: '2F Executive Lounge/2F CEO Office',
            id: 'mapE',
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
let mapContainer = document.querySelector('#mapHolder')
let mapNav = document.querySelector('#mapNav')
let mapSub

if(URI.includes("bank")){
    console.log("inside bank if")
    for(const map of data.bank){
        console.log(map)
        for(let A = 0; A<map.image.length; A++){
            console.log(A)
            if(A == 0){
                mapNav.innerHTML +=`
                <a class="nav-link" href="#${map.id}${A + 1}">${map.name}</a>
                <nav class="nav nav-pills flex-column" id="${map.id}"> </nav>
                `
                console.log("in if")
            }
            else{
                mapSub = document.querySelector(`#${map.id}`)
                mapSub.innerHTML += `
                <a class="nav-link ms-3 my-1" href="#${map.id}${A + 1}">${map.name} ${A + 1}</a>
                `
                console.log("in else")
            }

            mapContainer.innerHTML += `
            <div id="${map.id}${A + 1}">
            <img src="${map.image[A]}" alt="${map.name}" class="map-img">
            </div>
            `
        }
    }
}