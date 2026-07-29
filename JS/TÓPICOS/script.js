const form = document.getElementById('form'); 
form.addEventListener('submit', function(event){
    event.preventDefault(); 

    /*const weight = document.getElementById('weight').value; 
    const height = document.getElementById('height').value; */
    
    const nota1 = document.getElementById('nota1').value; 
    const nota2 = document.getElementById('nota2').value; 

    /*Média Parcial: [(4xN1)+(6xN2)]/10*/
    /*const bmi = (weight / (height * height)).toFixed(2); 
    const value = document.getElementById('value'); 
    let description = ''; 
    value.classList.add('attention')*/

    const nota_resposta = ((Number(nota1))+(Number(nota2))).toFixed(2); 
    const value = document.getElementById('value'); 
    let description = ''; 
    value.classList.add('attention')

    document.getElementById('infos').classList.remove('hidden');

    if (nota_resposta < 4){
        description = 'abaixo do peso'; 
    }
    else{
        description = 'esta ok esta ok esta ok esta ok esta ok'; 
        value.classList.remove('attention');
        value.classList.add('normal')
    }




    value.textContent = nota_resposta; 
    document.getElementById('description').textContent = description
})


