const imageUpload = document.getElementById("imageUpload");
const previewContainer = document.getElementById("previewContainer");


function handleImageUpload(files) {
    [...files].forEach(file => {
        if (!file.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            //建立圖片容器
            const item =  document.createElement('div');
            item.classList.add('masonry-item');

            //建立圖片元素
            const img = document.createElement('img');
            img.src = e.target.result;

            //建立刪除按鈕
            const del = document.createElement('button');
            del.classList.add('delete-btn');
            del.textContent = 'x';

            //將圖片和刪除按鈕加入容器
            item.appendChild(img); 

            item.appendChild(del);
            previewContainer.appendChild(item); 

            //刪除圖片功能
            del.addEventListener('click', () => {
                item.remove();
            });
        }
        reader.readAsDataURL(file);
    })
}

imageUpload.addEventListener('change', () => {
    handleImageUpload(imageUpload.files)
});