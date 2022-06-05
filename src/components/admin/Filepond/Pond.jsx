import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileRename from 'filepond-plugin-file-rename';
// Import the plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { Fragment } from 'react'

registerPlugin(
    FilePondPluginFileEncode,
    FilePondPluginImagePreview,
    FilePondPluginFileRename);


const Pond = ({ multiple, name }) => {
    return (
        <span className="pond" name={name}>
            <FilePond
                allowMultiple={multiple}
                labelIdle='Arrastra & suelta tus archivos ó <span class="filepond--label-action">buscalos</span>'
            />
        </span>

    )
}

export default Pond