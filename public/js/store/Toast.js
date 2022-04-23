class Toast {

    constructor(status, message) {
        const toast = $(`#toast-${status}`)
        toast.find('.toast-message').html(message)
        toast.removeClass('hidden')
        setTimeout(() => {
            toast.addClass('hidden')
        }, 5000)
    }

    static success(message) {
        new Toast('success', message);
    }

    static warning(message) {
        new Toast('warning', message);
    }

    static danger(message) {
        new Toast('danger', message);
    }
}