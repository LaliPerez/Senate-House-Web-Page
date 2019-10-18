addTableToHTML(data.results[0].members);

        function createDropDown () {
            let tablaSenado = document.getElementById('data-table');
            tablaSenado.innerHTML = "";
            
                let selected	=	document.querySelector('#selectState').value;
                let checkeds = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(element => element.value);
            
                createSenateTable(filtrar(checkeds,members,selected));
           
        }