class Auth {

    token=''
    rolePage=[3]

    constructor() {
        if(this.check()) {
            this.openMenu()
        }else {
            this.openReg()
        }
        this.checkPage()
    }

    getUser(){
        return this.jwtDecode(this.token)
    }

    checkPage(){
        let role =3
        let flag = true
        if(this.check()) {
            role =Number(this.getUser().role)
        }
        this.rolePage.forEach((page)=>{
            if(page===role){
                flag=false
            }
        })
        if (flag) location.href='/'
    }
    openMenu(){
        const user = this.getUser()
        const menu = $('#user-menu')
        menu.find('.user_name').html(user.name)
        menu.find('.user_role').html(this.getNameRole(user.role))
        this.openMenuInRole(user.role)
        menu.removeClass('hidden')
        $('#reg-link').remove()
    }

    openReg(){
        const reg = $('#reg-link')
        $('#user-menu').remove()
        reg.removeClass('hidden')
        reg.find('ul').removeClass('hidden')
        this.openMenuInRole(3)
    }

    openMenuInRole(role){
        const menuAdmin =$('.menu-admin'),
            menuTrainer =$('.menu-trainer'),
            menuUser = $('.menu-user')
        switch (Number(role)) {
            case 1:
                menuAdmin.removeClass('hidden')
                menuTrainer.remove()
                menuUser.remove()
                break;
            case 2:
                menuAdmin.remove()
                menuUser.remove()
                menuTrainer.removeClass('hidden')
                break;
            case 3:
                menuAdmin.remove()
                menuTrainer.remove()
                menuUser.removeClass('hidden')
                break;
            default:
                menuAdmin.remove()
                menuTrainer.remove()
                menuUser.removeClass('hidden')
                break;
        }
    }

    getNameRole(role){
        switch (Number(role)){
            case 1: return 'Администратор'; break;
            case 2: return 'Тренер'; break;
            case 3: return 'Пользователь'; break;
        }
    }

    check(){
        if(localStorage.getItem('token')){
            this.token=localStorage.getItem('token')
            this.rolePage = JSON.parse(localStorage.getItem('page'))
            if(this.getUser().exp <= Date.now()){
                localStorage.removeItem('token')
                location.href='/auth/login'
                return false;
            }
            return true;
        }
        return false;
    }

    logout(){
        this.token=''
        localStorage.removeItem('token')
    }

    jwtDecode(token){
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    }

}

