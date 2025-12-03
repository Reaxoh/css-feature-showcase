const toggle = document.getElementById("themeToggle");
const themelabel = document.getElementById("themeLabel");

const savedTheme = localStorage.getItem("theme"); // 從 localStorage 取得使用者之前選擇的主題

if (savedTheme === "dark") {      // 檢查 localStorage 中是否有dark主題的設定
    document.body.classList.add("dark-theme");
    toggle.classList.add("active");
} 

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    toggle.classList.toggle("active"); 

    if (document.body.classList.contains("dark-theme")) {       // classlist.contains 檢查是否為暗黑模式
        themelabel.textContent = "暗黑模式";
        localStorage.setItem("theme", "dark");                  // 儲存使用者選擇的主題到 localStorage                     
    } else {
        themelabel.textContent = "明亮模式";
        localStorage.setItem("theme", "light");                 // 儲存使用者選擇的主題到 localStorage                     
    }
});