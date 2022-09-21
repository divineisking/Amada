 export default function greeting(name){
    const timeofday = new Date().getHours()

    let hour;

    if (timeofday < 12){
        hour = ' morning'
    }

    else if(timeofday > 12 && timeofday < 17){
        hour = ' afternoon'
    }

    else if(timeofday > 17 && timeofday < 20 )
    {
        hour = ' evening'
    }

    else if(timeofday > 20 && timeofday < 23){
        hour = ' night'
    }

    return ` Good ${hour} ${name}`

}

console.log(greeting("Tobi"));