import React from 'react'
import { useState } from "react";
import { useAuth } from '../../../Context/authProvider';
import { useData } from '../../../Context/dataProvider';
import { baseUrl } from '../../../utils/api';

const CreateGroup = () => {
    const [error, setError] = useState("");
    const [name, setName] = useState("")
    const [description, setDescription] = useState("");
    const { user } = useAuth();
    const { addGroup } = useData();
    
    return (
        <div>CreateGroup</div>
    )
}

export default CreateGroup