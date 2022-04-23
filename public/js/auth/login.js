$('#form_login').on('submit',function(e){
    e.preventDefault()
    const name = $('#name').val()
    const password = $('#password').val()
    $.ajax({
        url:'/api/auth/login',
        type:'post',
        data:{
            name,
            password
        },
        dataType:'json'
    }).done((res)=>{
        if(res.error){
            Toast.warning(res.message)
            return
        }
        localStorage.setItem('token','Bearer '+res.token)
        location.href='/'
    })
})