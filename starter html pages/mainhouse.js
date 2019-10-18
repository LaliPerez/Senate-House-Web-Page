var members = data.results[0].members

//  Llenar los member por partido

members.forEach(member => {
  if (member.party === 'D') {
    estadisticas.partys[0].members.push(member);
  }

  if (member.party === 'R') {
    estadisticas.partys[1].members.push(member);
  }

});


estadisticas.partys[0]["%_voted_with-party"] = getVotedByPartyPCT(estadisticas.partys[0].members);
estadisticas.partys[1]["%_voted_with-party"] = getVotedByPartyPCT(estadisticas.partys[1].members);


estadisticas.total_noofmembers = estadisticas.partys[0].members.length + estadisticas.partys[1].members.length;
console.log(estadisticas.total_noofmembers);

estadisticas.total_pctvotedbyparty = ((parseInt(estadisticas.partys[0]["%_voted_with-party"]) + parseInt(estadisticas.partys[1]["%_voted_with-party"])) / 2 ).toFixed(2);

function getVotedByPartyPCT(membersParty) {
  let pct = 0;

  membersParty.forEach(element => {
    pct = pct + element["votes_with_party_pct"];
  })

  return (pct / membersParty.length).toFixed(2);
}

createSenateTable(members);

function createSenateTable(d) {

  var elSenateTable = document.getElementById('senate-table-glance');
  tableEl = addTableToHTML(d);

  elSenateTable.innerHTML = tableEl;

}

addTableToHTML(data.results[0].members);

function addTableToHTML(members) {


  var elHtml = '<thead class="thead-light"><tr><th>Party</th><th>No. of Reps.</th><th>% Voted W/Party</th></thead>';
  elHtml += '<tbody>';

  elHtml += '<tr>';
  elHtml += '<td class="Party">' + estadisticas.partys[0].description + '</td>';
  elHtml += '<td class="Party">' + estadisticas.partys[0].members.length + '</td>';
  elHtml += '<td class="Party">' + estadisticas.partys[0]["%_voted_with-party"] + ' % </td>';
  elHtml += '</tr>';

  elHtml += '<tr>';
  elHtml += '<td class="Party">' + estadisticas.partys[1].description + '</td>';
  elHtml += '<td class="No. of Reps.">' + estadisticas.partys[1].members.length + '</td>';
  elHtml += '<td class="Party">' + estadisticas.partys[1]["%_voted_with-party"] + ' % </td>';
  elHtml += '</tr>';

  elHtml += '<tr>';
  elHtml += '<td class="Party">' + "Total" + '</td>';
  elHtml += '<td class="% Voted W/Party">' + estadisticas.total_noofmembers + '</td>';
  elHtml += '<td class="Party">' + estadisticas.total_pctvotedbyparty + ' % </td>';
  elHtml += '</tr>';
  elHtml += '</tbody>';

  return elHtml;
}