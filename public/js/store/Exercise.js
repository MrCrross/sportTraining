class Exercise extends Token{

    create(e){
        e.preventDefault()
        const form = $(e.target)
            ,name = form.find('#name')
            ,exerciseTypeId = form.find('#exerciseType')
            ,description = form.find('#description')
            ,duration = form.find('#duration')
            ,rest = form.find('#rest')
            ,repetitions = form.find('#repetitions')
        $.ajax({
            url:'/api/exercise/create',
            headers:{
                authorization:this.token
            },
            type: 'post',
            data:{
                name: name.val(),
                exerciseTypeId:exerciseTypeId.val(),
                description:description.val(),
                duration:duration.val(),
                rest:rest.val(),
                repetitions:repetitions.val()
            },
            dataType:'json'
        }).done((res)=>{
            name.val('')
            description.val('')
            duration.val('')
            rest.val('')
            repetitions.val('')
            if(res.error){
                Toast.danger(res.message)
                modalToggle($('#createExercise'))
                return
            }
            modalToggle($('#createExercise'))
            Toast.success(res.message)
        })
    }

    createType(e){
        e.preventDefault()
        const form = $(e.target),
            name = form.find('#name'),
            modal = $('#createExerciseType')
        $.ajax({
            url:'/api/exercise/createType',
            headers:{
                authorization:this.token
            },
            type:'post',
            data:{
                name: name.val()
            },
            dataType:'json'
        }).done((res)=>{
            name.val('')
            if(res.error){
                Toast.danger(res.message)
                modalToggle(modal)
                return
            }
            modalToggle(modal)
            Toast.success(res.message)
            if($('select#exerciseType').length){
                $('select#exerciseType').append(`<option value="${res.exerciseType.id}">${res.exerciseType.name}</option>`)
            }else{
                this.exerciseType(res.exerciseType)
            }
        })
    }

    exerciseType(data){
        const container = $('#exerciseTypes_container')
        const card = $(`<figure id="card${data.id}" class="bg-zinc-800 rounded-lg border border-red-500 shadow-ms">
                <div class="flex justify-between px-4 pt-4 mb-2">
                    <div class="flex flex-col my-1">
                        <p class="exerciseType_name text-red-500 font-bold ">${data.name}</p>
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
                                   class="cursor-pointer editExerciseType block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Изменить</a>
                            </li>
                            <li>
                                <a data-id="${data.id}" type="button"
                                   class="cursor-pointer deleteExerciseType block py-2 px-4 text-sm text-red-600 hover:bg-gray-100">Удалить</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </figure>`)
        container.append(card)
    }

    update(e){
        e.preventDefault()
        const form = $(e.target),
            id = form.find('#id').val()
            ,name = form.find('#name').val()
            ,exerciseTypeId = form.find('#exerciseTypeId').val()
            ,description = form.find('#description').val()
            ,duration = form.find('#duration').val()
            ,rest = form.find('#rest').val()
            ,repetitions = form.find('#repetitions').val()
        $.ajax({
            url:'/api/exercise/update',
            headers:{
                authorization:this.token
            },
            type: 'post',
            data:{
                id,
                name,
                exerciseTypeId,
                description,
                duration,
                rest,
                repetitions
            },
            dataType:'json'
        }).done((res)=>{
            if(res.error){
                Toast.danger(res.message)
                modalToggle($('#updateExercise'))
                return
            }
            modalToggle($('#updateExercise'))
            Toast.success(res.message)
            const container = $('#exercises_container')
            const card = container.find(`#card${id}`)
            card.find('.editExercise')
                .data('name',name)
                .data('type',exerciseTypeId)
                .data('description',description)
                .data('duration',duration)
                .data('rest',rest)
                .data('repetitions',repetitions)
            card.find('.exercise_name').html(res.exerciseType.name+': '+name)
            card.find('.exercise_description').html(description)
            card.find('.exercise_duration').html(duration+' сек.')
            card.find('.exercise_repetitions').html(repetitions+' раз')
            card.find('.exercise_rest').html(rest+' сек.')
        })
    }

    updateType(e){
        e.preventDefault()
        const form = $(e.target),
            id = form.find('#id').val()
            ,name = form.find('#name').val()
        $.ajax({
            url:'/api/exercise/updateType',
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
                modalToggle($('#updateExerciseType'))
                return
            }
            modalToggle($('#updateExerciseType'))
            Toast.success(res.message)
            const container = $('#exerciseTypes_container')
            const card = container.find(`#card${id}`)
            card.find('.editExerciseType')
                .data('name',name)
            card.find('.exerciseType_name').html(name)
        })
    }

    delete(id){
        $.ajax({
            url: "/api/exercise/delete",
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
            const container = $('#exercises_container')
            container.find(`#card${id}`).remove()
        })
    }

    deleteType(id){
        $.ajax({
            url: "/api/exercise/deleteType",
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
            const container = $('#exerciseTypes_container')
            container.find(`#card${id}`).remove()
        })
    }
}

