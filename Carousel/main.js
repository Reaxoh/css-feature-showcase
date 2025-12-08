const track = document.querySelector('.carousel-track');
const items = Array.from(track.children); // 抓track 下面的子容器元素數量。 Array.from(track.children)也可以寫成[...track.children]
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots        = Array.from(document.querySelectorAll('.dot'));
const carouselContainer = document.querySelector('.carousel');

let currentIndex = 0;  //預設是第1張
let autoPlayInterval;

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`; // 計算currentIndex 是第幾張隨著往左移動
    dots.forEach(dot => dot.classList.remove('active'));           // 移除所有dot active class
    dots[currentIndex].classList.add('active');                    // 在當前的頁面加入 active class
}

function autoPlay() {
    if(autoPlayInterval) {
        clearInterval(autoPlayInterval);                           // clearInterval 停止執行 setInterval
    }

    autoPlayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;  
        updateCarousel(); 
    }, 3000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex -1 + items.length) % items.length;
    updateCarousel();
    autoPlay();                                                   // autoPlay()手動切換後，重設自動播放計時器，避免立即跳到下一張
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
    autoPlay();   
});

carouselContainer.addEventListener('mouseenter', stopAutoPlay);

carouselContainer.addEventListener('mouseleave', autoPlay);

dots.forEach((dot, index) => {                
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
        autoPlay();   
    });
});

updateCarousel();
autoPlay();