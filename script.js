let searchBtn = document.getElementById("search-btn")
let countryInp = document.getElementById("country-inp")
let result = document.getElementById("result")

searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL).then((response) => response.json()).then((data) => {
        // console.log(data[0]);
        // console.log(data[0].capital[0]);
        // console.log(data[0].flags.svg);
        // console.log(data[0].continents[0]);
        // console.log(Object.keys(data[0].currencies)[0]);
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        // console.log(Object.values(data[0].currencies[Object.keys(data[0].currencies)].name));
        // console.log(Object.values(data[0].languages).toString().split(",").join(","));
        result.innerHTML = `
    <img src="${data[0].flags.svg}"class="flag-img">

    <h2>${data[0].name.common}</h2>

    <div class="wrapper">
    <div class="data-wrapper">
    <h4>Poytaxt:</h4>
    <span>${data[0].capital[0]}</span>
    </div>

      <div class="wrapper">
    <div class="data-wrapper">
    <h4>Qit'a:</h4>
    <span>${data[0].continents[0]}</span>
    </div>

      <div class="wrapper">
    <div class="data-wrapper">
    <h4>Aholi soni:</h4>
    <span>${data[0].population}</span>
    </div>

    <div class="wrapper">
    <div class="data-wrapper">
    <h4>Pul birligi:</h4>
    <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
    </div>

     <div class="wrapper">
    <div class="data-wrapper">
    <h4>Davlat Tili:</h4>
    <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
    </div>
    `
    }).catch(()=>{
       if(countryName.length == 0){
        result.innerHTML =`<h2>Iltimos Davlat nomini kiritin </h2>`
       }else{
        result.innerHTML = `<h2>Iltimos Davlat nomini to'g'ri kiriting. </h2>`
       }
    })


})