// ------------ axios updating query strings --------------------------------

let url = "http://universities.hipolabs.com/search?country=";
let btn = document.querySelector("button");
let p = document.querySelector("p");
async function getColleges(country) {
    try{
        let response = await axios.get(url + country);
        return response.data;
    } catch(e){
        console.log(e);
        return [];
    }
}

function show(collegesA){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of collegesA){
        console.log(col.country + col.name);
        
        let li = document.createElement("li");
        li.innerHTML = col.country + " :          " + col.name + " ( " + col['state-province'] + " )";
        list.appendChild(li);
    }    
}

btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    console.log("selected country is : ",country);

    let collegesA = await getColleges(country);
    show(collegesA);
    p.innerHTML= "Showing "+collegesA.length+" universities";
});