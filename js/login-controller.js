let menu = [];
$(document).ready(function () {
   if(localStorage.getItem('user') != null) {
       return window.location.replace('index.html');
   }
});
let login = function() {
    $('#loader').show();
    let dataUser = {
        "username": $('#username').val(),
        "password": $('#password').val()
    }
    $.ajax({
        url: `http://localhost:3000/users/auth`,
        method: 'POST',
        data: dataUser,
        dataType: 'json',
        success:function(res) {
            let status = res.success;
            if(status === false) {
                iziToast.warning({
                    title: 'WARNING',
                    message: `Username atau Password Salah`,
                    position: 'topCenter',
                    transitionIn: 'flipInX',
                    transitionOut: 'flipOutX',
                });
                $('#loader').hide();
            } else if(status === true) {
                localStorage.setItem('user', JSON.stringify(res.user));
                setTimeout(function() {
                    $('#loader').hide();
                    window.location.replace('index.html');
                }, 3000);
            }
        },
        error:function(err){
            $('#loader').hide();
            console.log(err)
            iziToast.error({
                title: 'ERROR',
                message: `${err.status}`,
                position: 'topCenter',
                transitionIn: 'flipInX',
                transitionOut: 'flipOutX',
            });
        }
    });
    // let username = $('#userName').val(),
    //     userLogin = {
    //     "name": username,
    //     "id": Math.floor(Math.random() * 100 + 100),
    //     "address":'Cidahu',
    //     "auth-token": `ey${Math.random().toString(36).substr(2, 9)}`
    // }
    // localStorage.setItem('user', JSON.stringify(userLogin));
    // setTimeout(function() {
    //     $('#loader').hide();
    //     window.location.replace('index.html');
    // }, 3000);
}
let sign = function () {
    window.location.href = 'sign-up.html'
}