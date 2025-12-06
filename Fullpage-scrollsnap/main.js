const sections = document.querySelectorAll('section');

const options = {                  //觀察的方式，何時觸發 callback
    root: null,                    // null 代表整個瀏覽器視窗
    rootMargin: '0px',             // rootMargin 設為 0px，視窗邊界不做偏移
    threshold: 0.75                // 當元素 75% 進入視窗時才算觸發
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('is-active');   // 當元素進入視窗時，加上 'is-active' 類別
        } else {
            entry.target.classList.remove('is-active');  // 當元素離開視窗時，移除 'is-active' 類別
        }
    });
};

const observer = new IntersectionObserver(observerCallback, options); // 建立 Intersection Observer 實例 規則是 options 


sections.forEach(section => {
    observer.observe(section); // 對每個 section 開始觀察，只要達到觸發條件就會執行 observerCallback
});
