import products from '/products.js';
import cart from './cart.js';
let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');


const loadTemplate = () => {
    fetch('/template.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
        initApp();
    })
}
loadTemplate();
const initApp = () => {
   
    let listProductHTML = document.querySelector('.listProduct');
    listProductHTML.innerHTML = null;
    
    products.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');

        // Định dạng số tiền sang VNĐ
        let priceInVND = product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

        newProduct.innerHTML = 
        `<a href="/detail.html?id=${product.id}">
            <img src="${product.image}">
        </a>
        <h2>${product.name}</h2>
        <div class="price">${priceInVND}</div>
        <button 
            class="addCart" 
            data-id='${product.id}'>
                Thêm vào giỏ hàng
        </button>`;
        listProductHTML.appendChild(newProduct);
    });
}

