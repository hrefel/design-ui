let signup = function () {
    let dataSave = {
        "address": $('#address').val(),
        "maritalStatus": $('#select-marital').val(),
        "nama": $('#nama').val(),
        "gender": $('#select-gender').val(),
        "noTelp": $('#noTelp').val(),
        "lastEducation": $('#select-education').val(),
        "noKTP": $('#nik').val(),
        "dateBirth": $('#born').val(),
        "placeBirth": $('#place').val(),
        "username": $('#username').val(),
        "password": $('#password').val(),
    }
    console.table({dataSave});
    if(dataSave.nama == '') {
        iziToast.warning({
            title: 'Caution',
            position: 'topCenter',
            message: 'Kasian ya anda ga punya nama',
        });
    } else if(dataSave.gender == '') {
        iziToast.warning({
            title: 'Caution',
            position: 'topCenter',
            message: 'Apakah anda tidak memiliki Jenis Kelamin',
        });
    } else if(dataSave.address == '') {
        iziToast.warning({
            title: 'Caution',
            position: 'topCenter',
            message: 'Seriouly? antum ga punya tempat tinggal',
        });
    } else if(dataSave.noTelp == '') {
        iziToast.warning({
            title: 'Caution',
            position: 'topCenter',
            message: 'Di zaman secanggih ini ente ga punya HP?',
        });
    } else {
        $.ajax({
            url: `http://localhost:3000/register/register-user`,
            method: 'POST',
            crossDomain: true,
            data: dataSave,
            beforeSend: function() {
                $('#btn-signup').text('Please Wait...!').attr('disabled','disabled');
            },        
            success: function (respon) {
                $('#btn-signup').text('Sign Up').removeAttr('disabled','disabled');
                iziToast.success({
                    title: 'Success',
                    message: 'Data telah di simpan',
                    position: 'topCenter',
                    transitionIn: 'flipInX',
                    transitionOut: 'flipOutX',
                });
            }
        })
    }
   
}
