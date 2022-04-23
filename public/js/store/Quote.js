class Quote extends Token{

    create(e) {
        e.preventDefault()
        const form = $(e.target)
        const author = form.find('#author').val()
        const name = form.find('#name').val()
        const modal = $('#createQuote')
        $.ajax({
            url: "/api/quote/create",
            headers: {
                authorization: this.token
            },
            type: 'post',
            data: {
                name,
                author
            },
            dataType: 'json'
        }).done((res) => {
            if (res.error) {
                Toast.warning(res.message)
                modalToggle(modal)
                return
            }
            this.updateQuotesIndex(res.quote)
            Toast.success(res.message)
            modalToggle(modal)
        })
    }

    update(e){
        e.preventDefault()
        const form = $(e.target)
        const author = form.find('#author').val()
        const name = form.find('#name').val()
        const id = form.find('#id').val()
        const modal = $('#updateQuote')
        $.ajax({
            url: "/api/quote/update",
            headers: {
                authorization: this.token
            },
            type: 'post',
            data: {
                id,
                name,
                author
            },
            dataType: 'json'
        }).done((res) => {
            if (res.error) {
                Toast.warning(res.message)
                modalToggle(modal)
                return
            }
            Toast.success(res.message)
            const container = $('#quotes_container')
            const card = container.find(`#card${id}`)
            card.find('.editQuote').data('name',name).data('author',author)
            card.find('.quote_name').html(name)
            card.find('.quote_author').html(author)
            modalToggle(modal)
        })
    }

    updateQuotesIndex(quote) {
        const container = $('#quotes_container')
        const {id,name,author}=quote
        const card = $(`<div id="${{id}}" class="bg-zinc-800 rounded-lg border border-red-500 shadow-ms">` +
            '            <div class="flex justify-end px-4 pt-4">' +
            '                <button id="dropdownButton" data-dropdown-toggle="dropdown"' +
            '                        class="hidden sm:inline-block text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"' +
            '                        type="button">' +
            '                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">' +
            '                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>' +
            '                    </svg>' +
            '                </button>' +
            '                <div id="dropdown"' +
            '                     class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow">' +
            '                    <ul class="py-1" aria-labelledby="dropdownButton">' +
            '                        <li>' +
            `                            <a type="button" data-id="${id}" data-name="${name}" data-author="${author}"` +
            '                               class="block py-2 px-4 editQuote text-sm text-gray-700 hover:bg-gray-100">Изменить</a>' +
            '                        </li>' +
            '                        <li>' +
            `                            <a data-id="${id}" type="button"` +
            '                               class="block py-2 px-4 deleteQuote text-sm text-red-600 hover:bg-gray-100">Удалить</a>' +
            '                        </li>' +
            '                    </ul>' +
            '                </div>' +
            '            </div>' +
            '            <div class="flex flex-col items-end justify-center pb-10 mx-4">' +
            `              <p class="quote_name text-red-500 text-md">"${name}"</p>` +
            `                <p class="quote_author text-sm text-gray-400 italic">- ${author}</p>` +
            '            </div>' +
            '        </div>')
        container.append(card)
    }

    delete(id){
        $.ajax({
            url: "/api/quote/delete",
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
            const container = $('#quotes_container')
            container.find(`#card${id}`).remove()
        })
    }
}