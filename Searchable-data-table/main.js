const sortSelect = document.getElementById('sort-select');
const searchInput = document.getElementById('search-input');
const categorySelect = document.getElementById('category-select');

const products = [
  { name: "iPhone 17 (256GB)", price: 29900, category: "phone" },
  { name: "iPhone 15 pro max (256GB)", price: 44900, category: "phone" },
  { name: "iPhone 12 (64GB)", price: 8158, category: "phone" },
  { name: "Samsung Galaxy S24 Ultra (512GB)", price: 43900, category: "phone" },
  { name: "Google Pixel 8 Pro (256GB)", price: 33900, category: "phone" },
  { name: "Sony Xperia 1 VI (512GB)", price: 43990, category: "phone" },
  { name: "iPad Pro 11吋 (Apple, 256GB)", price: 34900, category: "tablet" },
  { name: "Galaxy Tab S9 (Samsung, 128GB)", price: 19490, category: "tablet" },
  { name: "Xiaomi Pad 6 (小米, 128GB)", price: 8999, category: "tablet" },
  { name: "G PRO X Keyboard (Logitech)", price: 4490, category: "keyboard" },
  { name: "BlackWidow V4 Pro (Razer)", price: 7500, category: "keyboard" },
  { name: "K70 RGB Pro (Corsair)", price: 4690, category: "keyboard" },
  { name: "MacBook Air M3 13吋 (Apple)", price: 35900, category: "laptop" },
  { name: "Zenbook S 13 OLED (ASUS)", price: 48000, category: "laptop" },
  { name: "XPS 13 Plus (Dell)", price: 55000, category: "laptop" },
  { name: "G PRO X Superlight 2 (Logitech)", price: 3290, category: "mouse" },
  { name: "Viper V3 Pro (Razer)", price: 4288, category: "mouse" },
  { name: "Aerox 5 Wireless (SteelSeries)", price: 2990, category: "mouse" },
];


function renderTable(data) {
    const tbody = document.getElementById('product-body');
    tbody.innerHTML = data.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
        </tr>    
    `).join('');                                                // join('') 把這些字串連起來，中間不要放任何東西。
}

renderTable(products);

sortSelect.addEventListener('change', () => {
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
    renderTable(sorted);                                        // 使用排序後的資料重新渲染表格
});

searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.toLowerCase();            // 獲取輸入內容並轉換為小寫 

    const filtered = products.filter(item =>                    // 過濾產品列表
        item.name.toLowerCase().includes(keyword)               // 檢查產品名稱是否包含搜尋關鍵字
    );

    renderTable(filtered);                                      // 使用篩選後的資料重新渲染表格
});

categorySelect.addEventListener('change', () => {
    let filtered = [...products];
    const selectedCategory = categorySelect.value;

    if(selectedCategory !== 'all'){                             // 如果不是all 就把選擇的分類進行篩選
        filtered = filtered.filter(item => item.category === selectedCategory);
    }

    renderTable(filtered);
});