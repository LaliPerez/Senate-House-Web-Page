var members = data.results[0].members

var estadisticas = {
    "partys": [{
            "party": "D",
            "description": "Democrats",
            "%_voted_with-party": 0,
            "missed_votes_pct": 0,
            "members": [],
        },
        {
            "party": "R",
            "description": "Republicans",
            "%_voted_with-party": 0,
            "missed_votes_pct": 0,
            "members": [],
        },
        {
            "party": "I",
            "description": "Independents",
            "%_voted_with-party": 0,
            "missed_votes_pct": 0,
            "members": [],
        }
    ],
    "total_noofmembers": 0,
    "total_pctvotedbyparty": 0,
    "least_engaged_members": [],
    "most_engaged_members": [],
    "least_loyal_members": [],
    "most_loyal_members": [],
    "missed_votes_pct": [],
    "votes_with_party_pct": [],
}

var ordenadoascendente = members.sort(function (a, b) {
    return a.missed_votes_pct - b.missed_votes_pct;
});
var ordenadodescendente = members.sort(function (a, b) {
    return b.missed_votes_pct - a.missed_votes_pct;
});


function diezPorCientoascendente(){

}
estadisticas.least_engaged_members = diezPorCientoascendente("peores", members, "missed_votes_pct");
estadisticas.least_engaged_members = diezPorCientoascendente("peores", members, "least_loyal_members");


function diezPorCientodescendente(){

}
estadisticas.most_engaged_members = diezPorCientodescendente("mejores", members, "most_engaged_members");
estadisticas.most_loyal_members = diezPorCientodescendente("mejores", members, "most_loyal_members");


// ordeno el array de menor a mayor




diezPorCientoascendente = ordenadoascendente.filter((member, indice) => indice / ordenadoascendente.length * 100 < 10)

diezPorCientodescendente = ordenadodescendente.filter((member, indice) => indice / ordenadodescendente.length * 100 < 10)

/* var tabla = '<thead class="thead-light"><tr><th>Full Name</th><th>Party</th><th>State </th><th>Seniority</th><th>Percentage of votes with party</th></tr></thead>';

  tabla += '<tbody>';

  membersArray.forEach(function (member) {
    tabla += '<tr>';

    if (member.middle_name === null) {
      tabla += '<td><a href="' + member.url + '">' + member.first_name + ' ' + member.last_name + '</td>';
    } else {
      tabla += '<td><a href="' + member.url + '">' + member.first_name + ' ' + member.middle_name + ' ' + member.last_name + '</a></td>';
    }
    tabla += '<td class="party">' + member.party + '</td>';

    tabla += '<td class="state">' + member.state + '</td>';

    // addToDropDown(member.state);

    tabla += '<td>' + member.seniority + '</td>';

    tabla += '<td> % ' + member.votes_with_party_pct + '</td>';

    tabla += '</tr>';
  });

  tabla += '</tbody>';

  return tabla;

} */
createSenateTable(members);

function createSenateTable(d) {

  var elSenateTable = document.getElementById('least-engaged');
  tableEl = addTableToHTML(d);

  elSenateTable.innerHTML = tableEl;

}

addTableToHTML(data.results[0].members);

function addTableToHTML(members) {

  var elHtml = '<thead class="thead-light"><tr><th>Name</th><th>Number of missed votes</th><th>% Missed</th></thead>';
  elHtml += '<tbody>';

  elHtml += '<tr>';
  elHtml += '<td class="Name">' + estadisticas.partys.members.ordenadoascendente + '</td>';
  elHtml += '<td class="Numberofmissedvotes">' + estadisticas.partys.members["missed_votes_pct"] + '</td>';
  elHtml += '<td class="% Missed">' + diezPorCientoascendente["least_loyal_members"] + '</td>';
  elHtml += '</tr>';

  elHtml += '</tbody>';

  return elHtml;
}

function createSenateTable(d) {

    var elSenateTable = document.getElementById('most-engaged');
    tableEl = addTableToHTML(d);
  
    elSenateTable.innerHTML = tableEl;
  
  }
  
  addTableToHTML(data.results[0].members);
  
  function addTableToHTML(members) {
  
    var elHtml = '<thead class="thead-light"><tr><th>Name</th><th>Number of missed votes</th><th>% Missed</th></thead>';
    elHtml += '<tbody>';
  
    elHtml += '<tr>';
    elHtml += '<td class="Name">' + estadisticas.partys[0].members + '</td>';
    elHtml += '<td class="Name">' + estadisticas.partys[0].members.ordenado + '</td>';
    elHtml += '<td class="Name">' + estadisticas.partys[0]["least_loyal_members"] + '</td>';
    elHtml += '</tr>';
  
    elHtml += '<tr>';
    elHtml += '<td class="Party">' + estadisticas.partys[1].missed_votes_pct + '</td>';
    elHtml += '<td class="No. of Reps.">' + estadisticas.partys[1].members.length + '</td>';
    elHtml += '<td class="Party">' + estadisticas.partys[1]["%_voted_with-party"] + '</td>';
    elHtml += '</tr>';
  
    elHtml += '<tr>';
    elHtml += '<td class="Party">' + estadisticas.partys[2].description + '</td>';
    elHtml += '<td class="% Voted W/Party">' + estadisticas.partys[2].members.length + '</td>';
    elHtml += '<td class="Party">' + estadisticas.partys[2]["%_voted_with-party"] + '</td>';
    elHtml += '</tr>';
  
    elHtml += '<tr>';
    elHtml += '<td class="Party">' + "Total" + '</td>';
    elHtml += '<td class="% Voted W/Party">' + estadisticas.total_noofmembers + '</td>';
    elHtml += '<td class="Party">' + estadisticas.total_pctvotedbyparty + '</td>';
    elHtml += '</tr>';
    elHtml += '</tbody>';
  
    return elHtml;
  }