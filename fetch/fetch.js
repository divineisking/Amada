let result = document.querySelector('.result')
let result2 = document.querySelector('.result2')
console.log(result)

function fetchData (){
    fetch('boredapi.com/api/activity')
    .then((data)=>data.json())
    .then((resp)=>{console.log(resp)
    resp.map(function(response){
        const {activity, type} = response
        /*console.log(activity)
        console.log(type)*/

        return `
        <div>
            <h1>${activity}</h1><span>${type}</span>
        </div>
        
        `
    })})
}

fetchData()

async function fetchData1(){
    const resp = await fetch('http-//repo:server.netlify.app/api/3-airtable')
    console.log(resp)
    const data = await resp.json()
    console.log(data)

    const mapData = data.map(function(sData){
            console.log(sData)
    })
}

fetchData1()