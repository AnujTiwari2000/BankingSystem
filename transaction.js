
// Get the modal
var amodal = document.getElementById("myModal");
var modal = document.getElementById("anujmodal");


// Get the button that opens the modal
var abtn = document.getElementById("open");
var btn = document.getElementById("myBtn");



// Get the <span> element that closes the modal
var aspan = document.getElementsByClassName("close")[0];
var span = document.getElementsByClassName("anujclose")[0];



// When the user clicks the button, open the modal 
abtn.onclick = function () {
    amodal.style.display = "block";
}
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
aspan.onclick = function () {
    amodal.style.display = "none";
}
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == amodal) {
        amodal.style.display = "none";
    }
}
awindow.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Transaction modal code 


function sendMoney() {
    var Sendername = document.getElementById("Sendername").value;
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);

    if (enterAmount > 100000) {
        alert("daily limit reached.")
    }if(enterAmount < 0){
        alert("invalid amount!!")
    }
     else {
        var findSenderBankAccount = Sendername + "BankBalance";
        var senderamount = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;

        var findUserBankAccount = enterName + "BankBalance";
        var userAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;

        document.getElementById(findUserBankAccount).innerHTML = userAmount;
        document.getElementById(findSenderBankAccount).innerHTML = senderamount;

        alert(`Successful Transaction !!  
      Rs ${enterAmount} is sent to ${enterName}@gmail.com by ${Sendername}`)
    }

    

// transaction history 

var createPTag = document.createElement("li");
var textNode = document.createTextNode(`Rs ${enterAmount} is sent to recepient with Email-id ${enterName}@gmail.com on ${Date()}.`);
createPTag.appendChild(textNode);
var element = document.getElementById("transaction-history-body");
element.insertBefore(createPTag, element.firstChild);
}



