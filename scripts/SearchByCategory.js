function SearchByCategory(id){

    const url = "https://store-bsale-app.herokuapp.com";

    const product = document.getElementById("product");
    if (product){
        product.remove();
    } else {
        const divProduct = document.createElement("div");
        divProduct.setAttribute("id", "sub-product");
    }
        const ProductResponse = document.querySelector("#sub-product");

        const table = document.createElement("table");
        const tbody = document.createElement("tbody");

        fetch(`${url}/store/list/${id}`)
        .then((response) => response.json())
        .then((products)=> {
            products.forEach((product) => {
                let row = document.createElement("tr");
                let column = document.createElement("td");
                let image = document.createElement("img");

                let price = [(`${product.discount}`/ 100 * `${product.price}`)-(`${product.price}`)]*-1;

                image.setAttribute("src",`${product.url_image}`);
                image.setAttribute("alt", `${product.name}`);
                image.setAttribute("id", `product-img`);
        
                let text = document.createTextNode(`${product.name}`)
                let textPrice = document.createTextNode(`${price}`); 

                column.appendChild(image);
                column.appendChild(textPrice);

                row.appendChild(text);
                row.appendChild(column);

                tbody.appendChild(row);
            });

            table.appendChild(tbody);

            ProductResponse.appendChild(table);
        });
    }
