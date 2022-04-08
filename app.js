const quiz = document.querySelector('.quiz')
const box = document.querySelector('.box')
let table = [];

quiz.addEventListener('submit', (e) =>{
    e.preventDefault()

    //boucle for ne marche pas  avec querySelectorAll('.box') donc obligé
     table.push(document.querySelector('input[name="perso"]:checked').value)
     table.push(document.querySelector('input[name="date"]:checked').value)

     table.push(document.querySelector('input[name="pays"]:checked').value)
     table.push(document.querySelector('input[name="number"]:checked').value)

    console.log(table);
    table = [];

    

})




