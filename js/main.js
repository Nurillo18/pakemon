var elList = document.querySelector(".list");


for (var pakemon of pokemons) {
    var elItem = document.createElement("li");
    var elImg = document.createElement("img");
    var elName = document.createElement("h2");
    var elDiscribe = document.createElement("p");




    elImg.setAttribute("src", pakemon.img)
    elName.textContent = pakemon.name;
    elDiscribe.textContent = pakemon.candy;
    elList.setAttribute("class","d-flex");
    elList.classList.add("flex-wrap");
    elList.classList.add("list-unstyled");
    elItem.setAttribute("class", "w-25");
    elItem.classList.add("text-center");
    elItem.classList.add("p-4");
    elItem.classList.add("shadow");
    elItem.classList.add("mt-4");
    elItem.classList.add("rounded");



    elList.appendChild(elItem);
    elItem.appendChild(elImg);
    elItem.appendChild(elName);
    elItem.appendChild(elDiscribe);

}
