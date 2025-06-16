const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
button.addEventListener('click', () =>{
    const newColor = randomColor()
    h2.remove();
    
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = newColor;
    
    h1.innerText = newColor
})

const randomColor = () =>{
    const r = Math.floor(Math.random()* 255);
    const g = Math.floor(Math.random()* 255);
    const b = Math.floor(Math.random()* 255);
    return `rgb(${r}, ${g}, ${b})`;
}