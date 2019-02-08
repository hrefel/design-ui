$(document).ready(function () {
    authPage();
    getMenu();
});

let authPage = function() {
    let user = localStorage.getItem('user')
    let userParse = JSON.parse(localStorage.getItem('user'))
    if (user == undefined || user == null) {
        return window.location.replace('login.html');
    } else {
        $('#username').append(`<a class="user-name" href="#"><strong style="font-weight:bold">Welcome</strong>, ${userParse.name}</a>`);
    }
}

let logout = function () {
   localStorage.clear();
   authPage();
}

$('#logout').on('click', function () {
    logout();
});

let getMenu = function () {
    let menu = JSON.parse(localStorage.getItem('menu'));
    // console.table({menu})
    // $('#menu-navbar').html('');
    // for(let i = 0; i < menu.length; i++) {
    //     $('#menu-navbar').append(`
    //         <li>
    //         <a href="#">${menu[i].menuName}</a>
    //         <div class="uk-navbar-dropdown animated-menu">
    //         <ul class="uk-nav uk-navbar-dropdown-nav" id="menu-${menu[i].menuId}"></ul>
    //         <li class="uk-active"><a href="#">${menu[i].child.childName}</a></li>
    //         </div>
    //         </li>
    //     `);
    //     for(let ii = 0; ii < menu[i].child.child; ii++) {

    //     }
    // }
    
}