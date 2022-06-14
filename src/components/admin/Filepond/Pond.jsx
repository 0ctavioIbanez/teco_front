import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileRename from 'filepond-plugin-file-rename';
// Import the plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(
    FilePondPluginFileEncode,
    FilePondPluginImagePreview,
    FilePondPluginFileRename);

const Pond = ({ multiple, name, handler, state }) => {
    
    const addPond = ({getFileEncodeBase64String, id}) => {

        if (typeof handler === 'function') {
            if (state) {
                return handler([...state, {id: id, base64: getFileEncodeBase64String()}])
            }
            handler({id, base64: getFileEncodeBase64String()});
        }
    };

    const removePond = id => {
        return handler(id, true);
    }

    return (
        <span className="pond" name={name}>
            <FilePond
                onaddfile={(e, data) => addPond(data)}
                onremovefile={(e, data) => removePond(data.id) }
                allowMultiple={multiple}
                labelIdle='Arrastra & suelta tus archivos ó <span class="filepond--label-action">buscalos</span>'
            />
        </span>

    )
}

export default Pond