$(document).ready(function () {
    getEducation();
    getGender();
    getMaritalStatus();
});


let getGender = function () {
    $.getJSON('../json/gender.json', function (data) {
        for(let i = 0; i < data.length; i++) {
            $('#select-gender').append(`
                <option value="${data[i].nama}">${data[i].nama}</option>
            `)
        }
    });
}

let getMaritalStatus = function () {
    $.getJSON('../json/marital-status.json', function (data) {
        for(let i = 0; i < data.length; i++) {
            $('#select-marital').append(`
                <option value="${data[i].nama}">${data[i].nama}</option>
            `);
        }
    });
}

let getEducation = function () {
    $.getJSON('../json/education.json', function (data) {
        for(let i = 0; i < data.length; i++) {
            $('#select-education').append(`
                <option value="${data[i].nama}">${data[i].nama}</option>
            `);
        }
    });
}