const novaTarefa = document.getElementById('novaTarefa');
const btnAddtarefa = document.getElementById('btAddTarefa');
const listaTarefa = document.getElementById('listaTarefa');

btnAddtarefa.addEventListener('click',function(){
    const tarefa = novaTarefa.value;
     

    if(tarefa !=" "){

       const li = document.createElement('li');

       li.textContent = novaTarefa;

       const botaoRemover = document.createElement('button');
       bataoRemover.textContent = "remover";

       botaoRemover.addEventListener('click', function(){
       li.remove();
       });


        li.appendChid(botaoRemover);
        listaTarefa.appendChild(li);
    
        novaTarefa.value = "";


    }




});