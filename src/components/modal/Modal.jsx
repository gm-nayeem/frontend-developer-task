import { useState } from 'react';
import axios from 'axios';
import './modal.css';
import { useCardInfo } from '../../hooks/useCardInfo';

const Modal = ({ selectedCard, setFileNum, setOpen }) => {
    const [files, setFiles] = useState([]);
    const { data: cardArr } = useCardInfo();

    const {
        id, ref, totalFileNumber
    } = selectedCard;

    const handleFiles = (e) => {
        const { length } = e.target.files;
        setFileNum(length);

        const arr = Object.values(e.target.files);
        setFiles(arr.map(file => file.name));

        updateCard();
    }

    const updateCard = async () => {
        try {
            const singleCard = cardArr.find(item => item.id === ref);
            if (!singleCard) return 'Something went wrong!';

            singleCard.cards.map(card => {
                if (card.id === id) return card.totalFileNumber = length;
                return card;
            });

            console.log(ref)

            const apiUrl = `http://localhost:3500/card-info/${ref}`;
            const res = await axios.put(
                apiUrl,
                singleCard,
                { headers: { 'Content-Type': 'application/json' } }
            );
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
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