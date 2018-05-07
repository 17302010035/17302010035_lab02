window.onload=function () {
    const countries = [
        { name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },
        { name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },
        { name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },
        { name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }
        ];
    document.getElementsByClassName("flex-container")[0].innerHTML=
        '<div class="item">' +
        '<h2 class="name"></h2>' +
        '<h3 class="continent"></h3>' +
        '<div class ="inner-box">' +
        '<h2 class="city_title"></h2>' +
        '<ul class="cities"></ul>' +
        '</div>' +
        '<div class="inner-box">' +
        '<h3 class="photo_title"></h3>' +
        '<div class="photos"></div>' +
        '</div>' +
        '<button class="button"></button>' +
        '</div>' +
        '<div class="item">' +
        '<h2 class="name"></h2>' +
        '<h3 class="continent"></h3>' +
        '<div class ="inner-box">' +
        '<h2 class="city_title"></h2>' +
        '<ul class="cities"></ul>' +
        '</div>' +
        '<div class="inner-box">' +
        '<h3 class="photo_title"></h3>' +
        '<div class="photos"></div>' +
        '</div>' +
        '<button class="button"></button>' +
        '</div>' +
        '<div class="item">' +
        '<h2 class="name"></h2>' +
        '<h3 class="continent"></h3>' +
        '<div class ="inner-box">' +
        '<h2 class="city_title"></h2>' +
        '<ul class="cities"></ul>' +
        '</div>' +
        '<div class="inner-box">' +
        '<h3 class="photo_title"></h3>' +
        '<div class="photos"></div>' +
        '</div>' +
        '<button class="button"></button>' +
        '</div>' +
        '<div class="item">' +
        '<h2 class="name"></h2>' +
        '<h3 class="continent"></h3>' +
        '<div class ="inner-box">' +
        '<h2 class="city_title"></h2>' +
        '<ul class="cities"></ul>' +
        '</div>' +
        '<div class="inner-box">' +
        '<h3 class="photo_title"></h3>' +
        '<div class="photos"></div>' +
        '</div>' +
        '<button class="button"></button>' +
        '</div>';
    for (let x = 0; x < 4; x++){
        document.getElementsByClassName("name")[x].innerHTML = countries[x].name;
        document.getElementsByClassName("continent")[x].innerHTML= countries[x].continent;
        document.getElementsByClassName("city_title")[x].innerHTML = "Cities";
        document.getElementsByClassName("photo_title")[x].innerHTML = "Popular Photos";


        let cities = "";
        for (let y = 0; y< countries[x].cities.length; y++)
        {
            cities += countries[x].cities[y];
            cities+="<br>";
        }
        document.getElementsByClassName("cities")[x].innerHTML=cities;
        let photos="";
        for (let y = 0; y< countries[x].photos.length; y++)
        {
            let source = "images/" + countries[x].photos[y];
            photos +='<img class="photo" src ='+ source +' />';
        }
        document.getElementsByClassName("photos")[x].innerHTML=photos;
        document.getElementsByClassName("button")[x].innerHTML ="Visit";
    }
};