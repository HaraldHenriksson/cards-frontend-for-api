export const fetchProducts = async () => {
  const res = await fetch("https://fine-red-stingray-garb.cyclic.app/product");
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }

  const result = await res.json();

  console.log(result.data);
  return result.data;
};

const renderProducts = (array) => {
  let productCards = "";

  array.forEach((product) => {
    productCards += `
        <article class="card">
          <header class="card-header">
            <h1>${product.name}</h1>
          </header>
  
          <div class="card-author">
            <a class="author-avatar" href="#">
              <img src="${product.images.thumbnail}" />
            </a>
          </div>
          
          <div class="tags">
            <h1>${product.description}</h1>
            <h2>${product.price} kr</h2>
          </div>
        </article>
      `;
  });

  document.querySelector("#theCard").innerHTML = productCards;
};

fetchProducts().then((data) => renderProducts(data));
