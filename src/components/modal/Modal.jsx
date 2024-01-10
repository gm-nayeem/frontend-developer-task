import { useState } from 'react';
import './modal.css';

const Modal = ({ setOpen }) => {
    const [files, setFiles] = useState([]);

    const handleFiles = (e) => {
        const { length } = e.target.files;

        const arr = Object.values(e.target.files);
        setFiles(arr.map(file => file.name));

        console.log('files: ', length);
    }

    return (
        <div className="modal">
            <div className="file-content">
                <input
                    type="file" name='file' multiple
                    className="fileInput"
                    onChange={handleFiles}
                />
                <div className="displayFiles">
                    <ul>
                        {
                            files?.length > 0 ? (
                                files.map((file, i) => <li key={i}>{file}</li>)
                            ) : null
                        }
                    </ul>
                </div>
            </div>
            <div className="btn">
                <span
                    className='deleteBtn'
                    onClick={() => setOpen(false)}
                >
                    X
                </span>
            </div>
        </div>
    )
}

export default Modal;