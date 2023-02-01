export const fetchProducts = async () => {
  const res = await fetch("http://localhost:3000/product");
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }

  const result = await res.json();

  return result.data;
};

// let products = fetchProducts();

// const getProducts = async () => {
//   products = await fetchProducts();
// };

const renderProducts = () => {
  const productList = fetchProducts();

  const productCards = productList.map((product) => {
    return `
        <article class="card">
          <header class="card-header">
            <h2>${product.name}</h2>
          </header>
  
          <div class="card-author">
            <a class="author-avatar" href="#">
              <img src="${product.images.thumbnail}" />
            </a>
          </div>
  
          <div class="tags">
            <div>${product.description}</div>
            <h2>${product.price}</h2>
          </div>
        </article>
      `;
  });

  document.querySelector("#theCard").innerHTML = productCards.join("");
};

//renderProducts();

// fetchProducts();

console.log(result);
