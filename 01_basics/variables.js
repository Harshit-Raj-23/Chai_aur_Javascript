const accountId = 144553
let accountEmail = "harshit@google.com"
var accountPassword = "12345"
accountCity = "Jhumri Telaiya"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hr@hr.com"
accountPaassword = "23232323"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to var
because of issue in block and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
