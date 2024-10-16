const novaTarefa = document.getElementById('novaTarefa');
const btnAddtarefa = document.getElementById('btAddTarefa');
const listaTarefa = document.getElementById('listaTarefa');

btnAddtarefa.addEventListener('click',function(){
    const tarefa = novaTarefa.value;
     

    if(tarefa){

       const li = document.createElement('li');

       li.textContent = tarefa;

       const botaoRemover = document.createElement('button');
       botaoRemover.textContent="remover";

       botaoRemover.addEventListener('click', function(){
        li.remove();
       });


        const div = document.createElement('div');
        div.appendChild(botaoRemover)
        li.appendChild(div)

        listaTarefa.appendChild(li);
    
        novaTarefa.value = "";


    }




});