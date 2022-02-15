const url = "https://store-bsale-app.herokuapp.com";

const HTMLResponse = document.querySelector("#app");

const CategoryResponse = document.querySelector("#category");

const ul = document.createElement("ul");

fetch(`${url}/store/list/category`)
.then((response) => response.json())
.then((categorys) => { 
    categorys.forEach((category) => {
        let elem = document.createElement("button");
        elem.setAttribute("type", "button");
        elem.setAttribute("value", `${category.id}`);
        elem.setAttribute("onclick", `SearchByCategory(${category.id})`);
        
        elem.appendChild(
            document.createTextNode(`${category.name}`)
        );

        ul.appendChild(elem);
    });

    CategoryResponse.appendChild(ul);
});