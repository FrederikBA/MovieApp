import axios from "axios"
import { useParams } from "react-router"
import { useState } from "react"

const EditMovie = () => {
    const id = parseInt(useParams().id)
    return (
        <div>
            <h1>Edit Movie</h1>

        </div>
    )
}

export default EditMovie