// var members = data.results[0].members

//	Ordenamos los miembros para luego obtener el diez porciento de los menos y los mas
let membersOrdenados	=	[];	
let ordenadoAscendenteByVotesWithPartyPCT	=	[];

ordenadoAscendenteByVotesWithPartyPCT = members.sort(function (a, b) {
	if (a.votes_with_party_pct > b.votes_with_party_pct) { //comparación lexicogŕafica
		return 1;
	} else if (a.votes_with_party_pct < b.votes_with_party_pct) {
		return -1;
	}
	return 0;
});

estadisticas.least_loyal_members = diezPorCientoAscendente(ordenadoAscendenteByVotesWithPartyPCT);	

ordenadoDescendenteByVoteyWithPartyPCT	=	members.sort(function (a, b) {
	if (a.votes_with_party_pct < b.votes_with_party_pct) { //comparación lexicogŕafica
		return 1;
	} else if (a.votes_with_party_pct > b.votes_with_party_pct) {
		return -1;
	}
	return 0;
});

estadisticas.most_loyal_members = diezPorCientoDescendente(ordenadoDescendenteByVoteyWithPartyPCT);

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

	let leastLoyal = document.getElementById('least-loyal');
	let mostLoyal = document.getElementById('most-loyal');

	leastLoyal.innerHTML = addTableToHTMLLoyal(estadisticas.least_loyal_members);
	mostLoyal.innerHTML = addTableToHTMLLoyal(estadisticas.most_loyal_members);

}


function addTableToHTMLLoyal(data) {

	var elHtml = '<thead class="thead-light"><tr><th>Name</th><th>No. Party Votes</th><th>% Party Votes</th></thead>';
	elHtml += '<tbody>';

	data.forEach(element => {
		elHtml += '<tr>';

		elHtml += '<tr>';
		if (element.middle_name === null) {
			elHtml += '<td><a href="' + element.url + '">' + element.first_name + ' ' + element.last_name + '</td>';
		} else {
			elHtml += '<td><a href="' + element.url + '">' + element.first_name + ' ' + element.middle_name + ' ' + element.last_name + '</a></td>';
		}
		elHtml += '<td class="Numberpartyvotes">' + element.total_votes + '</td>';
		elHtml += '<td class="% Party votes">' + element.votes_with_party_pct + '% </td>';
		elHtml += '</tr>';
	});

	elHtml += '</tbody>';

	return elHtml;
}




