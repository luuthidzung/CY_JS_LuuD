const $ = selector => document.querySelector(selector);
let files = [], form = $('form'), text = $(".text"), input = $("form input");
$(".select").addEventListener('click', () => input.click());

// Show images
const showImages = () => {
    let images = '';
    files.forEach((e, i) => {
        images += `<div class="image">
                    <img src="${URL.createObjectURL(e)}" alt="img">
                    <span onClick="delImage(${i})" ><i class="fas fa-times"></i></span>
                </div>`;
    });
    $(".container").innerHTML = images;
};


// Delete image
const delImage = index => {
    files.splice(index, 1);
    showImages();
};

// Change event
input.addEventListener('change', () => {
    let file = input.files;
    for (let i = 0; i < file.length; i++) {
        if (file[i].type.split("/")[0] != 'image') continue;
        if (files.every(e => e.name != file[i].name)) files.push(file[i]);
    }
    form.reset();
    showImages();
});

// Drag over
form.addEventListener('dragover', e => {
    e.preventDefault();
    form.classList.add('dragover');
    text.innerHTML = 'Drop file here';
});

// Drag leave
form.addEventListener('dragleave', e => {
    e.preventDefault();
    form.classList.remove('dragover');
    text.innerHTML = 'Drag and drop file here or <span class="select">Browse</span>';
});

// Drop
form.addEventListener('drop', e => {
    e.preventDefault();
    form.classList.remove('dragover');
    text.innerHTML = 'Drag and drop file here or <span class="select">Browse</span>';
    let file = e.dataTransfer.files;
    for (let i = 0; i < file.length; i++) {
        if (file[i].type.split("/")[0] != 'image') continue;
        if (files.every(e => e.name != file[i].name)) files.push(file[i]);
    }
    showImages();
});

// Send
$('button').addEventListener('click', () => {
    let formData = new FormData();
    files.forEach((e, i) => formData.append(`file[${i}]`, e));
});
