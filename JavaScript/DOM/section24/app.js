const allImages = document.getElementsByTagName('img');

for (let img of allImages){
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const squareImages = document.getElementsByClassName('square');


const allLinks = document.querySelectorAll('a');
for (let link of allLinks){
    link.style.color = 'cyan'
}