const products = [
  'Арбуз',
  'Книга',
  'Кофе',
  'Макароны',
  'Молоко',
  'Сахар',
  'Яблоки'
];

const productList = document.querySelector('#product-list');
const addBtn = document.querySelector('#add-btn');

function sortProducts() {
  products.sort((a, b) => a.localeCompare(b, 'ru'));
}

function renderProducts() {
  productList.innerHTML = '';

  products.forEach((name, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}) ${name}`;
    productList.appendChild(li);
  });
}

function addProduct() {
  const input = prompt('Введите название товара:');

  if (input === null) {
    return;
  }

  const name = input.trim();

  if (name === '') {
    alert('Название товара не введено!');
    return;
  }

  products.push(name);
  sortProducts();
  renderProducts();
}

addBtn.addEventListener('click', addProduct);

sortProducts();
renderProducts();