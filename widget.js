

let name = BWProperties.participant.account.first_name + ' ' + BWProperties.participant.account.last_name;

$('#' + BWProperties.namespace + '-name-' + BWProperties.participant.account.id).html(name);