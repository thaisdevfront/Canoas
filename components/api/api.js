data = [{ 
    id:'0',
    name:'Para Comer', 
        itens:[{ 
            id:'01',
            name:'Porções', 
            products:[{
                id:'001',
                name:'peixe', 
            },{
                id:'002',
                name:'lula', 
            }
        ]
        },{ 
            id:'02',
            name:'Lanches',
            products:[{
                id:'001',
                name:'peixe', 
            },{
                id:'002',
                name:'lula', 
            }
        ]
        },{ 
            id:'03',
            name:'Mais',
            products:[{
                id:'001',
                name:'peixe', 
            },{
                id:'002',
                name:'lula', 
            }
        ]
        }

        ]
    },{ 
    id:'1',
    name:'Para Beber', 
        itens:[{ 
            id:'04',
            name:'Bebidas', 
            products:[{
                id:'001',
                name:'peixe', 
            },{
                id:'002',
                name:'lula', 
            }]
            
        },{ 
            id:'05',
            name:'Alcoolicas',
            products:[{
                id:'001',
                name:'peixe', 
            },{
                id:'002',
                name:'lula', 
            }]
        },{ 
            id:'06',
            name:'Mais',
            products:[{
                id:'001',
                name:'peixe', 
            },{
                id:'002',
                name:'lula', 
            }]
        }
    
        ]
    }


]
var apiContainer=document.getElementById('api') 
var categoriesContainer=document.getElementById('categories') 



 getApi=(container)=>{
   
    data.map((apiData)=>{ 
        
        container.innerHTML += ` `+apiData.name +` `;

        apiData.itens.map((itensMap)=>{   

            container.innerHTML += ` </br>`+itensMap.name +` `;
             
             itensMap.products.map((productsMap)=>{  
             console.log(productsMap)
             container.innerHTML += ` </br>`+productsMap.name +` `;

             }) 
        }) 

     }) 
 }
 
 apiContainer ? getApi(apiContainer) : console.log("..");
 categoriesContainer ? getApi(categoriesContainer) : console.log("..");
    



    