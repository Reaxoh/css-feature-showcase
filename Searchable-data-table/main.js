const sortSelect = document.getElementById('sort-select');

const products = [
    { name: "iPhone 17", price: 38900 },
    { name: "Keyboard Pro", price: 1890 },
    { name: "Laptop 13", price: 25900 },
    { name: "Mouse X", price: 850 }
];

function renderTable(data) {
    const tbody = document.getElementById('productBody');
    tbody.innerHTML = "";

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
        `
        tbody.appendChild(row);
    });
}

renderTable(products);

sortSelect.addEventListener('change', ()=> {
    let sorted = [...products];
    const option = sortSelect.value;

    if (option === 'name-asc') {
        sorted.sort((a,b)=> a.name.localeCompare(b.name));      // 使用 localeCompare() 進行字串比較，回傳負數時 a 排前面 (A-Z)
    }
    if (option === 'name-desc') {
        sorted.sort((a,b) => b.name.localeCompare(a.name));     // 反轉比較對象 (b vs a)，回傳負數時 b 排前面 (Z-A)     
    }
    if (option === 'price-asc') {
        sorted.sort((a, b) => a.price - b.price);               // 相減 a-b，結果為負數時 a 排前面 (小到大)
    }
    if (option === 'price-desc') {
        sorted.sort((a, b) => b.price - a.price);               // 相減 b-a，結果為負數時 b 排前面 (大到小)
    }
    renderTable(sorted);                                        // 重新渲染表格
});