const form = document.getElementById('form'); 
form.addEventListener('submit', function(event){
    event.preventDefault(); 

    const weight = document.getElementById('weight').value; 
    const height = document.getElementById('height').value; 


    const bmi = (weight / (height * height)).toFixed(2); 
    const value = document.getElementById('value'); 
    let description = ''; 
    value.classList.add('attention')

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 4){
        description = 'abaixo do peso'; 
    }
    else{
        description = 'esta ok esta ok esta ok esta ok esta ok'; 
        value.classList.remove('attention');
        value.classList.add('normal')
    }




    value.textContent = bmi; 
    document.getElementById('description').textContent = description
})


