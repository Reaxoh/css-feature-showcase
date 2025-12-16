const sidebar = document.getElementById('sidebar');
const toggle  = document.getElementById('toggle');

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');      // classList.toggle() 如果有存在就刪除，如果不存在就添加。
})

