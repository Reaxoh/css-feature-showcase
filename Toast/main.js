const openButton = document.getElementById('openToastButton');
const overlay = document.getElementById('toastOverlay');
const container = document.getElementById('toastContainer');
const template = document.getElementById('toastTemplate');
const successTemplate = document.getElementById('successTemplate');

openButton.addEventListener('click', () => {
    container.innerHTML = '';

    const clone = template.content.cloneNode(true);                 // 複製template內容，以便重複產生新的 Toast 元素
    const form  = clone.querySelector('.feedback-form');            // 從template 裡面抓取.feedback-form 的元素
    const closeButton = clone.querySelector('.close-button');       // 從template 裡面抓取.close-button 的元素

    overlay.classList.add('active');

    const closeToast = () => {
        overlay.classList.remove('active');
    }
    closeButton.onclick = closeToast;                               // 使用 onclick 確保此按鈕僅綁定單一關閉動作
    
    form.onsubmit = (e) => {
        e.preventDefault();                                         // 阻止表單預設的跳轉與重整行為
        const submitButton = form.querySelector('.submit-button');
        submitButton.innerText = '傳送中...';
        submitButton.disabled = true;

        setTimeout(() => {
            container.innerHTML = '';
            const successNode = successTemplate.content.cloneNode(true);
            container.appendChild(successNode);
            setTimeout(closeToast, 2000);
        }, 1500);
    };

    container.appendChild(clone);
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
    }
});