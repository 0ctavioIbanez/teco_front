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

    success(title, text = null) {
        this.swal.fire({
            icon: 'success',
            title,
            text,
        })
    }

    error(title, text = null) {
        this.swal.fire({
            icon: 'error',
            title,
            text,
        })
    }
}

export const message = new Message();