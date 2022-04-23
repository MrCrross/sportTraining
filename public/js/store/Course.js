class Course extends Token{

    create(e){
        e.preventDefault()
        const form = $(e.target),
            name = form.find('#name').val(),
            selects = form.find('select[name="trainings"]')
        let trainings = []
        selects.each((i,e)=>{
            trainings.push($(e).val())
        })
        $.ajax({
            url:'/api/course/create',
            headers:{
                authorization:this.token
            },
            type: 'post',
            data:{
                name,
                trainings,
                userId:new Auth().getUser().id
            },
            dataType:'json'
        }).done((res)=>{
            if(res.error){
                Toast.danger(res.message)
                return
            }
            Toast.success(res.message)
        })
    }

    update(e){
        e.preventDefault()
        const form = $(e.target),
            id = form.find('#id').val(),
            name = form.find('#name').val(),
            selects = form.find('select[name="trainings"]')
        let trainings = []
        selects.each((i,e)=>{
            trainings.push($(e).val())
        })
        $.ajax({
            url:'/api/course/update',
            headers:{
                authorization:this.token
            },
            type: 'post',
            data:{
                id,
                name,
                trainings
            },
            dataType:'json'
        }).done((res)=>{
            if(res.error){
                Toast.danger(res.message)
                return
            }
            Toast.success(res.message)
        })
    }

    delete(id){
        $.ajax({
            url: "/api/course/delete",
            headers: {
                authorization: this.token
            },
            type: 'post',
            data: {
                id
            },
            dataType: 'json'
        }).done((res) => {
            if (res.error) {
                Toast.warning(res.message)
                return
            }
            Toast.success(res.message)
            const container = $('#courses_container')
            container.find(`#card${id}`).remove()
        })
    }

    deleteDay(id,day){
        $.ajax({
            url: "/api/course/day/delete",
            headers: {
                authorization: this.token
            },
            type: 'post',
            data: {
                id,
                day
            },
            dataType: 'json'
        }).done((res) => {
            if (res.error) {
                Toast.warning(res.message)
                return
            }
            Toast.success(res.message)
            const container = $('#courses_container')
            container.find(`#course${id}Day${day}`).remove()
        })
    }

}