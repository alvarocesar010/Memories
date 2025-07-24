import axios from "axios"

import { useState } from "react"

import './AddMemory.css'

const AddMemory = () => {
    return (
        <div className="add-memory-page">
            <h2>Create a new memory</h2>
            <form >
                <label>
                    <p>Title:</p>
                    <input type="text" placeholder="Define a title" name="title" />
                </label>
                <label>
                    <p>Description:</p>
                    <textarea type="text" placeholder="Describe about the memory..." name="description" />
                </label>
                <label>
                    <p>Image:</p>
                    <input type="file" name="image" />
                </label>
                <input type="submit" value="Send"  className="btn"/>
            </form>
        </div>
    )
}

export default AddMemory
