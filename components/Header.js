export default function Header({ title }) {

  const url = "https://store-bsale-app.herokuapp.com";

  const HTMLResponse = document.querySelector("#app");

  //Creacion de Promesa para leer desde la URL API Categoria.
  fetch(`${url}/store/list/category`)
  .then((response) => response.json())
  .then((categorys) => { 
      const categoryName = categorys.map(category => `<li>${category.name}</li>`);
      const categoryId = categorys.map(category => `<li>${category.id}</li>`);
      return HTMLResponse.innerHTML = `<button name="${categoryName}" type="Submit" value="${categoryId}">${categoryName}</button>`;
  });
}
