// var members = data.results[0].members

//	Ordenamos los miembros para luego obtener el diez porciento de los menos y los mas
let membersOrdenados	=	[];	
let ordenadoAscendenteByMissedVotesPCT	=	[];

ordenadoAscendenteByMissedVotesPCT = members.sort(function (a, b) {
	if (a.missed_votes_pct > b.missed_votes_pct) { //comparación lexicogŕafica
		return 1;
	} else if (a.missed_votes_pct < b.missed_votes_pct) {
		return -1;
	}
	return 0;
});

estadisticas.most_engaged_members = diezPorCientoAscendente(ordenadoAscendenteByMissedVotesPCT);	

ordenadoDescendenteByMissedVotesPCT	=	members.sort(function (a, b) {
	if (a.missed_votes_pct < b.missed_votes_pct) { //comparación lexicogŕafica
		return 1;
	} else if (a.missed_votes_pct > b.missed_votes_pct) {
		return -1;
	}
	return 0;
});

estadisticas.least_engaged_members = diezPorCientoDescendente(ordenadoDescendenteByMissedVotesPCT);

//	-----------------------------------------------------------------------------------

//	Funcion que devuelve el diez porciento de los menos leales y los mas leales. 

function diezPorCientoAscendente(items) {
	return items.filter((member, indice) => indice / items.length * 100 < 10);
}

function diezPorCientoDescendente(items) {
	return items.filter((member, indice) => indice / items.length * 100 < 10);
}

//	Creamos la tabla-b

createSenateTable();

//	Funciones para dibujar la tabla.

function createSenateTable() {

	let leastEngaged = document.getElementById('least-engaged');
	let mostEngaged = document.getElementById('most-engaged');

	leastEngaged.innerHTML = addTableToHTMLEngaged(estadisticas.least_engaged_members);
	mostEngaged.innerHTML = addTableToHTMLEngaged(estadisticas.most_engaged_members);

}


function addTableToHTMLEngaged(data) {

	var elHtml = '<thead class="thead-light"><tr><th>Name</th><th>Number of missed votes</th><th>% Missed</th></thead>';
	elHtml += '<tbody>';

	data.forEach(element => {
		elHtml += '<tr>';

		elHtml += '<tr>';
		if (element.middle_name === null) {
			elHtml += '<td><a href="' + element.url + '">' + element.first_name + ' ' + element.last_name + '</td>';
		} else {
			elHtml += '<td><a href="' + element.url + '">' + element.first_name + ' ' + element.middle_name + ' ' + element.last_name + '</a></td>';
		}
		elHtml += '<td class="Numberofmissedvotes">' + element.missed_votes + '</td>';
		elHtml += '<td class="% Missed">' +  element.missed_votes_pct + '% </td>';
		elHtml += '</tr>';
	});

	elHtml += '</tbody>';

	return elHtml;
}




