let menu = [];
$(document).ready(function () {
   if(localStorage.getItem('user') != null) {
       return window.location.replace('index.html');
   }
});
let login = function() {
    $('#loader').show();
    let username = $('#userName').val(),
        userLogin = {
        "name": username,
        "id": Math.floor(Math.random() * 100 + 100),
        "address":'Cidahu',
        "auth-token": `ey${Math.random().toString(36).substr(2, 9)}`
    }
    localStorage.setItem('user', JSON.stringify(userLogin));
    setTimeout(function(){ 
        // alert('Hello');
        $('#loader').hide();
        window.location.replace('index.html');
    }, 3000);
    
}