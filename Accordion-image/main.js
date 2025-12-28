const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
    item.addEventListener('click', () => {
        items.forEach(i => i.classList.remove('active'));   // 預先清除其他的 active            
        item.classList.add('active');                       // 為當前點擊的 item 加入 active
    });
});