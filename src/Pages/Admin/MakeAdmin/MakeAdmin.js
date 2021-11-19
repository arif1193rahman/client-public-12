import { TextField } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const handleOnBlur = e=>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = (e)=>{
        const user = {email}
        fetch(`https://polar-oasis-62677.herokuapp.com/services/admin`,{
            method:'PUT',
            headers: { 
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
e.preventDefault();
    }
    return (
        <div>
            Make Admin
            <form onSubmit={handleAdminSubmit}>
                <TextField 
                type="email" 
                onBlur={handleOnBlur}
                label="Email"
                variant="standard"/>
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;