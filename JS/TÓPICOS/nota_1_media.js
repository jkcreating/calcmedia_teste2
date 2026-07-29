const form = document.getElementById('form'); 
form.addEventListener('submit', function(event){
    event.preventDefault(); 
    
    const nota1 = document.getElementById('nota1').value; 
    const nota2 = document.getElementById('nota2').value; 


    const nota_resposta = ((Number(nota1))+(Number(nota2))).toFixed(2); 
    const value = document.getElementById('value'); 
    let description = ''; 
    value.classList.add('attention')

    document.getElementById('infos').classList.remove('hidden');

    if (nota_resposta < 70){
        description = `Sua nota ficou abaixo da média. <a href="../../HTML/TÓPICOS/nota_total.html" class="link_description">Clique aqui</a> para saber a nota que você precisa na 2ª Unidade.`; 
    }
    else if(nota_resposta == 70){
        description = `Sua nota ficou na média. <a href="../../HTML/TÓPICOS/nota_total.html" class="link_description">Clique aqui</a> para saber a nota que você precisa na 2ª Unidade.`; 
        value.classList.remove('attention');
        value.classList.add('normal')

    }
    else{
        description = `Sua nota ficou acima da média. <a href="../../HTML/TÓPICOS/nota_total.html" class="link_description">Clique aqui</a> para saber a nota que você precisa na 2ª Unidade.`; 
        value.classList.remove('attention');
        value.classList.add('normal')
    }




    value.textContent = nota_resposta; 
    document.getElementById('description').innerHTML = description
})


