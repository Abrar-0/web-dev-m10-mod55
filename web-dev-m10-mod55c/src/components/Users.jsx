import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {

    const users = useLoaderData()
    const [usersD, setUsersD] = useState(users)

    const handleDelete = (id) =>{
        
        console.log('delete', id);
        fetch(`http://localhost:5000/users/${id}`,{
            method:'DELETE'
        })
        .then( res=> res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                alert('Deleted Successfully')
                const remaining = usersD.filter(user => user._id !== id)
                setUsersD(remaining)
            }
        })
    }

    return (
        <div>
            <h2>length: {users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name}: {user.email} 
                    <Link to={`/update/${user._id}`}><button>Update</button>
                    </Link>
                    <button
                        onClick={()=>handleDelete(user._id)}
                    >X </button></p>)
                }
            </div>
        </div>
    );
};

export default Users;
