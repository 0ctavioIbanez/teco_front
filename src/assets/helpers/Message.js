import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

class Message {
    constructor() {
        this.swal = withReactContent(Swal)
    }

    loading(html = null) {
        this.swal.fire({
            html: `<h1>${html}</h1>`,
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading()
        })
    }

    async success(title, text = null) {
        return this.swal.fire({
            icon: 'success',
            title,
            text,
        })
    }

    async error(title, text = null) {
        return this.swal.fire({
            icon: 'error',
            title,
            text,
        })
    }

    async question(title = '', text = '') {
        return this.swal.fire({
            icon: 'question',
            title,
            text,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Continuar',
            showCancelButton: true,

        })
    }

    async input(title) {
        return this.swal.fire({
            input: "password",
            title,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Continuar',
            showCancelButton: true,

        })
    }
}

export const message = new Message();