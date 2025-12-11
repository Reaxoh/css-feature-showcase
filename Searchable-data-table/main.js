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
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
        `
        tbody.appendChild(row);
    });
}

renderTable(products);