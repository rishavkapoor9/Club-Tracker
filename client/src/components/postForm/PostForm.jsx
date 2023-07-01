import React, { useState, useRef } from 'react';
import './postForm.css'; // Import the CSS file for styling

const FormComponent = () => {
    const [formData, setFormData] = useState({
        text: '',
        photo: null,
        video: null,
        audio: null,
        pdf: null,
    });

    const fileInputRefs = {
        photo: useRef(null),
        video: useRef(null),
        audio: useRef(null),
        pdf: useRef(null),
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleDrop = (e, field) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setFormData((prevData) => ({
            ...prevData,
            [field]: file,
        }));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleBrowseClick = (field) => {
        fileInputRefs[field].current.click();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        placeholder='Write a good caption!'
                        type="text"
                        id="text"
                        name="text"
                        value={formData.text}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <div
                        className="drag-drop-field"
                        onDrop={(e) => handleDrop(e, 'photo')}
                        onDragOver={handleDragOver}
                        onClick={() => handleBrowseClick('photo')}
                    >
                        {formData.photo ? (
                            <div className="preview-image">
                                <img
                                    src={URL.createObjectURL(formData.photo)}
                                    alt="Preview"
                                />
                            </div>
                        ) : (
                            <div className="drag-drop-text">
                                <p>Drag and drop a Photo file here or click to select a file</p>
                            </div>
                        )}
                    </div>
                    <input
                        type="file"
                        id="photo"
                        name="photo"
                        accept="image/*"
                        ref={fileInputRefs.photo}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <div
                        className="drag-drop-field"
                        onDrop={(e) => handleDrop(e, 'video')}
                        onDragOver={handleDragOver}
                        onClick={() => handleBrowseClick('video')}
                    >
                        {formData.video ? (
                            <div className="preview-file">
                                <p>{formData.video.name}</p>
                            </div>
                        ) : (
                            <div className="drag-drop-text">
                                <p>Drag and drop a Video file here or click to select a file</p>
                            </div>
                        )}
                    </div>
                    <input
                        type="file"
                        id="video"
                        name="video"
                        accept="video/*"
                        ref={fileInputRefs.video}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">

                    <div
                        className="drag-drop-field"
                        onDrop={(e) => handleDrop(e, 'audio')}
                        onDragOver={handleDragOver}
                        onClick={() => handleBrowseClick('audio')}
                    >
                        {formData.audio ? (
                            <div className="preview-file">
                                <p>{formData.audio.name}</p>
                            </div>
                        ) : (
                            <div className="drag-drop-text">
                                <p>Drag and drop a Audio file here or click to select a file</p>
                            </div>
                        )}
                    </div>
                    <input
                        type="file"
                        id="audio"
                        name="audio"
                        accept="audio/*"
                        ref={fileInputRefs.audio}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <div
                        className="drag-drop-field"
                        onDrop={(e) => handleDrop(e, 'pdf')}
                        onDragOver={handleDragOver}
                        onClick={() => handleBrowseClick('pdf')}
                    >
                        {formData.pdf ? (
                            <div className="preview-file">
                                <p>{formData.pdf.name}</p>
                            </div>
                        ) : (
                            <div className="drag-drop-text">
                                <p>Drag and drop a PDF file here or click to select a file</p>
                            </div>
                        )}
                    </div>
                    <input
                        type="file"
                        id="pdf"
                        name="pdf"
                        accept=".pdf"
                        ref={fileInputRefs.pdf}
                        onChange={handleChange}
                    />
                    <button type="submit" className='submit'>Share</button>
                </div>

                {/* ... */}
            </form>
        </div>
    );
};

export default FormComponent;
