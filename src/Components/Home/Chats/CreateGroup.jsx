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

    const createGroupHandle = async (e) => {
        e.preventDefault();
        setName("");
        setDescription("");
        const {
            data: { group },
        } = await axios.post(`${baseUrl}/groups/create`, {
            adminId: user._id,
            isPublic: false,
            description: description,
            groupName: name,
        });
        addGroup(group);
    };


    return (
        <div className="create-group">
            {error !== "" && <p className="error-style">{error}</p>}
            <form onSubmit={(e) => createGroupHandle(e)}>
                <div>
                    <input type="text"
                        className="Group name"
                        value={name}
                        onChange={(e) => {
                            setError("");
                            setName(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    disabled={name === " "}
                    className=""
                >

                </button>
            </form>
        </div>
    )
}

export default CreateGroup