let state = { current:  1, limit:5};                                                // 分頁狀態： current 為當前頁碼， limit 為每頁顯示幾筆
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

function initPagination() {
    const nav = document.getElementById('paginationCapsule');
    nav.innerHTML = '';
    const total = Math.ceil(products.length / state.limit);                     // 計算總頁數：總資料長度除以每頁限制，並無條件進位

    for(let i = 1; i <= total; i++) {
        const dot = document.createElement('button');
        dot.classList = `p-dot ${i === state.current ? 'active' : ''}`;         // 若按鈕編號等於當前頁碼，則加上 active 樣式，如果不是就不加
        dot.innerText = i;
        dot.onclick = () => {       
            state.current = i;                                                  // // 更新當前頁碼
            const sliced = products.slice((i-1)*state.limit, i*state.limit);    // 分頁切割：計算該頁應顯示的資料範圍 [start, end)
            loadDataSet(sliced);                                                // 重新渲染切割出來的資料
            initPagination();                                                   // 重新渲染分頁按鈕狀態
        };
        nav.appendChild(dot);
    }
}

loadDataSet(products.slice(0, state.limit));                                    // 初始進入頁面：顯示第一頁資料並建立分頁按鈕
initPagination();
