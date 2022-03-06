import React, { useState } from 'react'
import { MDBValidation, MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
    title: "",
    description: "",
    category: "",
    imageUrl: ""
}

const options = ["Travel", "Fashon", "fitness", "sports", "Food", "Tech"];





// z5prfuuq
const AddEditBlog = () => {
    const [formValue, setFormValue] = useState(initialState);
    const [categoryErrMsg, setCategoryErrMsg] = useState(null);
    const { title, description, category, imageUrl } = formValue;
    const handleSubmit = () => { };
    return (
        <MDBValidation className='row g-3' style={{ marginTop: "100px" }} noValidate onSubmit={handleSubmit}>
            <p className='fs-2 fw-bold'>Add Blog</p>
            <div style={{ margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center" }}>
                <MDBInput value={title} name="title" type="text"
                    onchange={onInputChange} required label="title"
                    validation="please provide a title"
                    invalid />

                <MDBInput value={description} name="description" type="text"
                    onchange={onInputChange} required label="Description"
                    validation="please provide a description"
                    textarea rows={4} invalid />

                <MDBInput name="description" type="file"
                    onchange={onInputChange} required
                    validation="please provide a file" invalid />

                    
            </div>
        </MDBValidation>
    )
}

export default AddEditBlog;