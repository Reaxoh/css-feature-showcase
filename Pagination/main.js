const products = [
    { id: 1,  name: 'Mechanical Keyboard', price: 1200 },
    { id: 2,  name: 'Wireless Mouse', price: 800 },
    { id: 3,  name: '4K Monitor', price: 6200 },
    { id: 4,  name: 'Gaming Headset', price: 1500 },
    { id: 5,  name: 'Type-C Hub', price: 600 },
    { id: 6,  name: '4K Webcam', price: 2300 },
    { id: 7,  name: 'Ergonomic Stand', price: 900 },
    { id: 8,  name: 'Mic Stand', price: 3200 },
    { id: 9,  name: 'SSD 1TB', price: 2800 },
    { id: 10, name: 'Power Bank', price: 1100 },
    { id: 11, name: 'Smart Lamp', price: 1100 },
    { id: 12, name: 'Desk Mat', price: 1100 },
    { id: 13, name: 'Cable Kit', price: 1100 },
    { id: 14, name: 'Mini Hub', price: 1100 },
    { id: 15, name: 'Fan Case', price: 1100 },
    { id: 16, name: 'Dongle', price: 1100 },
    { id: 17, name: 'Cleaner', price: 1100 }
];

function loadDataSet(data) {
    const sohwdatas = document.getElementById('productsList');
    sohwdatas.innerHTML = '';

    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList = 'products-card';                                    
        card.innerHTML = ` 
            <div>✨ ${item.name}</div>
            <div class="price">$${item.price.toLocaleString()}</div>    
        `;
        sohwdatas.appendChild(card);
        setTimeout(() => {
            card.classList.add('reveal');
        },index *100);
    });
}

loadDataSet(products);
