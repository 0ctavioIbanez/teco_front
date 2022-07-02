import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileRename from 'filepond-plugin-file-rename';
// Import the plugin code
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
import { useState, useEffect } from 'react';

// Import the plugin styles
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css';
// Import the plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import { useRef } from 'react'

registerPlugin(
    FilePondPluginFileEncode,
    FilePondPluginImagePreview,
    FilePondPluginFileRename,
    FilePondPluginFilePoster);

const Pond = ({ multiple, name, handler, onRemove, files }) => {
    const [filesState, setFilesState] = useState(null);
    const [shouldEmit, setShouldEmit] = useState(true);
    let temporalPonds = [];

    const first = useRef(null)

    useEffect(() => {
        if (files) {
            if (files.length) {
                setShouldEmit(false);
                const _files = files.filter(item => item.id && item.base64);
                const result = _files.map(file => ({
                    source: file.id,
                    options: {
                        file: {
                            id: file.id
                        },
                        metadata: {
                            id: file.id,
                            poster: `data:image/jpeg;base64,${file.base64}`
                        }
                    }
                }));
                setFilesState(result)
            } else {
                setFilesState(null)
            }
        }
    }, [files])


    const addPond = ({ id, getFileEncodeBase64String }) => {
        if (typeof handler !== 'function' || !shouldEmit) {
            return
        }

        const isMultiple = first.current.getFiles().length;
        const payload = {id, base64: getFileEncodeBase64String()};
        
        if (isMultiple > 1) {
            temporalPonds = [...temporalPonds, payload];
            if (isMultiple === temporalPonds.length) {
                return handler(temporalPonds);
            }
        } else {
            handler(payload);
        }
    };

    const removePond = getMetadata => {
        return onRemove(getMetadata().id);
    }

    return (
        <span className="pond" name={name}>
            <FilePond
                ref={first}
                onaddfile={(e, data) => addPond(data)}
                onremovefile={(e, { getMetadata }) => removePond(getMetadata)}
                allowMultiple={multiple}
                files={filesState}
                labelIdle='Arrastra & suelta tus archivos ó <span class="filepond--label-action">buscalos</span>'
            />
        </span>

    )
}

export default Pond