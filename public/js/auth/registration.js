$('#password_confirm').on('input', function (e) {
    const message = $('#message')
    const submit = $('button[type="submit"]')
    if ($(e.target).val() !== $('#password').val()) {
        message.removeClass('hidden')
        message.html('Пароли не совпадают')
        submit.attr('disabled', 'disabled')
    } else {
        message.addClass('hidden')
        message.html('')
        submit.removeAttr('disabled')
    }
})
$('#password').on('input', function (e) {
    const message = $('#message')
    const submit = $('button[type="submit"]')
    if ($(e.target).val() !== $('#password_confirm').val()) {
        message.removeClass('hidden')
        message.html('Пароли не совпадают')
        submit.attr('disabled', 'disabled')
    } else {
        message.addClass('hidden')
        message.html('')
        submit.removeAttr('disabled')
    }
})
$('#form_registration').on('submit', function (e) {
    e.preventDefault()
    const last_name = $('#last_name').val()
    const first_name = $('#first_name').val()
    const name = $('#name').val()
    const password = $('#password').val()
    const password_confirm = $('#password_confirm').val()
    const role = 1;
    const message = $('#message')
    if (password !== password_confirm) {
        message.removeClass('hidden')
        message.html('Пароли не совпадают')
        return
    }
    $.ajax({
        url: '/api/auth/registration',
        type: 'post',
        data: {
            last_name,
            first_name,
            name,
            password,
            role
        },
        dataType: 'json'
    }).done((res)=>{
        if(res.error){
            Toast.warning(res.message)
            return
        }
        localStorage.setItem('token','Bearer '+res.token)
        location.href='/'
    })
})