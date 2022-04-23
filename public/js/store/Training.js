class Training extends Token {

    create(e) {
        e.preventDefault()
        const form = $(e.target),
            name = form.find('#name'),
            trainingTypeId = form.find('#trainingTypeId'),
            selects = form.find('select[name="exercises"]'),
            userId =new Auth().getUser().id
        let exercises = []
        selects.each((i,e)=>{
            exercises.push($(e).val())
        })

        $.ajax({
            url: '/api/training/create',
            headers: {
                authorization: this.token
            },
            type: 'post',
            data: {
                name:name.val(),
                trainingTypeId:trainingTypeId.val(),
                exercises,
                userId
            },
            dataType: 'json'
        }).done((res) => {
            const modal =$('#createTraining')
            name.val('')
            trainingTypeId.val('')
            selects.each((i,e)=>{
                if(i!==0) $(e).parents('.exercise_container').remove()
            })
            if (res.error) {
                Toast.danger(res.message)
                modalToggle(modal)
                return
            }
            modalToggle(modal)
            Toast.success(res.message)
        })
    }

    createType(e) {
        e.preventDefault()
        const form = $(e.target), name = form.find('#name').val()
        $.ajax({
            url: '/api/training/createType',
            headers: {
                authorization: this.token
            },
            type: 'post',
            data: {
                name
            },
            dataType: 'json'
        }).done((res) => {
            if (res.error) {
                Toast.danger(res.message)
                modalToggle($('#createTrainingType'))
                return
            }
            modalToggle($('#createTrainingType'))
            Toast.success(res.message)
            if ($('select#trainingType').length) {
                $('select#trainingType').append(`<option value="${res.trainingType.id}">${res.trainingType.name}</option>`)
            } else {
                this.trainingType(res.trainingType)
            }
        })
    }

    trainingType(data) {
        const container = $('#trainingTypes_container')
        const card = $(`<figure id="card${data.id}" class="bg-zinc-800 rounded-lg border border-red-500 shadow-ms">
                <div class="flex justify-between px-4 pt-4 mb-2">
                    <div class="flex flex-col my-1">
                        <p class="trainingType_name text-red-500 font-bold ">${data.name}</p>
                    </div>
                    <button id="dropdownButton${data.id}" data-dropdown-toggle="dropdown${data.id}"
                            class="hidden sm:inline-block text-gray-100 hover:bg-zinc-600 focus:outline-none focus:ring-4 focus:outline-none focus:ring-zinc-500 rounded-lg text-sm p-1.5"
                            type="button">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                        </svg>
                    </button>
                    <div id="dropdown${data.id}"
                         class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow">
                        <ul class="py-1" aria-labelledby="dropdownButton${data.id}">
                            <li>
                                <a type="button"
                                   data-id="${data.id}"
                                   data-name="${data.name}"
                                   class="cursor-pointer editTrainingType block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Изменить</a>
                            </li>
                            <li>
                                <a data-id="${data.id}" type="button"
                                   class="cursor-pointer deleteTrainingType block py-2 px-4 text-sm text-red-600 hover:bg-gray-100">Удалить</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </figure>`)
        container.append(card)
    }

    update(e) {
        e.preventDefault()
        const form = $(e.target),
            id = form.find('#id').val(),
            name = form.find('#name').val(),
            trainingTypeId = form.find('#trainingTypeId').val(),
            selects = form.find('select[name="exercises"]')
        let exercises = []
        selects.each((i,e)=>{
            exercises.push($(e).val())
        })
        $.ajax({
            url:'/api/training/update',
            headers:{
                authorization:this.token
            },
            type: 'post',
            data:{
                id,
                name,
                trainingTypeId,
                exercises
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

    updateType(e) {
        e.preventDefault()
        const form = $(e.target),
            id = form.find('#id').val(),
            name = form.find('#name').val(),
            modal = $('#updateTrainingType')
        $.ajax({
            url:'/api/training/updateType',
            headers:{
                authorization:this.token
            },
            type: 'post',
            data:{
                id,
                name
            },
            dataType:'json'
        }).done((res)=>{
            if(res.error){
                Toast.danger(res.message)
                modalToggle(modal)
                return
            }
            modalToggle(modal)
            Toast.success(res.message)
            const container = $('#trainingTypes_container')
            const card = container.find(`#card${id}`)
            card.find('.editTrainingType')
                .data('name',name)
            card.find('.trainingType_name').html(name)
        })
    }

    delete(id) {
        $.ajax({
            url: "/api/training/delete",
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
            const container = $('#trainings_container')
            container.find(`#card${id}`).remove()
        })
    }

    deleteType(id) {
        $.ajax({
            url: "/api/training/deleteType",
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
            const container = $('#trainingTypes_container')
            container.find(`#card${id}`).remove()
        })
    }
}
