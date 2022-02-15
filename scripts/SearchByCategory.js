function SearchByCategory(id){

    const url = "https://store-bsale-app.herokuapp.com";

    var product = document.getElementById("product");
    var sub_product = document.getElementById("sub-product");

    if (product.style.display === "block"){
        product.style.display = "none";
    } else {
        if (sub_product.style.display === "none"){
            sub_product.style.display = "block";
        } else {
            sub_product.style.display = "none";
        }
    }
        var ProductResponse = document.querySelector("#sub-product");

        fetch(`${url}/store/list/${id}`)
        .then((response) => response.json())
        .then((products)=> {

            var table = document.createElement("table");
            table.setAttribute("id","product-table");
            var pTable = document.getElementById("product-table");
            if (pTable){
                pTable.remove();
            }
            var tbody = document.createElement("tbody");

            products.forEach((product) => {
                var row = document.createElement("tr");
                var column = document.createElement("td");
                var image = document.createElement("img");

                const price = [(`${product.discount}`/ 100 * `${product.price}`)-(`${product.price}`)]*-1;

                image.setAttribute("src",`${product.url_image}`);
                image.setAttribute("alt", `${product.name}`);
                image.setAttribute("id", `product-img`);
        
                var text = document.createTextNode(`${product.name}`)
                var textPrice = document.createTextNode(`${price}`); 

                column.appendChild(image);
                column.appendChild(textPrice);

                row.appendChild(text);
                row.appendChild(column);

                tbody.appendChild(row);
            });



            product.style.display = "none";
            sub_product.style.display = "block";

            table.appendChild(tbody);

            ProductResponse.appendChild(table);
        });
    }
