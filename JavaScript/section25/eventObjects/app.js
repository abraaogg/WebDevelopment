// document.querySelector('button').addEventListener('click', function(){
//     alert('Click')
// })

// const input = document.querySelector('input');
// input.addEventListener('keydown', () =>{
//     console.log('keydown')
// })

// input.addEventListener('keyup', () =>{
//     console.log('keyup')
// })

window.addEventListener('keydown', function(e){
    switch (e.code){
        case `ArrowUp`:
            console.log('UP!')
        case `ArrowDown`:
            console.log('Down!')
        case `ArrowLeft`:
            console.log('Left!')
        case `ArrowRight`:
            console.log('Right!')
        default:
            console.log('Ignored!')
    }
})