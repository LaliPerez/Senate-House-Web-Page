

var members =   data.results[0].members;

createSenateTable(members);

function createSenateTable(d) {

    var elSenateTable = document.getElementById('data-table');
    tableEl = addTableToHTML(d);

    elSenateTable.innerHTML = tableEl;

}

createHouseTable(members);

function createHouseTable(d) {

    var houseTable = document.getElementById('data-table');
    tableE2 = addTableToHTML(d);

    houseTable.innerHTML = tableE2;

}

addTableToHTML(data.results[0].members);

function addTableToHTML(members){
    var elHtml = '<thead class="thead-light"><tr><th>Full Name</th><th>Party</th><th>State </th><th>Seniority</th><th>Percentage of votes with party</th></tr></thead>';
    elHtml += '<tbody>';
    
    members.forEach(function (member) {
        elHtml += '<tr>';
        if (member.middle_name === null) {
            elHtml += '<td><a href="' + member.url + '">' + member.first_name + ' ' + member.last_name + '</td>';
        } else {
            elHtml += '<td><a href="' + member.url + '">' + member.first_name + ' ' + member.middle_name + ' ' + member.last_name + '</a></td>';
        }
        elHtml += '<td class="party">' + member.party + '</td>';
        elHtml += '<td class="state">' + member.state + '</td>';
        
        // addToDropDown(member.state);
        elHtml += '<td>' + member.seniority + '</td>';
        elHtml += '<td> % ' + member.votes_with_party_pct + '</td>';
        elHtml += '</tr>';
    });
    elHtml += '</tbody>';
    
    return elHtml;
}
/*
function addToDropDown(state){
   var elDropDownStates = document.getElementById('selectState');
   var elOption = document.createElement('OPTION');
    
   if (elDropDownStates.getElementsByClassName(state).length == 0) {
        elOption.className = state;
        elOption.nodeValue = state;
        elOption.textContent = state;
       elDropDownStates.appendChild(elOption)
   }   
};

/* document.getElementById('filter').addEventListener('change', function() {

    //	Limpiamos el div cada vez que hacemos click
    document.getElementById('members').innerHTML = "";

    //  Obtenemos el Objeto nodeList de los elementos checked y lo convertimos en un Array con Array.from.
    //  con map(..) iteramos el array y retornamos un nuevo array con los valores del value de cada elemento.
    
    let checkeds = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(element => element.value);

    listMembers = renderizar(filtrar(checkeds, members), listMembers); //Llamamos la funcion que nos filtra segunl los checked.
});
 */
function filtrar(partys, members, selected) {
    let items = [];
    let aux = [];
    partys.forEach(element => { // element == 'R'
				aux = [];
				if(selected	!= 'All'){
					aux = members.filter(item => item.party === element && item.state	=== selected);
				}else{
					aux = members.filter(item => item.party === element);
				}
				 
        items.push.apply(items,aux); //	Concateno los arrays. [ , , , ,]
    })

    return items;// retorna los valores filtrados segun el checkbox
}


function createDropDown () {
    let tablaSenado = document.getElementById('data-table');
    tablaSenado.innerHTML = "";
	
		let selected	=	document.querySelector('#selectState').value;
		let checkeds = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(element => element.value);
    
		createSenateTable(filtrar(checkeds,members,selected));
   
}


/* function renderizar(array, elementHTML) {
    //  Creamos parrafos de los elementos filtrados.
    array.forEach(element => {
        var p = document.createElement("p"); //	Creo una etiqueta <p> por cada iteracion.
        p.innerHTML = `${element.first_name} ${element.last_name} ${element.state}	${element.party}`; //	Creo el contenido de la etiqueta <p>.
        elementHTML.appendChild(p); //	Lo agrego al document.
    });
} */
